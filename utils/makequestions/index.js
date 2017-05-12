/**
 * @author Piotrek Polus / SoInteractive <ppolus@sointeractive.pl>
 */

var fs = require('fs');

var questions = require('./cupclub.json');

console.log(questions.length);

var arr = [];

for(var i=0; i<questions.length; i++){

    let answers = [];
    let correct = [];

    for(var j=0; j<questions[i].answers.length; j++){
        answers.push({
            "id" : j,
            "answer" : questions[i].answers[j].answer
        });

        if(questions[i].answers[j].isCorrect){
            correct.push(j);
        }
    }

    let obj = {
        "question" : questions[i].question,
        "type" : "single",
        "answers" : answers,
        "correct" : correct
    };

    arr.push(obj);
}

fs.writeFile('q.json', JSON.stringify(arr), 'utf8');