import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {

  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter()
  sideBarOpen: boolean = true
  panelOpenState = false

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen
  }
}
