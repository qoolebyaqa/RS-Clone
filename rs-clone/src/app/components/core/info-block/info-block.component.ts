import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITask } from 'src/app/classes/interfaces/interfaces';
import { NewserviceService } from 'src/app/newservice.service';

@Component({
  selector: 'app-info-block',
  templateUrl: './info-block.component.html',
  styleUrls: ['./info-block.component.scss']
})
export class InfoBlockComponent {
  @Output()
  closerInfo = new EventEmitter();
  @Input()
  UpdatingTask?: ITask;
  wtf!: ITask;



  constructor (public serv: NewserviceService){}

  hidder(e?: Event) {
    e?.preventDefault();
    this.closerInfo.emit();
  }

  ngOnInit(): void {
    if (this.UpdatingTask)
    this.wtf = this.UpdatingTask;
  }

}
