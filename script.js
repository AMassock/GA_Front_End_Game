let subUsr = document.getElementById('usr');
let form = document.querySelector('form');
let ans = document.querySelector('.answers');
let subBtn = document.querySelector('.submit');
let questSection = document.querySelector('.questions');
let hello = document.querySelector('.hello');
let startBtn = document.getElementById('start');
let usr = localStorage.getItem('input');
let reset = document.getElementById('reset');

subUsr.addEventListener('click', function(e) {
    e.preventDefault();
    form.style.display = 'none';
    document.getElementById('greet').innerHTML = `Hello ${usr}! Are you ready to begin your Pokémon journey?`;
    hello.style.display = 'inline';
    returnUsr(usr);
});

startBtn.addEventListener('click', function(e){
    e.preventDefault();
    hello.style.display = 'none';
    questSection.style.display = 'block';
    ans.style.display = 'grid';
    subBtn.style.display = 'inline';
});

reset.addEventListener('click', function(e) {
    e.preventDefault();
    form.style.setProperty('display', 'initial');
    hello.style.display = 'none';
})

let userAnswer = '';
let numCorrect = 0;

let myQuestions = [{
    question: "Is Pikachu Ash's first pokemon?",
    answers: {
        a: "Yes", 
        b: "No", 
        c: "It's Clafairy", 
        d: "Who's Ash?"
    },
    correct: 'a'
}]

function returnUsr() {
    usr = document.querySelector('input').value;
    localStorage.setItem('input',usr)
    console.log(usr);
}