import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Film } from '../../../shared/models/film.model';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html'
})
export class FilmComponent {
  @Input() film: Film;
  @Output() deleteFilm: EventEmitter<Film> = new EventEmitter<Film>();

  onClickDeleteFilm(): void {
    this.deleteFilm.emit(this.film)
  }

}
