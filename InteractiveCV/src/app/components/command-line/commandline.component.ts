import { CommonModule } from '@angular/common';
import {Component, ElementRef, ViewChild, AfterViewInit, OnInit, HostListener} from '@angular/core';
import { FormsModule } from '@angular/forms';
import  {Command} from './../../enums'
import {Router} from '@angular/router';

@Component({
  selector: 'app-commandline',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './commandline.component.html',
  styleUrl: './commandline.component.less'
})
export class CommandlineComponent implements OnInit {
  constructor(private router: Router) {};

  @ViewChild('textSizer', { static: false }) textSizer!: ElementRef;
  @ViewChild('inputField', { static: false }) inputField!: ElementRef;
  @ViewChild('inputField', { static: false }) consoleInput!: ElementRef;

  @HostListener('document:keydown.enter', ['$event']) handleEnterPress(event: KeyboardEvent) {
    if (!this.isDisplayedInput) {
      this.skipTypingAnimation();
    }
  }

  text: string[] = [
    "\nWelcome to My CV!",
    "Loading profile...",
    "Name: Ilia Isaev",
    "Skills: JavaScript, Angular, HTML, CSS",
    "Experience: 4+ years in web development",
    "Type 'help' for available commands."
  ];

  private index = 0;
  private charIndex = 0;
  consoleText: string = '';
  userInput: string = '';
  isDisplayedInput: boolean = false;
  private typingTimeout: any;
  showHelp: boolean = false;

  ngOnInit() {
    this.typeCharacter();
  }

  typeCharacter() {
    if (this.index < this.text.length) {
      if (this.charIndex < this.text[this.index].length) {
        this.consoleText += this.text[this.index][this.charIndex];
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
      setTimeout(() => this.consoleInput.nativeElement.focus(), 0);
    }
  }

  skipTypingAnimation() {
    clearTimeout(this.typingTimeout);
    this.consoleText = this.text.join("\n");
    this.isDisplayedInput = true;
    setTimeout(() => this.consoleInput?.nativeElement?.focus(), 0);
  }

  adjustWidth() {
    if (!this.textSizer || !this.inputField) {
      console.warn('textSizer или inputField не инициализированы!');
      return;
    }

    setTimeout(() => {
      const textWidth = Math.max(this.textSizer.nativeElement.offsetWidth + 5, 10);
      console.log('Ширина текста:', textWidth);
      this.inputField.nativeElement.style.width = `${textWidth + 2}px`;
    }, 0);

    setTimeout(() => {
      const textWidth = this.textSizer.nativeElement.offsetWidth + 5;
      this.inputField.nativeElement.style.width = `${textWidth}px + 4px`;
    }, 0);
  }

  executeCommand() {
    const command = this.userInput.trim().toLowerCase();

    if (!command) return;

    this.consoleText += `\n> ${this.userInput}`;
    this.userInput = '';

    switch (command) {
      case Command.Help:
        this.showHelp = true; // Показываем HelpComponent
        break;

      case Command.Work_experience:
        this.router.navigate(['/work-experience']);
        break;

      case Command.Education:
        this.router.navigate(['/education']);
        break;

      case Command.Skills:
        this.router.navigate(['/skills']);
        break;

      case Command.Projects:
        this.router.navigate(['/projects']);
        break;

      case Command.Clear:
        this.consoleText = '';
        this.showHelp = false; // Скрываем HelpComponent при очистке консоли
        break;

      default:
        this.consoleText += "\nUnknown command. Type 'help' for a list of commands.";
    }
  }

  }



