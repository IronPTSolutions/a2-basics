import { Film } from './../../../shared/models/film.model';
import filmsMock from './../../../shared/data/films.data';
import { Component } from '@angular/core';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html'
})
export class FilmListComponent {
  films: Array<Film> = filmsMock;
  posterPreview: string = '';
  searchField: string = 'title';

  onDeleteFilm(film: Film): void {
    this.films = this.films.filter(f => f.title !== film.title);
  }

  onAddFilm(theFuckingFilm: Film): void {
    this.films.push(theFuckingFilm);
  }

  onChangePosterInput(poster: string): void {
    this.posterPreview = poster;
  }

}
