import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SelectedBodyInfosComponent } from './components/selected-body-infos/selected-body-infos.component';
import { SelectionService } from './services/selection.service';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: SelectedBodyInfosComponent },
  { path: 'bodies/:id', component: SelectedBodyInfosComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  selectedBody: any[] = []

  constructor(private selectionService: SelectionService) {
    this.selectionService.selectedBody$.subscribe(body => { this.selectedBody = body; /* console.log(body) */ })
  }
}
