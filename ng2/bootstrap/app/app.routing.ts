import { Route, RouterModule } from '@angular/router';
import { HomeworksComponent }     from './homeworks.component';
import { HomeworkDetailComponent } from './homework-detail.component';

const appRoutes: Route = [
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

export const routing = RouterModule.forRoot(appRoutes);

