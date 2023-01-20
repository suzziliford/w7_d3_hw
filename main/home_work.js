console.log("Massive butts")

// Exercise 1 - Closures
// Update the createAdder function below so that
// the below code works as intended

function createAdder(x){
    function add (y){
        return x + y
    }
    return add
};

const addEight = createAdder(8);
console.log(addEight(10)); // 18
console.log(addEight(17)); // 25
console.log(addEight(50)); // 58
console.log(addEight(100)); // 108
console.log(addEight(92)); // 100

const addThree = createAdder(3);
console.log(addThree(10)); // 13
console.log(addThree(17)); // 20
console.log(addThree(50)); // 53
console.log(addThree(100)); // 103
console.log(addThree(92)); // 95


// Exercise 2 - Promises 
// Using the below getMovieInfo function, which is a Promised-base function, write an asynchronous function (.then().catch() or async/await)
// called printMovieInfo that will take in a movie title and then either displays the movie information or logs an error with a console.warn().


function getMovieInfo(movieName){
    return new Promise((resolve, reject) => {
        if (movieName.length > 5){
            let movie = {
                id: 123,
                title: movieName,
                director: 'Christopher Spielberg',
                runtime: 157,
                description: 'Good vs Evil'
            }
            resolve(movie)
        } else {
            reject(`${movieName} cannot be accessed because it is too short.`)
        }
    })
}

function printMovieInfo(movieName){
    getMovieInfo('Indiana Jones and the Dark Knight')
        .then(console.log(`${movieName.title} is a film about ${movieName.description}, 
        directed by ${movieName.director}, which has a runtime of ${movieName.runtime} minutes`))
        .catch(err => console.warn(err))
};

getMovieInfo('Indiana Jones and the Dark Knight').then(printMovieInfo);

