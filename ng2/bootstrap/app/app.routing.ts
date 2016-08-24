import { provideRouter, RouterConfig } from '@angular/router';
import { HomeworksComponent }     from './homeworks.component';
import { HomeworkDetailComponent } from './homework-detail.component';

const appRoutes: RouterConfig = [
  {
    path: '',
    redirectTo: '/homeworks',
    pathMatch: 'full'
  },
  {
    path: 'detail/:id',
    component: HomeworkDetailComponent
  },
  {
    path: 'homeworks',
    component: HomeworksComponent
  }
];

export const APP_ROUTER_PROVIDERS =  [
  provideRouter(appRoutes)
];
