import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { RecordPage } from '../record/record';
import { ListenPage } from '../listen/listen';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = RecordPage;
  tab3Root = ListenPage;

  constructor() {

  }
}
