$(document).ready(function() {
//FUNCTION GLOSSARY
//================================================================
//GLOBAL VARIABLES
//================================================================
//COUNTERS
//----------------------------------------------------------------
var guessCorrect = 0;
var guessWrong = 0;
var timeCounter = 20;
var questionCounter = 0;
//OBJECTS
//-----------------------------------------------------------------
var trivia = 
[
    {
        question: 'Fill in the blank. "All work and no play makes Jack a ____ boy".',
        answerList: ["dull", "angry", "lazy", "lonely"],
        answer: 0,
    },
    {
        question: 'In "The Terminator", what did humans in the future use to detect Terminators.',
        answerList: ["Radar", "Ultra-Violet Lights", "Dogs", "Magnets"],
        answer: 2,
    },
    {
        question: 'In "The Lost Boys, fill in the blank. "You' + 're eating _______ Michael.',
        answerList: ["worms", "maggots", "beetles", "flys"],
        answer: 1,
    },
    {
        question: 'In "The Thing", the monster' + 's weakness is _______.',
        answerList: ['dynamite', 'bullets', 'light', 'fire'],
        answer: 4,
    },
]

var question = ""
 


//FUNCTIONS
//================================================================
function main()
{
    //Create start button
    var startButton = $("<button>");
    startButton.addClass("startButton");
    startButton.text("START");
    $("#question").append(startButton);
    $(startButton).on("click", function(){
        $(".startButton").remove();
        questionGenerator();
    })
}

function questionGenerator()
{
    // Pick a random question
    var randomNumber = Math.floor(Math.random()*trivia.length);
    var randomQuestion = trivia[randomNumber];
    // Create a question div and append the question
    var questionDiv = $("<div>");
    questionDiv.addClass("questionDiv");
    questionDiv.append(randomQuestion.question);
    $("#question").append(questionDiv);
    // Create an answer choice button
    var answerChoiceDiv = $("<button>");
    $("#answers").append(answerChoiceDiv);
    // Create a div for each answer choice
    for (var i = 0; i < randomQuestion.answerList.length; i++) 
    {
    var eachAnswerDiv = $("<div>");
    eachAnswerDiv.addClass("eachAnswerDiv");
    eachAnswerDiv.attr("answer", [i]);
    eachAnswerDiv.append(randomQuestion.answerList[i]);
    $(answerChoiceDiv).append(eachAnswerDiv);
    };
    chooseAnswer();
}

function chooseAnswer()
{
    $(".eachAnswerDiv").on("click", function()
    {
        var choosenAnswer = parseInt($(this).attr("answer"));
        console.log(choosenAnswer)
        if (choosenAnswer === trivia.answer)
        {
            alert("correct answer")
        }
        else
        {
            alert("wrong answer")
        }

    })
}

//Initiate Main
main();
});