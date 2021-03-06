/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/

/*
--- Expert level ---

8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
*/

// Own Solution
/*
var Question = function(question, answers, correctAnswer) {
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
}

var questionOne = new Question('What is the capital of Norway?', ['Bergen','Oslo','Stavanger'], 1);
var questionTwo = new Question('What is the currency of Iran?', ['Rupee', 'Dinar', 'Rial'], 2);
var questionThree = new Question('What is the World Record on the 100m Sprint for Men?', ['9.58', '9.63', '9.55'],0);

var listQuestions = [questionOne,questionTwo,questionThree];

var answerUser;

function pickQuestion(questions) {
    var picker = Math.floor(Math.random() * questions.length);
    Question = questions[picker];
}



function checkAnswer(answer) {
    if (answerUser - 1 === Question.correctAnswer) {
        console.log('Yes, that is the correct answer!');
    } else {
        console.log('Nope, that is wrong');
    }
}

function execute() {
    pickQuestion(listQuestions);

    answerUser = prompt(Question.question +
                            '\nEnter the number of the correct answer. ' +
                            '\n\n Answers: ' +
                            '\n 1) ' + Question.answers[0] +
                            '\n 2) ' + Question.answers[1] +
                            '\n 3) ' + Question.answers[2]);

    checkAnswer(answerUser);
}

*/

// Their Solution

(function(){
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    Question.prototype.displayQuestion = function() {
        console.log(this.question);

        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ') ' + this.answers[i]);
        }
    }

    Question.prototype.checkAnswer = function(ans) {
        if (ans === this.correct) {
            console.log('Correct answer');
        } else {
            console.log('Wrong answer');
        }
    }

    var q1 = new Question('Is JS cool?', ['Yes', 'No'], 0);
    var q2 = new Question('What name of teacher?', ['John', 'Michael', 'Jonas'], 2);
    var q3 = new Question('What does best decribe coding?', ['Hard', 'Tedious', 'Fun', 'Boring'], 2);

    var questions = [q1, q2, q3];

    var n = Math.floor(Math.random() * questions.length);

    questions[n].displayQuestion();

    var answer = parseInt(prompt('Please select the correct answer.'));

    questions[n].checkAnswer(answer);
})();

/*
8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
*/


(function(){
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    Question.prototype.displayQuestion = function() {
        console.log(this.question);

        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ') ' + this.answers[i]);
        }
    }

    Question.prototype.checkAnswer = function(ans, callback) {
        var sc;

        if (ans === this.correct) {
            console.log('Correct answer');

            sc = callback(true);
        } else {
            console.log('Wrong answer');

            sc = callback(false);
        }

        this.displayScore(sc);
    }

    Question.prototype.displayScore = function(score) {
        console.log('Your current score is: ' + score);
        console.log('---------------------------------');
    }

    var q1 = new Question('Is JS cool?', ['Yes', 'No'], 0);
    var q2 = new Question('What name of teacher?', ['John', 'Michael', 'Jonas'], 2);
    var q3 = new Question('What does best decribe coding?', ['Hard', 'Tedious', 'Fun', 'Boring'], 2);

    var questions = [q1, q2, q3];

    function score() {
        var sc = 0;
        return function(correct) {
            if (correct) {
                sc++;
            }
            return sc;
        }
    }

    var keepScore = score();

    function nextQuestion() {
        var n = Math.floor(Math.random() * questions.length);

        questions[n].displayQuestion();

        var answer = prompt('Please select the correct answer.');

        if (answer !== 'exit') {
            questions[n].checkAnswer(parseInt(answer), keepScore);

            nextQuestion();
        }
    }

    nextQuestion();
})();

























