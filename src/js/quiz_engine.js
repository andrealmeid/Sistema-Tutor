'use strict';

// global var for jsom database
var database;

// global var for get clicked answer
var clickedAnswer = 0;

// global var for actual question
var actualQuestion = 0;

// sequence of user's quentions
var questionsPath = [];

// load database from a json string
function loadDatabase(name){
    database = JSON.parse(name);
}

// the first function to be called
function begin(){
    loadDatabase(db);
    setQuestion(0);
}

// fill the answers with the alternatives and the text of the question
function setQuestion(num){
    if (num == -1){
        document.location = "end.html?path=" + questionsPath;
        return;
    }

    // load variables from database
    var text = database.questions[num].text;
    var answers = database.questions[num].answers;
    var media = database.questions[num].media;

    // set global var
    actualQuestion = num;
    questionsPath.push(num);

    // set question text
    document.getElementById('question_text').innerHTML = text;

    // set media to html, if it doesn't exists, clear media_div
    if (media != null)
        setMedia(media.type, media.file);
    else
        insertMedia('');

    // set answers to buttons
    for(var i = 0; i < 4; i++)
        document.getElementById('answer' + i).innerHTML = answers[i].t;
}

// action handler for clicking on an answer
function selectAnswer(num){
    document.getElementById('answer' + clickedAnswer).className = 'answer_button';
    clickedAnswer = num;
    document.getElementById('answer' + num).className = 'answer_button_clicked';
}

// get next question from select answer
function getNextQuestion(answer){
    return database.questions[actualQuestion].answers[answer].p;
}

// insert in the inner HTML of div media_div the media of param
function insertMedia(html) {
    document.getElementById('media_div').innerHTML = html
}

// gets the type (kind) of media and the file to be displayed
function setMedia(type, file){
    switch (type) {
        case "text":
            insertMedia('<object data=../media/' + file + ' type="text/html" width=650 height=200></object>');
            break;

        case "video":
            insertMedia('<video width="560" src=../media/' + file + ' controls>');
            break;

        case "audio":
            insertMedia('<audio src=../media/' + file + ' controls>');
            break;

        case "image":
            insertMedia('<img src=../media/' + file + '>');
            break;
    }
}

function printEnd(){

    var path = getUrlVars()["path"];

    questionsPath = path;

    var stringPath = "";
    var size = questionsPath.length;
    for(var i = 0; i < size; i+=2)
        stringPath += questionsPath[i] + " -> "
    stringPath += "END"

    document.getElementById('end').innerHTML = stringPath;
}

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}
