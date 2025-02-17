import { CommonModule } from '@angular/common';
import {Component, ElementRef, ViewChild, AfterViewInit, OnInit, HostListener} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-commandline',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './commandline.component.html',
  styleUrl: './commandline.component.less'
})
export class CommandlineComponent implements OnInit {
  @ViewChild('textSizer', { static: false }) textSizer!: ElementRef;
  @ViewChild('inputField', { static: false }) inputField!: ElementRef;
  @ViewChild('consoleInput', { static: false }) consoleInput!: ElementRef;

  @HostListener('document:keydown.enter', ['$event']) handleEnterPress(event: KeyboardEvent) {
    if (!this.isDisplayedInput) {
      this.typeCharacter(true);
    }
  }

  text: string[] = [
    "\nWelcome to My CV!",
    "Loading profile...",
    "Name: Ilia Isaev",
    "Skills: JavaScript, Angular, HTML, CSS",
    "Experience: 5+ years in web development",
    "Type 'help' for available commands."
  ];

  private index = 0;
  private charIndex = 0;
  consoleText: string = '';
  userInput: string = '';
  isDisplayedInput: boolean = false;

  ngOnInit() {
    this.typeCharacter();
  }

  typeCharacter(skipAnimation = false) {
    if (skipAnimation) {
      this.consoleText = this.text.join("\n");
      this.isDisplayedInput = true;
      setTimeout(() => this.consoleInput.nativeElement.focus(), 0);
      return;
    }

    if (this.index < this.text.length) {
      if (this.charIndex < this.text[this.index].length) {
        this.consoleText += this.text[this.index][this.charIndex];
        this.charIndex++;
        setTimeout(() => this.typeCharacter(), 50);
      } else if (this.index < this.text.length - 1) {
        this.consoleText += "\n";
        this.charIndex = 0;
        this.index++;
        setTimeout(() => this.typeCharacter(), 500);
      } else {
        this.isDisplayedInput = true;
        setTimeout(() => {
          if (this.consoleInput) {
            this.consoleInput.nativeElement.focus();
          }
          this.adjustWidth();
        }, 0);
      }
    }
  }

  adjustWidth() {
    if (!this.textSizer || !this.inputField) {
      console.warn('textSizer или inputField не инициализированы!');
      return;
    }

    setTimeout(() => {
      const textWidth = Math.max(this.textSizer.nativeElement.offsetWidth + 5, 10); // Минимум 10px
      console.log('Ширина текста:', textWidth);
      this.inputField.nativeElement.style.width = `${textWidth}px`;
    }, 0);

    setTimeout(() => {
      const textWidth = this.textSizer.nativeElement.offsetWidth + 5; // Добавляем небольшой запас
      this.inputField.nativeElement.style.width = `${textWidth}px + 2px`;
    }, 0);
  }


  }

