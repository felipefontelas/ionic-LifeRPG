import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import { MapPage } from '../map/map';
import { ActivityPage } from '../activity/activity';
import { ProgressPage } from '../progress/progress';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ActivityPage;
  tab4Root = MapPage;
  tab5Root = ProgressPage;

  constructor() {

  }
}
