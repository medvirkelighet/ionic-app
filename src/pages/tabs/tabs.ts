import { Component } from '@angular/core';

import { MapPage } from '../map/map';
import { MediaPage } from '../media/media';
import { InfoPage } from '../info/info';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = InfoPage;
  tab2Root = MapPage;
  tab3Root = MediaPage;

  constructor() {

  }
}
