import { Component, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { tabComponent } from './tabComponent';

@Component({
  selector: 'tabs',
  templateUrl:'./App/Views/tabs.html'
})
export class Tabs implements AfterContentInit {
  
  @ContentChildren(tabComponent) tabs: QueryList<tabComponent>;
  
  // contentChildren are set
  ngAfterContentInit() {
    // get all active tabs
    let activeTabs = this.tabs.filter((tab)=>tab.active);
    
    // if there is no active tab set, activate the first
    if(activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }
  
  selectTab(tab: tabComponent){
    // deactivate all tabs
    this.tabs.toArray().forEach(tab => tab.active = false);
    
    // activate the tab the user has clicked on.
    tab.active = true;
  }

}
