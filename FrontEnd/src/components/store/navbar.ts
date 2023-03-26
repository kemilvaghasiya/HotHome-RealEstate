import {
  action, computed, makeObservable, observable,
} from 'mobx';
// eslint-disable-next-line import/no-cycle
import { IRootStore } from './rootstore';

export default class NavBarStore {
  drawerOpen: boolean = false;

  tabSelected:string = '';

  rootStore: IRootStore;

  refretchProjectData:boolean=false;

  constructor(rootStore: IRootStore) {
    makeObservable(this, {
      drawerOpen: observable,
      tabSelected: observable,
      getTabSelected: computed,
      getdrawerOpen: computed,
      setDrawerOpen: action,
      setTabSelected: action,
      //
      refretchProjectData:observable,
      getRefetchProjectData:computed,
      setRefetchProjectData:action
    });
    this.rootStore = rootStore;
  }

  setDrawerOpen = (value:boolean) => {
    this.drawerOpen = value;
  };

  setTabSelected = (value:string) => {
    this.tabSelected = value;
  };

  get getTabSelected() {
    return this.tabSelected;
  }

  get getdrawerOpen() {
    return this.drawerOpen;
  }

  get getRefetchProjectData(){
    return this.refretchProjectData
  }

  setRefetchProjectData =(value:boolean)=>{
    this.refretchProjectData=value;
  }
}
