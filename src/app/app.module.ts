import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SideBarComponent } from './components/molecules/side-bar/side-bar.component';
import { HeaderComponent } from './components/molecules/header/header.component';
import { SelectedBodyInfosComponent } from './components/pages/selected-body-infos/selected-body-infos.component';
import { SearchComponent } from './components/atoms/search/search.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BodySelectionComponent } from './components/molecules/body-selection/body-selection.component';
import { ClockComponent } from './components/atoms/clock/clock.component';
import { ResetButtonComponent } from './components/atoms/reset-button/reset-button.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { ToolsComponent } from './components/atoms/tools/tools.component'
@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    HeaderComponent,
    SelectedBodyInfosComponent,
    SearchComponent,
    BodySelectionComponent,
    ClockComponent,
    ResetButtonComponent,
    HomePageComponent,
    ContactComponent,
    ToolsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(fr.default);
  }
}