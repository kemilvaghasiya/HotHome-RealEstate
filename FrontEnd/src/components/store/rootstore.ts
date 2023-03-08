/* eslint-disable import/no-cycle */
import NavBarStore from './navbar';

export interface IRootStore {
    navBarStore: NavBarStore;
}

export class RootStore implements IRootStore {
  navBarStore: NavBarStore;


  constructor() {
    this.navBarStore = new NavBarStore(this);
  }
}
