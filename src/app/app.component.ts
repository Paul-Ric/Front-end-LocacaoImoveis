import { Component,ViewChild } from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout'
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'locacaoimoveis';
  sideBarOpen= true;
  appearMenu:boolean
  @ViewChild(MatSidenav)
  sidenav!:MatSidenav
  opened=false


  constructor(

    private observer:BreakpointObserver,
    private router:Router
    ){}

    sideBarToggler() {
      this.sideBarOpen = !this.sideBarOpen;
    }
    ngAfterViewInit(){
      this.observer.observe(['(max-width:800px)']).subscribe((res)=>{
          if(res.matches){
            this.sidenav.mode='over'
            this.sidenav.close()
          }else{
            this.sidenav.mode='side'
            this.sidenav.open()
          }
      })
      }
}
