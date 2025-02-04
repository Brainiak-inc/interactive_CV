import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  imports: [],
  templateUrl: './main-page.component.html',
   styleUrl: './main-page.component.less'
})
export class MainPageComponent implements OnInit {
  text: string[] = [
    "\nWelcome to My Retro Resume!",
    "Loading profile...",
    "Name: John Doe",
    "Skills: JavaScript, Python, HTML, CSS, React",
    "Experience: 5+ years in web development",
    "Type 'help' for available commands."
  ];
  
  index = 0;
  consoleText = '';

  ngOnInit() {
    this.typeLine();
  }

  typeLine() {
    if (this.index < this.text.length) {
      this.consoleText += this.text[this.index] + "\n";
      this.index++;
      setTimeout(() => this.typeLine(), 1000);
    }
  }
}