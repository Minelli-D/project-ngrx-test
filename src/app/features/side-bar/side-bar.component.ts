import { Component, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
@Component({
  selector: 'side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {
  @Input()
  sideBarStatus!: boolean;
  @Output()
  closeMenuButton: EventEmitter<any> = new EventEmitter<any>();

  closeMenu(){
    this.closeMenuButton.emit(false);
    console.log(this.sideBarStatus)

  }
}
