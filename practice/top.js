/*
let message = 'Yo what\'s up man, ',
    message1 = 'Anyways did you see my girl in school this morning? ',
    worried = 'I\'m worred af right now, ';
concatenate = message + message1 + worried + 'gosh.',

    console.log(concatenate)



let examScore = 45;
let examHighestScore = 70;
examReport = `You scored ${examScore}/${examHighestScore} (${Math.round((examScore / examHighestScore * 100))}%). ${examScore > 65 ? 'Congratulations, you passed the test!' : 'You failed the test!'}`;

console.log(examReport);



let score = 54;
let highestScore = 70;  
let song = 'Fight Song'
let output = 'I like the song "' + song + '".\nI gave it a score of ' + (score/highestScore * 100) + '%.';

console.log(output)
*/



/*
let login = prompt("Who's there? " + " Answer : ((Admin))"); // Admin Question
let usr = "Admin"; // Admin
let pwd = "TheMaster"; // Password
if (login == false || login == null) {
// Empty feild || null is cancel button or Esc
alert("Canceled"); // Message
} else if (login != usr) {
// if Admin is have wrong value
alert("I don't know you"); // Message
} else {
// if login == usr
login = prompt("Password?" + "Answer : ((TheMaster))"); // show password question
if (login == null || login == false) {
// Empty feild || null is cancel button or Esc
alert("Canceled"); // Message
} else {
login == pwd ? alert("Welcome!") : alert("Wrong password"); // if Pasword is true : if Password is wrong
}
}
*/



function troubleshooting() {
    const a = '1';
    const b = '1';

    // Edit between these lines
    // =================================
    return +a + +b;

    // =================================
}

console.log(troubleshooting())
