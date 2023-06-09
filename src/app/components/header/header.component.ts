import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();
  isActive = false

  toggleSideBar() {
    this.toggleSideBarForMe.emit();

  }
}
