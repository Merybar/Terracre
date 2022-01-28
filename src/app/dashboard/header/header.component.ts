import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() toggledEvent: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  toggleAction() {
    this.toggledEvent.emit();
  }
}
