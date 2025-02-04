import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  imports: [],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.less'
})
export class MainPageComponent implements OnInit {
  text: string[] = [
    "\nWelcome to My CV!",
    "Loading profile...",
    "Name: Ilia Isaev",
    "Skills: JavaScript, Angular, HTML, CSS",
    "Experience: 5+ years in web development",
    "Type 'help' for available commands."
  ];
  
  index = 0;
  charIndex = 0;
  consoleText = '';
  
  ngOnInit() {
    this.typeCharacter();
  }

  typeCharacter() {
    if (this.index < this.text.length) {
      if (this.charIndex < this.text[this.index].length) {
        this.consoleText += this.text[this.index][this.charIndex];
        this.charIndex++;
        setTimeout(() => this.typeCharacter(), 50);
      } else {
        this.consoleText += "\n";
        this.charIndex = 0;
        this.index++;
        setTimeout(() => this.typeCharacter(), 500);
      }
    }
  }
}