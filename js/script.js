"use strict";

const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let a = prompt("Один из последних фильмов?", ""),
    b = prompt("На сколько оцените фильм?", ""),
    c = prompt("Один из последних фильмов?", ""),
    d = prompt("На сколько оцените фильм?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);