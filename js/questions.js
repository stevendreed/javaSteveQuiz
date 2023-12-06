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

const setAnsw = function(answerObj)
{
    const answerSpace = document.getElementsByClassName('answer-slot');
    for (let i = 0; i < answerSpace.children.length; i++)
    {
        answerSpace.children[i].innerHTML = answerArray[i].option[i];
    }
}

// eventListener to begin quiz game 
// 
// document.addEventListener('click', () =>
// {

// })

// runtime invocation
setTime();