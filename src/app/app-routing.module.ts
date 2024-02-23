import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeaterHomeComponent } from './modules/weather/page/weater-home/weather-home.component';
import { NotFoundComponent } from './modules/weather/page/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'weather',
    pathMatch: 'full'
  },
  {
    path:  'weather',
    component: WeaterHomeComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
