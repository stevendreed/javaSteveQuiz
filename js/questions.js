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

console.log(duckieArt('^') + '  quack quack quack quack quack');

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
const setTime = function(timeRemaining, callback)
{
    let tInter = setInterval(
        () =>
        {
            console.log('callback function invoked'); // debugging
            callback;
            // log timer for debugging
            console.log(`time: ${timeRemaining / 10}`);

            // note: can floor the time if we do not want to show decimals

            // update html to current time
            timeCounter.innerHTML = `${timeRemaining / 10} seconds remaining`;
            timeRemaining--;
            if (timeRemaining < 0)
            {
                clearInterval(tInter);
                console.log('zing, timer is up!');
            }
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
    console.log(`subject: ${answerObj.subject}`);

    const questions = answerObj.bank;
    const answerSlot = document.getElementsByClassName('answer-slot');
    const questionSlot = document.getElementById('question-text');

    // debugging
    console.log(`answer slots found: ${[...answerSlot]}`);

    let lotoQ = questions[getRand(questions.length)];

    // debugging output to show question & answer selected
    console.log(
        `lottory question output: ${lotoQ.question}
    correct answer: ${lotoQ.options[lotoQ.correctIndex]}`);
    questionSlot.textContent = lotoQ.question;
    // answerSlot[0].childNodes[0].textContent = lotoQ.options[0];
    for (let i = 0; i < lotoQ.options.length; i++)
    {
        // @TODO: option text for the first one displays before the [1]
        const currSlot = answerSlot[i].childNodes[i];
        currSlot.textContent = lotoQ.options[i];
    }
}

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

const quizGame = function(qBanksObj)
{
    let progressCounter = 0;
    
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

    setTime(30, setAnsw(testQuestions));
    // let userKeyIn = selectOptionKeyboard();
    
    // document.getElementById('start-btn')
    //     .style.outline = 'var(--select-lm) solid 2px';
    
}

// getFi();
window.addEventListener("load", () =>
{
    quizGame([0,1,2,3,4]);
    // window.getElementById('start-btn').addEventListener('click', () =>
    // {
    //     quizGame();
    // })
});
