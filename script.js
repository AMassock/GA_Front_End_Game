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
    createQuestion();
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
}, {
    question: "what time is it",
    answers:{
        a: "1",
        b: "2",
        c: "3",
        d: "4"
    }
}, {
    question: "when",
    answers: {
        a: "nope"
    }
}]

function returnUsr() {
    usr = document.querySelector('input').value;
    localStorage.setItem('input',usr)
    // console.log(usr);
}

let cont = document.getElementById('continue');
let iter = 0

cont.addEventListener('click', function(e) {
    e.preventDefault();
    createQuestion(iter++)
});


function createQuestion() {
    for(let i = iter; i < myQuestions.length; i++) {
       let question = document.getElementById('question').innerHTML = (myQuestions[i].question);
       createAnswers(question);
       return question
    }
}

function createAnswers(question) {
    let btns = document.getElementsByClassName('answers');
    let childBtns = btns[0].children;
    let ans = myQuestions[iter].answers

    let opts = new Array();
    
    for(const [key, value] of Object.entries(ans)) {
        opts.push(value);
    }

    for(let i = 0; i < opts.length; i++) {
        childBtns[i].innerHTML = (opts[i]);
    }
};

// Thought process on questions
// Create function to replace question and answer text
// Create function that moves to the next question in the list
// and replaces text (call back to replace function)
