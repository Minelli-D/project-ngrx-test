import { Component, Input, OnInit } from '@angular/core';
import { props, Store } from '@ngrx/store';
import { SideBar } from '../side-bar/store/side-bar.model';
import { sideBarOpen, sideBarClose } from '../side-bar/store/side-bar.actions';
@Component({
  selector: 'app-header-button',
  templateUrl: './header-button.component.html',
  styleUrls: ['./header-button.component.scss']
})
export class HeaderButtonComponent implements OnInit {
  @Input()
  drawer:{} | undefined

  constructor(private store: Store<{state:SideBar}>) { }

  ngOnInit(): void {
  }


  dispatchTest(){
      const test:SideBar = {
        open:true
      }
      this.store.dispatch(sideBarClose( ));
  }
}
