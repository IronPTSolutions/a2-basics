import { Component, Output, EventEmitter } from '@angular/core';
import { Film } from './../../../shared/models/film.model';

@Component({
  selector: 'app-film-form',
  templateUrl: './film-form.component.html',
})
export class FilmFormComponent {
  filmToCreate: Film = new Film();

  @Output() private createFilm: EventEmitter<Film> = new EventEmitter<Film>();

  onClickCreateFilm() {

    this.createFilm.emit(this.filmToCreate);
  }

}
