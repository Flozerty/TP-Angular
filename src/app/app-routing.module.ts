import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectedBodyInfosComponent } from './pages/selected-body-infos/selected-body-infos.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent, pathMatch: 'full' },
  { path: 'bodies/:id', component: SelectedBodyInfosComponent, pathMatch: 'full' },
  { path: '*', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
