import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectedBodyInfosComponent } from './components/pages/selected-body-infos/selected-body-infos.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { ContactComponent } from './components/pages/contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent, pathMatch: 'full' },
  { path: 'bodies/:id', component: SelectedBodyInfosComponent, pathMatch: 'full' },
  { path: 'contact', component: ContactComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }