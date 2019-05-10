import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule, MatButtonModule, MatExpansionModule, MatListModule } from '@angular/material';

import { AppComponent } from './app.component';
import { CitiesComponent } from './pages/cities/cities.component';
import { ListCitiesComponent } from './components/list-cities/list-cities.component';

const materialComponents = [MatInputModule, MatButtonModule, MatExpansionModule, MatListModule];

@NgModule({
  declarations: [
    AppComponent,
    CitiesComponent,
    ListCitiesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ...materialComponents
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
