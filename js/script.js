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

let a, b, c, d;

let moviesKeys = Object.keys(personalMovieDB.movies);

while (-1 < 0) {
    a = prompt("Один из последних фильмов?", "");
    if (a != null) {
        if (a.length > 0 && a.length <= 50) {
            b = prompt("На сколько оцените фильм?", "");
            personalMovieDB.movies[a] = b;
            break;
        }
    }
}

while (-1 < 0) {
    c = prompt("Один из последних фильмов?", "");
    if (c != null) {
        if (c.length > 0 && c.length <= 50) {
            d = prompt("На сколько оцените фильм?", "");
            personalMovieDB.movies[c] = d;
            break;
        }
    }
}

console.log(personalMovieDB);
console.log(moviesKeys);



// const num = 50;

// switch (num) {
//     case 49:
//         console.log('Error');
//         break;
//     case 100:
//         console.log('Error');
//         break;
//     case 50:
//         console.log('Good!');
//         break;
//     default:
//         console.log('No no!');
//         break;
// }