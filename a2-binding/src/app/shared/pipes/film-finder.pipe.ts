import { Film } from './../models/film.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filmFinder'
})
export class FilmFinderPipe implements PipeTransform {

  transform(films: Array<Film>, pattern: string, field: string = 'title'): Array<Film> {
    if (!films) {
      return [];
    } else if (!pattern) {
      return films;
    }

    const regex = new RegExp(pattern, 'i');
    return films.filter(f => f[field].match(regex));
  }

}
