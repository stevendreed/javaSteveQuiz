/*
  questions.js
*/
const timeCounter = document.getElementsByClassName('timer');
var timeRemaining = 10; // 100 centiseconds => 10 seconds

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
            console.log(`time: ${timeRemaining / 10}`);
            timeRemaining--;
            if (timeRemaining < 0)
            {
                clearInterval(tInter);
                console.log('zing, timer is up!');
            }
        }, 100
    )
}

// eventListener to begin quiz game 
// 
// document.addEventListener('click', () =>
// {

// })

setTime();