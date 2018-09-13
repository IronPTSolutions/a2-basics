import { Component, Input } from '@angular/core';
import { Film } from '../../../shared/models/film.model';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html'
})
export class FilmComponent {
  @Input() film: Film 

}
