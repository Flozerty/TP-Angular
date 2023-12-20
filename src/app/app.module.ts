import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { SelectedBodyInfosComponent } from './components/selected-body-infos/selected-body-infos.component';
import { SearchComponent } from './components/search/search.component';
import { FormsModule } from '@angular/forms';
import { BodySelectionComponent } from './components/body-selection/body-selection.component'
@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    HeaderComponent,
    SelectedBodyInfosComponent,
    SearchComponent,
    BodySelectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
