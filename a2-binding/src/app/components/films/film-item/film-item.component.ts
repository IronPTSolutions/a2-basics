import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Film } from './../../../shared/models/film.model';

@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
})
export class FilmItemComponent {
  @Input() private film: Film; 
  @Output() private onDelete: EventEmitter<Film> = new EventEmitter<Film>(); 

  onDeleteFilm():void {

    this.onDelete.emit(this.film);
    
  }; 
}