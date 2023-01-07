let startBtn = document.getElementById('start');
let form = document.querySelector('form');
let ans = document.querySelector('.answers');
let subBtn = document.querySelector('.submit');
let questSection = document.querySelector('.questions')

startBtn.addEventListener('click', function(e) {
    e.preventDefault();
    form.style.display = 'none';
    questSection.style.display = 'block';
    ans.style.display = 'grid';
    subBtn.style.display = 'inline';
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

