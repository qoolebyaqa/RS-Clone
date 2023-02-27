import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game1',
  templateUrl: './game1.component.html',
  styleUrls: ['./game1.component.scss']
})
export class Game1Component implements OnInit{
  exercise: string = '';
  resolution: string = '';
  answersArr: string[] = [];
  count: string = '';
  replied: boolean = false;

  answerCheker(e: Event) {
    e.preventDefault();
    const targ = e.target as HTMLButtonElement;
    if (targ.innerHTML.trim() === this.resolution) {
      targ.style.backgroundColor = 'green';
      this.count = (Number(this.count) + 1).toString();
    } else {
      targ.style.backgroundColor = 'red';
      if (Number(this.count) > 0) this.count = (Number(this.count) - 1).toString();
    }
    this.replied = true;
  }


  ngOnInit(): void {
    const operatorsArr: string[] = ['+', '-', '*'];
    this.answersArr = [];
    let i = 0;
    let a = Math.floor(Math.random()*100);
    let b = Math.floor(Math.random()*100);
    while (a < b) {
      a = Math.floor(Math.random()*100);
      b = Math.floor(Math.random()*100);
    }
    const typeOperation = operatorsArr[Math.floor(Math.random()*3)];
    this.exercise = `${a} ${typeOperation} ${b} = ?`;
    switch (typeOperation) {
      case '+': this.resolution = (a + b).toString(); break;
      case '-': this.resolution = (a - b).toString(); break;
      case '*': this.resolution = (a * b).toString(); break;
      default: console.log('s');
    }
    while (this.answersArr.length < 4) {
      if(i%2 === 0) {
        if (!this.answersArr.includes((Number(this.resolution) + Math.floor(Math.random()*100)).toString())) {
          i++;
          this.answersArr.push((Number(this.resolution) + Math.floor(Math.random()*100)).toString());
        }
      } else {
        if (!this.answersArr.includes((Number(this.resolution) - Math.floor(Math.random()*100)).toString())) {
          i++;
          this.answersArr.push((Number(this.resolution) - Math.floor(Math.random()*100)).toString());
        }
      }
    }
    this.answersArr[Math.floor(Math.random()*4)] = this.resolution;
    this.replied = false;
  }

}
