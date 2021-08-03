"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

if (personalMovieDB.count < 10) {
    alert("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    alert("Вы классический зритель");
} else {
    alert("Вы киноман");
}

let i = 0;

while (i < 2) {
    let a = prompt("Один из последних фильмов?", ""),
        b = prompt("На сколько оцените фильм?", "");
    if (a.length > 0 && a.length <= 50 && b.length > 0 && b.length && a != null && b != null) {
        personalMovieDB.movies[a] = b;
        i = Object.entries(personalMovieDB.movies).length;
    }

}

console.log(personalMovieDB);
console.log(Object.entries(personalMovieDB.movies).length);