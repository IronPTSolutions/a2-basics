import { Film } from './../models/film.model';

const filmsMock: Array<Film> = [
  {
    title: 'La monja',
    summary: 'A priest with a haunted past and a novice on the threshold of her final vows are sent by the Vatican to investigate the death of a young nun in Romania and confront a malevolent force in the form of a demonic nun.',
    poster: 'https://m.media-amazon.com/images/M/MV5BMjM3NzQ5NDcxOF5BMl5BanBnXkFtZTgwNzM4MTQ5NTM@._V1_SY1000_CR0,0,679,1000_AL_.jpg',
    releaseDate: new Date('2018-09-07')
  },
  {
    title: 'Matar o morir (Peppermint)',
    summary: 'Peppermint is a revenge story centering on a young mother who finds herself with nothing to lose, and is now going to take from her enemies the very life they stole from her.',
    poster: 'https://m.media-amazon.com/images/M/MV5BNWVlMjQ3MjItOWE3YS00YTYwLWE0ZDMtZWMyZWY1NzkxNWIwXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_CR0,0,679,1000_AL_.jpg',
    releaseDate: new Date('2018-09-07')
  },
  {
    title: 'Winter Ridge',
    summary: 'A young detective is torn apart after his wife ends up in a coma while hunting a serial-killer at the same time.',
    poster: 'https://m.media-amazon.com/images/M/MV5BZDVjNzhkYTItNDM4My00NWQ2LWJlNjItMGQ3OWM5OGNmYzE3XkEyXkFqcGdeQXVyMjgxOTM1MDU@._V1_SY1000_CR0,0,679,1000_AL_.jpg',
    releaseDate: new Date('2018-09-05')
  },
  {
    title: 'Megalodón',
    summary: 'After escaping an attack by what he claims was a 70-foot shark, Jonas Taylor must confront his fears to save those trapped in a sunken submersible.',
    poster: 'https://m.media-amazon.com/images/M/MV5BMjg0MzA4MDE0N15BMl5BanBnXkFtZTgwMzk3MzAwNjM@._V1_SY1000_CR0,0,679,1000_AL_.jpg',
    releaseDate: new Date('2018-09-05')
  },
  {
    title: 'Alpha',
    summary: 'In the prehistoric past, a young man struggles to return home after being separated from his tribe during a buffalo hunt. He finds a similarly lost wolf companion, and starts a friendship that would change humanity.',
    poster: 'https://m.media-amazon.com/images/M/MV5BODI4OTk1ODY3N15BMl5BanBnXkFtZTgwMDI1MTcwNjM@._V1_SY1000_CR0,0,679,1000_AL_.jpg',
    releaseDate: new Date('2018-08-10')
  },
  {
    title: 'Misión Imposible: Fallout',
    summary: 'A young detective is torn apart after his wife ends up in a coma while hunting a serial-killer at the same time.',
    poster: 'https://m.media-amazon.com/images/M/MV5BMTk3NDY5MTU0NV5BMl5BanBnXkFtZTgwNDI3MDE1NTM@._V1_SY1000_CR0,0,679,1000_AL_.jpg',
    releaseDate: new Date('2018-08-27')
  },
  {
    title: 'Christopher Robin',
    summary: 'A working-class family man, Christopher Robin, encounters his childhood friend Winnie-the-Pooh, who helps him to rediscover the joys of life.',
    poster: 'https://m.media-amazon.com/images/M/MV5BMjAzOTM2OTAyNF5BMl5BanBnXkFtZTgwNTg5ODg1NTM@._V1_SY1000_CR0,0,679,1000_AL_.jpg',
    releaseDate: new Date('2018-09-28')
  }
];

export default filmsMock;
