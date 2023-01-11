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

let numCorrect = 0;

let myQuestions = [{
    question: "Is Pikachu Ash's first pokemon?",
    answers: {
        a: "Yes", 
        b: "No", 
        c: "It's Clafairy", 
        d: "Who's Ash?"
    },
    correct: "Yes"
}, {
    question: "Pokemon is an abbreviation of Poketto Monsutā. What does this mean in Japanese?",
    answers:{
        a: "Pocket gremlins",
        b: "Pocket monsters.",
        c: "Pocket sand",
        d: "Small animal"
    },
    correct: "Pocket monsters."
}, {
    question: "How many cards have been sold by the Pokémon Trading Card Game?",
    answers: {
        a: "14.2 Billion",
        b: "400 Million",
        c: "12 Thousand",
        d: "43.2 Billion"
    },
    correct: "43.2 Billion"
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
    submitAns(userAnswer);
    createQuestion(iter++);
});

rstAns.addEventListener('click', function() {
    btnOne.classList.remove('selected');
    btnTwo.classList.remove('selected');
    btnThree.classList.remove('selected');
    btnFour.classList.remove('selected');
});


function createQuestion() {
    for(let i = iter; i < myQuestions.length; i++) {
        if(i == myQuestions.length) {
            form.style.setProperty('display', 'initial');
            hello.style.display = 'none';
            questSection.style.display = 'none';
            ans.style.display = 'none';
            subBtn.style.display = 'none';
        }
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

function choosenAns(b) {
    if(btnOne.classList.contains('selected')) {
        userAnswer = myQuestions[iter].answers.a;
        console.log('btn one clicked');
    }
    if(btnTwo.classList.contains('selected')) {
        userAnswer = myQuestions[iter].answers.b;
        console.log('btn two clicked');
    }
    if(btnThree.classList.contains('selected')) {
        userAnswer = myQuestions[iter].answers.c;
        console.log('btn three clicked');
    }
    if(btnFour.classList.contains('selected')) {
        userAnswer = myQuestions[iter].answers.d;
        console.log('btn four clicked');
    }
}

let userAnswer = '';

const btnOne = document.getElementById('one');
const btnTwo = document.getElementById('two');
const btnThree = document.getElementById('three');
const btnFour = document.getElementById('four');

btnOne.addEventListener('click', function(e) {
    e.preventDefault();
    btnOne.classList.add('selected');
    choosenAns(btnOne);
});

btnTwo.addEventListener('click', function(userAnswer) {
    btnTwo.classList.add('selected');
    choosenAns(btnTwo);
    // userAnswer = myQuestions[iter].answers.b;
    // return userAnswer
    // console.log(selectedAns);
});

btnThree.addEventListener('click', function(userAnswer) {
    btnThree.classList.add('selected');
    choosenAns(btnThree);
    // userAnswer = myQuestions[iter].answers.c;
    // return userAnswer
    // console.log(selectedAns);
});

btnFour.addEventListener('click', function(userAnswer) {
    btnFour.classList.add('selected');
    choosenAns(btnFour);
    // userAnswer = myQuestions[iter].answers.d;
    // return userAnswer
    // console.log(selectedAns);
});


// todo: add condition to determine if answer is correct
function submitAns(userAnswer) {
    if(userAnswer === myQuestions[iter].correct) {
        numCorrect++
        console.log(numCorrect);
    }
}


// todo: if correct update score
