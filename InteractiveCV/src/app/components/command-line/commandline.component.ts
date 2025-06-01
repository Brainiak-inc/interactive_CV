import { CommonModule } from '@angular/common';
import {Component, ElementRef, ViewChild, AfterViewInit, OnInit, HostListener, inject, Renderer2} from '@angular/core';
import { FormsModule } from '@angular/forms';
import  {Commands} from './../../enums'
import {Router, RouterModule} from '@angular/router';
import { HelpComponentComponent } from '../help-component/help-component.component';

@Component({
  selector: 'app-commandline',
  standalone: true,
  imports: [CommonModule, FormsModule, HelpComponentComponent, RouterModule],
  templateUrl: './commandline.component.html',
  styleUrl: './commandline.component.less'
})
export class CommandlineComponent implements OnInit, AfterViewInit {
  private readonly _renderer = inject(Renderer2);
  private readonly _router = inject(Router);

  @HostListener('document:click', ['$event'])
    onDocumentClick(event: MouseEvent) {
      if(this.inputField && event.target !== this.inputField.nativeElement) {
        this.focusInput();
      }
    }
  
  @ViewChild('textSizer', { static: false }) textSizer!: ElementRef;
  @ViewChild('inputField', { static: false }) inputField!: ElementRef;

  @HostListener('document:keydown.enter', ['$event']) handleEnterPress(event: KeyboardEvent) {
    if (!this.isDisplayedInput) {
      this.skipTypingAnimation();
    }
  }

 private readonly _text: string[] = [
    "\nWelcome to My CV!",
    "Loading profile...",
    "Name: Ilia Isaev",
    "Skills: Angular, JavaScript, TypeScript, RxJs, HTML, CSS",
    "Experience: 4+ years in web development",
    "Type 'help' for available commands..."
  ];

  private index = 0;
  private charIndex = 0;
  private typingTimeout: any;
  
  consoleText: string = '';
  userInput: string = '';
  isDisplayedInput: boolean = false;
  showHelp: boolean = false;
  showRoutedContent: boolean = false;

  ngOnInit() {
    this.typeCharacter();
  }

  ngAfterViewInit() {
    this.focusInput();
    this.adjustWidth();

    this._renderer.listen(this.inputField.nativeElement, 'blur', () => {
      setTimeout(() => {
        this.focusInput();
      }, 0);
    });
}

focusInput() {
  this.inputField?.nativeElement?.focus();
}

  typeCharacter() {
    if (this.index < this._text.length) {
      if (this.charIndex < this._text[this.index].length) {
        this.consoleText += this._text[this.index][this.charIndex];
        this.charIndex++;
        this.typingTimeout = setTimeout(() => this.typeCharacter(), 50);
      } else {
        this.consoleText += "\n";
        this.charIndex = 0;
        this.index++;
        this.typingTimeout = setTimeout(() => this.typeCharacter(), 500);
      }
    } else {
      this.isDisplayedInput = true;
      setTimeout(() => this.inputField.nativeElement.focus(), 0);
    }
  }

  skipTypingAnimation() {
    clearTimeout(this.typingTimeout);
    this.consoleText = this._text.join("\n");
    this.isDisplayedInput = true;
    setTimeout(() => this.inputField?.nativeElement?.focus(), 0);
  }

  adjustWidth() {
    if (!this.textSizer || !this.inputField) return;
  setTimeout(() => {
    const textWidth = Math.max(this.textSizer.nativeElement.offsetWidth, 20);
    this.inputField.nativeElement.style.width = `${textWidth + 10}px`;
  }, 0);
  }

  executeCommand() {
    const command = this.userInput.trim().toLowerCase();

    if (!command) return;

    this.consoleText += `\n> ${this.userInput}`;
    this.userInput = '';

    switch (command) {
      case Commands.Help:
        this.showHelp = true;
        this.consoleText += "\n>Displaying help information...";
        break;

      case Commands.Work:
        this.consoleText += "\nNavigating to work experience...";
        this.showRoutedContent = true;
        this._router.navigate(['/work']);
        break;

      case Commands.Education:
        this.consoleText += "\nNavigating to education...";
        this.showRoutedContent = true;
        this._router.navigate(['/education']);
        break;

      case Commands.Skills:
        this.consoleText += "\nNavigating to skills...";
        this.showRoutedContent = true;
        this._router.navigate(['/skills']);
        break;

      case Commands.Projects:
        this.consoleText += "\nNavigating to projects...";
        this.showRoutedContent = true;
        this._router.navigate(['/projects']);
        break;

      case Commands.Clear:
        this.typeCharacter;
        this.showHelp = false;
        this.showRoutedContent = false;
        this._router.navigate(['/']);
        break;

      default:
        this.consoleText += "\nUnknown command. Type 'help' for a list of commands.";
    }
    this.focusInput();
  }

}



