import { Component, Output, EventEmitter } from '@angular/core';
import { Film } from '../../../shared/models/film.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent {

   @Output() addFilm: EventEmitter<Film> = new EventEmitter<Film>();
  
   filmToCreate: Film = new Film();

   ocClickCreateFilm(): void {
    this.addFilm.emit(this.filmToCreate);
    this.filmToCreate = new Film();
   }


}
