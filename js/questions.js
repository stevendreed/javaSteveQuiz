/*
  questions.js
*/
const timeCounter = document.getElementById('timer');

// change timeRemaining to indicate how long to run the game
// var timeRemaining = 3; // seconds

// create ascii duck
const duckieArt = function(faceValue)
{
    return `    _
 __(${faceValue})<
/____)`
} 

// stretch goal: fix OPFS interactions with web workers to enable
// storing questions as JSON files, rather than a js object

// const getFi = async function(path)
// {
//     const worker = new Worker('./questions.js');
//     const root = await navigator.storage.getDirectory();
//     console.log(`root: ${root}]`);

//     // const handle = await root.getFileHandle(path, { create: false });
//     // const access = await handle.createSyncAccessHandle();
//     const fsize = await root.getFileHandle(path, { create: false });
//                             // .createSyncAccessHandle()
//                             // .getSize();
// }
// // time countdown

// // const loadJson = function(path) 
// {
//     const fs = new FileReader();
//     const jsonOut = fs.readAsText(path);
//     return JSON.parse(jsonOut);
// }

// set time countdown
const setTime = function(timeRemaining)
{
    let tInter = setInterval(
        () =>
        {
            let currentIndex = 0;
            // console.log('callback function invoked'); // debugging
            // callback;
            // log timer for debugging
            console.log(`time: ${timeRemaining / 10}`);

            // note: can floor the time if we do not want to show decimals

            // update html to current time
            timeCounter.innerHTML = `${timeRemaining / 10} seconds remaining`;
            quizGame(testQuestions.bank, currentIndex);
            timeRemaining--;
            // if (timeRemaining < 0)
            // {
            
            console.log('popping out of invokation');
            if (timeRemaining <= 0 || currentIndex >= testQuestions.bank.length)
            {
                clearInterval(tInter);
            }
            
            // }
        }, 100
    )
}

// get random integer value from 0 to n
const getRand = function(n = 3)
{
    return Math.floor(Math.random() * n);
}

const setAnsw = function(answerObj)
{
    // console.log(`subject: ${answerObj.subject}`);

    // const questions = answerObj.bank;
    const answerSlot = document.getElementsByClassName('answer-slot');
    const questionSlot = document.getElementById('question-text');

    // debugging
    console.log(`answer slots found: ${[...answerSlot]}`);

    // let lotoQ = questions[getRand(questions.length)];

    // debugging output to show question & answer selected
    // console.log(
    //     `lottory question output: ${lotoQ.question}
    // correct answer: ${lotoQ.options[lotoQ.correctIndex]}`);
    questionSlot.textContent = answerObj.question;
    // answerSlot[0].childNodes[0].textContent = lotoQ.options[0];
    for (let i = 0; i < answerObj.options.length; i++)
    {
        // @TODO: option text for the first one displays before the [1]
        const currSlot = answerSlot[i].childNodes[i];
        currSlot.textContent = answerObj.options[i];
    }
}

// add onclick functionality

const optionOnClick = function(correctString)
{
    return this.textContent === correctString;
} // end optionOnClick

// eventListener to begin quiz game 
// 
// document.addEventListener('click', () =>
// {

// })

// runtime invocation
// const testBank = loadJson('../question_bank.test.json');
// const selectOptionKeyboard = function()
// {
//     let keyPress = window.addEventListener('keydown', (event =>
//     {
//         // debugging
//         console.log(`key pressed: ${event.key}`);
//         return event.key;
//     }));
//     if (typeof keyPress === 'number')
//     {
//         document.getElementById(`key-${keyPress}`)
//                 .style.outline = 'var(--selection-lm)';
//     }
//     return keyPress;
// }
// @TODO: add keyboard functionality
// const setQuizKb = function()
// {
    
//     window
//     .addEventListener("keydown", (event) =>
//     {
//         if (event.key == '1')
//         {
//             window.getElementById('key-1')
//             .firstChild.focus();
//             // debugging message
//             console.log('button 1 is focused');
//         }
//     });
// }

const quizGame = function(qBanksObj, index)
{   
    // time = setTime(time);
    let i = qBanksObj[index].options.correctIndex;
    
    let currAnsw = qBanksObj[index].options[i];

    setAnsw(qBanksObj[index]);

    document.getElementById('02-option')
    .onclick = function(currAnsw)
    {
        if (optionOnClick(currAnsw))
        {
            uPoints.score++;
            console.log(`points = ${uPoints.score}`)
        }
        index++;
    };
    console.log('finished iteration of quizGame loop');
    return index;
    // setQuizKb();
    // window.addEventListener('keydown', (event =>
    //     {
    //         // debugging
    //         console.log(`key pressed: ${event.key}`);
    //         // if (typeof event.key === 'number')
    //         // {
    //         // document.getElementById(`key-${keyPress}`)
    //         //         .style.outline = 'var(--selection-lm) solid 2px';
    //         // }
    //     }));

    // setTime(time, setAnsw(testQuestions));
    // let userKeyIn = selectOptionKeyboard();
    
    // document.getElementById('start-btn')
    //     .style.outline = 'var(--select-lm) solid 2px';
    
}

// getFi();
window.addEventListener("load", () =>
{
    let globalTime = 30;
    let uPoints = {
        "score":0,
        "username":""
    };
    
    console.log(duckieArt('^') + '  quack quack quack quack quack');
    // quizGame(testQuestions.bank);
    setTime(globalTime);
    // window.getElementById('start-btn').addEventListener('click', () =>
    // {
    //     quizGame();
    // })
});

console.log('exiting successfully');