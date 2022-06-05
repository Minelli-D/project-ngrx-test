import { createAction, props } from '@ngrx/store';
import { SideBar } from './side-bar.model';


export const sideBarOpen = createAction(
  '[SideBar] Open',
  props<{state:SideBar}>(),
);

export const sideBarClose = createAction(
  '[SideBar] Close',
);
