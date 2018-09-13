import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/misc/header/header.component';
import { FilmListComponent } from './components/films/film-list/film-list.component';
import { FilmFinderPipe } from './shared/pipes/film-finder.pipe';
import { FilmItemComponent } from './components/films/film-item/film-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilmListComponent,
    FilmFinderPipe,
    FilmItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
