
window.onload = showQuestions(0); 
window.onload = queCounter(1);
let que_count = 0;
let que_numb = 1;
let timeValue = 20;
let widthValue = 0;


const quiz_box = document.querySelector(".quiz_box");
const next_btn = document.querySelector(".next_btn");
const result_box = document.querySelector(".result_box");
const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");
const option_chart = document.querySelector(".option_list");
const timeCount = document.querySelector(".timer .timer_sec");
const timeLine = document.querySelector("header .time_line")
const timeOff = document.querySelector(".timer .time_text")
timeOff.textContent = "Time Left";
let counter;
function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time;
        time--;
        if(time < 9){
            let addZero = timeCount.textContent;
            timeCount.textContent = "0" + addZero;
        }
        if(time < 0){
            clearInterval(counter);
            timeCount.textContent = "00";
            timeOff.textContent = "Time Off";
            let correctAns = questions[que_count].answer;
            let allOptions = option_chart.children.length;

            for(let i = 0; i < allOptions; i++){
                if(option_chart.children[i].textContent == correctAns){
                    option_chart.children[i].setAttribute("class","option correct");
                    option_chart.children[i].insertAdjacentHTML("beforeend", tickIcon);
                }
                }
            
            for (let i = 0; i < allOptions; i++) {
                option_chart.children[i].classList.add("stopped");
            
            }
            next_btn.style.display = "block";
        }
    }
}
function startTimerLine(time){
    counterLine = setInterval(timer, 38);
    function timer(){
       time += 1;
       timeLine.style.width = time + "px";
        if(time > 549){
            clearInterval(counterLine);
        }
    }
}
window.onload = startTimer(timeValue);
window.onload = startTimerLine(widthValue);

next_btn.onclick = ()=>{
    if(que_count < questions.length - 1){
    que_count++;
    que_numb++;
    showQuestions(que_count);
    queCounter(que_numb);
    clearInterval(counter);
    startTimer(timeValue);
    clearInterval(counterLine);
    startTimerLine(widthValue);
    next_btn.style.display = "none";
    timeOff.textContent = "Time Left";
}
    else{
        clearInterval(counter);
    clearInterval(counterLine);
        console.log("Questions Completed");
        showResultBox();
    }
}

function showQuestions(index){
    const que_text = document.querySelector(".que_text");
    const option_list = document.querySelector(".option_list");
    let que_tag = '<h5>'+ questions[index].numb+ "." +questions[index].question +'</h5>';
    let option_tag = '<div class="option">'+questions[index].options[0]+'<span></span></div>'
                    + '<div class="option">'+questions[index].options[1]+'<span></span></div>'
                    + '<div class="option">'+questions[index].options[2]+'<span></span></div>'
                    + '<div class="option">'+questions[index].options[3]+'<span></span></div>';
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;
    const option = option_list.querySelectorAll(".option");
    for (let i = 0; i < option.length; i++) {
       option[i].setAttribute("onclick","optionSelected(this)");
        
    }
}

let tickIcon = '<div class="icon tick"><i class="far fa-check-circle"></i></div>';
let crossIcon = '<div class="icon cross"><i class="far fa-times-circle"></i></div>';
let userScore = 0;
function optionSelected(answer){
    clearInterval(counterLine);
    let userAns = answer.textContent;
    let correctAns = questions[que_count].answer;
    let allOptions = option_chart.children.length;
    clearInterval(counter);
    if(userAns == correctAns){
        userScore++;
        answer.classList.add("correct");
        answer.insertAdjacentHTML("beforeend", tickIcon);
        console.log("Answer is Correct");
    }
    else{
        answer.classList.add("incorrect");
        answer.insertAdjacentHTML("beforeend", crossIcon);
        console.log("Answer is wrong");
        for(let i = 0; i < allOptions; i++){
            if(option_chart.children[i].textContent == correctAns){
                option_chart.children[i].setAttribute("class","option correct");
                option_chart.children[i].insertAdjacentHTML("beforeend", tickIcon);}
        }
    }
    for (let i = 0; i < allOptions; i++) {
        option_chart.children[i].classList.add("stopped");
        
    }
    next_btn.style.display = "block";
}

function showResultBox(){
    quiz_box.style.display = "none";
    result_box.classList.remove("ended");
    const scoreText = result_box.querySelector(".score_text");
    if( userScore > 3){
        let scoreTag = '<span>and congrats! You got <p>' + userScore + '</p> out of <p>' + questions.length + '</p></span>';
        scoreText.innerHTML = scoreTag; 
    }
    else if( userScore > 1){
        let scoreTag = '<span>and sorry. You got only <p>' + userScore + '</p> out of <p>' + questions.length + '</p></span>';
        scoreText.innerHTML = scoreTag; 
    }
    else{
        let scoreTag = '<span>You got <p>' + userScore + '</p> out of <p>' + questions.length + '</p></span>';
        scoreText.innerHTML = scoreTag; 
    }
}







function queCounter(index){
    const bottom_ques_counter = document.querySelector(".total_que");
    let totalQuesCountTag = '<span><p>'+ index +'</p>of<p>'+ questions.length +'</p>Questions</span>';
    bottom_ques_counter.innerHTML = totalQuesCountTag;
}
