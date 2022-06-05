import { Action, createReducer, on } from '@ngrx/store';
import { sideBarOpen, sideBarClose } from './side-bar.actions';
import { SideBar } from './side-bar.model';

const initialState: SideBar = {
  open: true,
};

export const sideBarReducer = createReducer(
  initialState,
  on(sideBarClose, (state,action) => {
    console.log(action)
    return {...state,open:false};
  })
);
/* export function reducer(state: any, action: Action) {
  return featureReducer(state, action);
}
 */
