let quizDB = [
    {
        question:"The programming language Swift was created to replace what other programming language?",
        a:"Objective-C",
        b:"C#",
        c:"Ruby",
        d:"C++",
        correct_answer:"ans1",
        questionCount:"1",
    },
    {
        question:"What amount of bits commonly equals one byte?",
        a:"2",
        b:"1",
        c:"8",
        d:"64",
        correct_answer:"ans3",
        questionCount:"2",
    },
    {
        question:"Which computer hardware device provides an interface for all other connected devices to communicate?",
        a:"Central Processing Unit",
        b:"Motherboard",
        c:"Hard Disk Drive",
        d:"Random Access Memory",
        correct_answer:"ans2",
        questionCount:"3",
    },
    {
        question:"The series of the Intel HD graphics generation succeeding that of the 5000 and 6000 series (Broadwell) is called:",
        a:"HD Graphics 7000",
        b:"HD Graphics 700 ",
        c:"HD Graphics 600",
        d:"HD Graphics 500",
        correct_answer:"an4",
        questionCount:"4",
    },
    {
        question:"In web design, what does CSS stand for?",
        a:"Corrective Style Sheet",
        b:"Counter Strike: Source",
        c:"Cascading Style Sheet",
        d:"Computer Style Sheet",
        correct_answer:"ans3",
        questionCount:"5",
    },
    {
        question:"On Twitter, what was the original character limit for a Tweet?",
        a:"140",
        b:"120",
        c:"160",
        d:"100",
        correct_answer:"140",
        questionCount:"6",
    },
    {
        question:"This mobile OS held the largest market share in 2012.",
        a:"iOS",
        b:"Android",
        c:"BlackBerry",
        d:"Symbian",
        correct_answer:"iOS",
        questionCount:"7",
    },
    {
        question:"The C programming language was created by this American computer scientist. ",
        a:"Dennis Ritchie",
        b:"Tim Berners Lee",
        c:"al-Khw\u0101rizm\u012b",
        d:"Willis Ware",
        correct_answer:"Dennis Ritchie",
        questionCount:"8",
    },
    {
        question:"Which programming language shares its name with an island in Indonesia?",
        a:"Java",
        b:"Python",
        c:"C",
        d:"Jakarta",
        correct_answer:"Java",
        questionCount:"9",
    },
    {
        question:"What does the computer software acronym JVM stand for?",
        a:"Java Virtual Machine",
        b:"Java Vendor Machine",
        c:"Java Visual Machine",
        d:"Just Virtual Machine",
        correct_answer:"Java Virtual Machine",
        questionCount:"10",
    }
];
let question = document.querySelector('.questionSpace');
let option1 = document.querySelector('#option1');
let option2 = document.querySelector('#option2');
let option3 = document.querySelector('#option3');
let option4 = document.querySelector('#option4');
let submit = document.querySelector('#submit');
let answer = document.querySelectorAll('.answers');
let questionCount = document.querySelector('#questionCount');
let questionNumber = 0;
let score = 0;
let loadQuestion = () => {
    let questionSet = quizDB[questionNumber];
    question.innerText = questionSet.question;
    option1.innerText = questionSet.a;   
    option2.innerText = questionSet.b;
    option3.innerText = questionSet.c;
    option4.innerText = questionSet.d; 
    questionCount.innerText = questionSet.questionCount;   
}
loadQuestion(); 
let getCheckAnswer = () =>{
    let Answer;

    answer.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            Answer = curAnsElem.id;
        }
    });
    return Answer;
}
submit.addEventListener('click',() =>{
    let checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer ===quizDB[questionNumber].correct_answer){
        score++;
    }
    questionNumber++;
    if(questionNumber < quizDB.length){
        loadQuestion(); 
    }
});