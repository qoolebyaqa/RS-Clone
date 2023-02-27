import { Component } from '@angular/core';

@Component({
  selector: 'app-game2',
  templateUrl: './game2.component.html',
  styleUrls: ['./game2.component.scss']
})
export class Game2Component {



  janken(e: Event) {
    const options = ['paper', 'scissors', 'rock'];
    const hisChoice = Math.floor(Math.random() * 3);
    const yourChoice = e.target as HTMLElement;

    if (yourChoice.id === 'rock' && options[hisChoice] === 'rock') {
      (yourChoice.parentElement!.children[0] as HTMLElement).classList.add("hidden");
      (yourChoice.parentElement!.children[1] as HTMLElement).classList.add("hidden");
      (yourChoice.parentElement!.nextSibling as HTMLElement).innerHTML = '';
      (yourChoice.parentElement!.nextSibling as HTMLElement).innerHTML = 'Ничья';
      (yourChoice.parentElement!.parentElement!.children[2].children[0] as HTMLElement).classList.add("hidden");
      (yourChoice.parentElement!.parentElement!.children[2].children[1] as HTMLElement).classList.add("hidden");
    }
    if (yourChoice.id === 'rock' && options[hisChoice] === 'scissors') {
      (yourChoice.parentElement!.children[0] as HTMLElement).classList.add("hidden");
      (yourChoice.parentElement!.children[1] as HTMLElement).classList.add("hidden");
      (yourChoice.parentElement!.nextSibling as HTMLElement).innerHTML = '';
      (yourChoice.parentElement!.nextSibling as HTMLElement).innerHTML = 'Победа';
      (yourChoice.parentElement!.parentElement!.children[2].children[0] as HTMLElement).classList.add("hidden");
      (yourChoice.parentElement!.parentElement!.children[2].children[2] as HTMLElement).classList.add("hidden");
      (yourChoice.parentElement!.parentElement!.children[3] as HTMLElement).innerHTML =
      (Number((yourChoice.parentElement!.parentElement!.children[3] as HTMLElement).innerHTML) + 1).toString();
    }
    if (yourChoice.id === 'rock' && options[hisChoice] === 'paper') {
      (yourChoice.parentElement!.children[0] as HTMLElement).classList.add("hidden");
      (yourChoice.parentElement!.children[1] as HTMLElement).classList.add("hidden");
      (yourChoice.parentElement!.nextSibling as HTMLElement).innerHTML = '';
      (yourChoice.parentElement!.nextSibling as HTMLElement).innerHTML = 'Поражение';
      (yourChoice.parentElement!.parentElement!.children[2].children[1] as HTMLElement).classList.add("hidden");
      (yourChoice.parentElement!.parentElement!.children[2].children[2] as HTMLElement).classList.add("hidden");
      if ((Number((yourChoice.parentElement!.parentElement!.children[3] as HTMLElement).innerHTML) - 1) >= 0) {
        (yourChoice.parentElement!.parentElement!.children[3] as HTMLElement).innerHTML =
        (Number((yourChoice.parentElement!.parentElement!.children[3] as HTMLElement).innerHTML) - 1).toString();
      }
    }
    if (yourChoice.id === 'paper' && options[hisChoice] === 'rock') {
      (yourChoice.parentElement!.children[1] as HTMLElement).classList.add("hidden");
      (yourChoice.parentElement!.children[2] as HTMLElement).classList.add("hidden");
      (yourChoice.parentElement!.nextSibling as HTMLElement).innerHTML = '';
      (yourChoice.parentElement!.nextSibling as HTMLElement).innerHTML = 'Победа';
      (yourChoice.parentElement!.parentElement!.children[2].children[0] as HTMLElement).classList.add("hidden");
      (yourChoice.parentElement!.parentElement!.children[2].children[1] as HTMLElement).classList.add("hidden");
      (yourChoice.parentElement!.parentElement!.children[3] as HTMLElement).innerHTML =
      (Number((yourChoice.parentElement!.parentElement!.children[3] as HTMLElement).innerHTML) + 1).toString();
    }
    if (yourChoice.id === 'paper' && options[hisChoice] === 'paper') {
      (yourChoice.parentElement!.children[1] as HTMLElement).classList.add("hidden");
      (yourChoice.parentElement!.children[2] as HTMLElement).classList.add("hidden");
      (yourChoice.parentElement!.nextSibling as HTMLElement).innerHTML = '';
      (yourChoice.parentElement!.nextSibling as HTMLElement).innerHTML = 'Ничья';
      (yourChoice.parentElement!.parentElement!.children[2].children[1] as HTMLElement).classList.add("hidden");
      (yourChoice.parentElement!.parentElement!.children[2].children[2] as HTMLElement).classList.add("hidden");
    }
    if (yourChoice.id === 'paper' && options[hisChoice] === 'scissors') {
      (yourChoice.parentElement!.children[1] as HTMLElement).classList.add("hidden");
      (yourChoice.parentElement!.children[2] as HTMLElement).classList.add("hidden");
      (yourChoice.parentElement!.nextSibling as HTMLElement).innerHTML = '';
      (yourChoice.parentElement!.nextSibling as HTMLElement).innerHTML = 'Поражение';
      (yourChoice.parentElement!.parentElement!.children[2].children[0] as HTMLElement).classList.add("hidden");
      (yourChoice.parentElement!.parentElement!.children[2].children[2] as HTMLElement).classList.add("hidden");
      if ((Number((yourChoice.parentElement!.parentElement!.children[3] as HTMLElement).innerHTML) - 1) >= 0) {
        (yourChoice.parentElement!.parentElement!.children[3] as HTMLElement).innerHTML =
        (Number((yourChoice.parentElement!.parentElement!.children[3] as HTMLElement).innerHTML) - 1).toString();
      }
    }
    if (yourChoice.id === 'scissors' && options[hisChoice] === 'rock') {
      (yourChoice.parentElement!.children[0] as HTMLElement).classList.add("hidden");
      (yourChoice.parentElement!.children[2] as HTMLElement).classList.add("hidden");
      (yourChoice.parentElement!.nextSibling as HTMLElement).innerHTML = '';
      (yourChoice.parentElement!.nextSibling as HTMLElement).innerHTML = 'Поражение';
      (yourChoice.parentElement!.parentElement!.children[2].children[0] as HTMLElement).classList.add("hidden");
      (yourChoice.parentElement!.parentElement!.children[2].children[1] as HTMLElement).classList.add("hidden");
      if ((Number((yourChoice.parentElement!.parentElement!.children[3] as HTMLElement).innerHTML) - 1) >= 0) {
        (yourChoice.parentElement!.parentElement!.children[3] as HTMLElement).innerHTML =
        (Number((yourChoice.parentElement!.parentElement!.children[3] as HTMLElement).innerHTML) - 1).toString();
      }
    }
    if (yourChoice.id === 'scissors' && options[hisChoice] === 'scissors') {
      (yourChoice.parentElement!.children[0] as HTMLElement).classList.add("hidden");
      (yourChoice.parentElement!.children[2] as HTMLElement).classList.add("hidden");
      (yourChoice.parentElement!.nextSibling as HTMLElement).innerHTML = '';
      (yourChoice.parentElement!.nextSibling as HTMLElement).innerHTML = 'Ничья';
      (yourChoice.parentElement!.parentElement!.children[2].children[0] as HTMLElement).classList.add("hidden");
      (yourChoice.parentElement!.parentElement!.children[2].children[2] as HTMLElement).classList.add("hidden");
    }
    if (yourChoice.id === 'scissors' && options[hisChoice] === 'paper') {
      (yourChoice.parentElement!.children[0] as HTMLElement).classList.add("hidden");
      (yourChoice.parentElement!.children[2] as HTMLElement).classList.add("hidden");
      (yourChoice.parentElement!.nextSibling as HTMLElement).innerHTML = '';
      (yourChoice.parentElement!.nextSibling as HTMLElement).innerHTML = 'Победа';
      (yourChoice.parentElement!.parentElement!.children[2].children[1] as HTMLElement).classList.add("hidden");
      (yourChoice.parentElement!.parentElement!.children[2].children[2] as HTMLElement).classList.add("hidden");
      (yourChoice.parentElement!.parentElement!.children[3] as HTMLElement).innerHTML =
      (Number((yourChoice.parentElement!.parentElement!.children[3] as HTMLElement).innerHTML) + 1).toString();
    }

  }

  restart (e: Event) {
    const btn = e.target as HTMLButtonElement;
    (btn.parentElement!.children[0].children[0] as HTMLElement).classList.remove("hidden");
    (btn.parentElement!.children[0].children[1] as HTMLElement).classList.remove("hidden");
    (btn.parentElement!.children[0].children[2] as HTMLElement).classList.remove("hidden");
    (btn.parentElement!.children[2].children[0] as HTMLElement).classList.remove("hidden");
    (btn.parentElement!.children[2].children[1] as HTMLElement).classList.remove("hidden");
    (btn.parentElement!.children[2].children[2] as HTMLElement).classList.remove("hidden");
    (btn.parentElement!.children[1] as HTMLElement).innerHTML = '';
    (btn.parentElement!.children[1] as HTMLElement).innerHTML = 'Выбирай!';
  }
}
