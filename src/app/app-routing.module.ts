import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectedBodyInfosComponent } from './components/selected-body-infos/selected-body-infos.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: SelectedBodyInfosComponent },
  { path: 'bodies/:id', component: SelectedBodyInfosComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
