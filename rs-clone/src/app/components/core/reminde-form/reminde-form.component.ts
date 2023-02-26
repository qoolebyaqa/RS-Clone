import { Component, EventEmitter, Input, Output } from '@angular/core';
import { INote, NoteClass } from 'src/app/classes/interfaces/interfaces';
import { NewserviceService } from 'src/app/newservice.service';

@Component({
  selector: 'app-reminde-form',
  templateUrl: './reminde-form.component.html',
  styleUrls: ['./reminde-form.component.scss']
})
export class RemindeFormComponent {
  @Output()
  closer = new EventEmitter();
  @Input() CurrentTime?: string;

  constructor(public serv: NewserviceService) {

  }

  hidder(e?: Event) {
    e?.preventDefault();
    this.closer.emit();
  }

  async postNote(obj: INote) {
    const newPost = new NoteClass();
    newPost.text = obj.text;
    newPost.time = obj.time;
    let notesArr: INote[] = [];
    if (localStorage["notes"]) {
      notesArr = JSON.parse(localStorage["notes"]);
      this.serv.notes = JSON.parse(localStorage["notes"]);
    }
    notesArr.push(newPost);
    this.serv.notes.push(newPost);
    localStorage.setItem("notes", JSON.stringify(this.serv.notes));
    this.hidder();
  }
}
