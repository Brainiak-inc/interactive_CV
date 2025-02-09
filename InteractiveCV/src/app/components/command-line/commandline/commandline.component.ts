import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-commandline',
  imports: [CommonModule, FormsModule],
  templateUrl: './commandline.component.html',
  styleUrl: './commandline.component.less'
})
export class CommandlineComponent {
  @ViewChild('consoleInput') consoleInput!: ElementRef;

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

  typeCharacter() {
    if (this.index < this.text.length) {
      if (this.charIndex < this.text[this.index].length) {
        this.consoleText += this.text[this.index][this.charIndex];
        this.charIndex++;
        setTimeout(() => this.typeCharacter(), 50);
      } else if(this.index < this.text.length -1) {
        this.consoleText += "\n";
        this.charIndex = 0;
        this.index++;
        setTimeout(() => this.typeCharacter(), 500);
      } else {
        this.isDisplayedInput = true;
        setTimeout(() => this.consoleInput.nativeElement.focus(), 0);
      }
    }
  }

  proccessComand() {
    this.consoleText += "\n> " + this.userInput;
    this.userInput = '';
  }
}
