import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { sideBarReducer } from './side-bar/store/side-bar.reducer';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { HeaderButtonComponent } from './header-button/header-button.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ObjectCardComponent } from './object-card/object-card.component';

@NgModule({
  declarations: [
    SideBarComponent,
    ObjectCardComponent,
    HeaderButtonComponent,
  ],
  imports: [
    MatCardModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    StoreModule.forRoot({
      sideBarReducer: sideBarReducer,
    }),
    RouterModule
  ],
  exports: [
    SideBarComponent,
    ObjectCardComponent,
    HeaderButtonComponent,
  ],
})
export class FeaturesModule {}
