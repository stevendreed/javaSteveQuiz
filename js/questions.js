/*
  questions.js
*/
const timeCounter = document.getElementById('timer');

// change timeRemaining to indicate how long to run the game
var timeRemaining = 3; // seconds

// create ascii duck
const duckieArt = function(faceValue)
{
    return `    _
 __(${faceValue})<
/____)`
} 

console.log(duckieArt('^') + '  quack quack quack quack quack');

// time countdown

const loadJson = function(path) 
{
    const fs = new FileReader();
    const jsonOut = fs.readAsText(path);
    return JSON.parse(jsonOut);
}

const setTime = function()
{
    let tInter = setInterval(
        () =>
        {
            // log timer for debugging
            console.log(`time: ${timeRemaining}`);

            // update html to current time
            timeCounter.innerHTML = `${timeRemaining} seconds remaining`;
            timeRemaining--;
            if (timeRemaining < 0)
            {
                clearInterval(tInter);
                console.log('zing, timer is up!');
            }
        }, 1000
    )
}

// get random integer value from 0 to n
const getRand = function(n = 2)
{
    return Math.floor(Math.random() * n);
}

const setAnsw = function(answerObj)
{
    console.log(`subject: ${answerObj.subject}`);
    const questions = answerObj.bank;
    const answerSpace = document.getElementsByClassName('answer-slot');
    let lotoQ = questions[getRand(questions.length)];
    for (let i = 0; i < questions.length; i++)
    {
        answerSpace.children[i].innerHTML = lotoQ.options[i];
    }
}

// eventListener to begin quiz game 
// 
// document.addEventListener('click', () =>
// {

// })

// runtime invocation
const testBank = loadJson('../question_bank.test.json');

setTime();
setAnsw(testBank);