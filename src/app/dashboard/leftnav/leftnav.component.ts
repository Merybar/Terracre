import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-leftnav',
  templateUrl: './leftnav.component.html',
  styleUrls: ['./leftnav.component.scss'],
})
export class LeftnavComponent implements OnInit {
  @Output() toggledEvent: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  toggleAction() {
    this.toggledEvent.emit();
  }
}
