const subUsr = document.getElementById('usr');
const form = document.querySelector('form');
const ans = document.querySelector('.answers');
const subBtn = document.querySelector('.submit');
const questSection = document.querySelector('.questions');
const hello = document.querySelector('.hello');
const startBtn = document.getElementById('start');
let usr = localStorage.getItem('input');
const reset = document.getElementById('reset');

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
const rstAns = document.getElementById('rstAns');

let iter = 0

cont.addEventListener('click', function(e) {
    e.preventDefault();
    btnOne.classList.remove('selected');
    btnTwo.classList.remove('selected');
    btnThree.classList.remove('selected');
    btnFour.classList.remove('selected');
    createQuestion(iter++)
});

rstAns.addEventListener('click', function() {
    btnOne.classList.remove('selected');
    btnTwo.classList.remove('selected');
    btnThree.classList.remove('selected');
    btnFour.classList.remove('selected');
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

const btnOne = document.getElementById('one');
const btnTwo = document.getElementById('two');
const btnThree = document.getElementById('three');
const btnFour = document.getElementById('four');

let selected = '';

btnOne.addEventListener('click', function() {
    btnOne.classList.add('selected');
    let correctAns = myQuestions[iter].answers.a;
    return correctAns
    console.log(selected);
});

btnTwo.addEventListener('click', function() {
    btnTwo.classList.add('selected');
    let correctAns = myQuestions[iter].answers.b;
    return correctAns
    console.log(selected);
});

btnThree.addEventListener('click', function() {
    btnThree.classList.add('selected');
    let correctAns = myQuestions[iter].answers.c;
    return correctAns
    console.log(selected);
});

btnFour.addEventListener('click', function() {
    btnFour.classList.add('selected');
    let correctAns = myQuestions[iter].answers.d;
    return correctAns
    console.log(selected);
});

// todo: add condition to determine if answer is correct
if(correctAns === myQuestions[iter].correct) {
    numCorrect++
    console.log(numCorrect);
}

// todo: if correct update score
