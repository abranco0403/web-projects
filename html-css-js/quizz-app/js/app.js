import { quizData } from './questions.js';

function quiz() {
    const quiz = document.getElementById('quiz');
    const answerEls = document.querySelectorAll('.answer');
    const questionEl = document.getElementById('question');
    const a_text = document.getElementById('a_text');
    const b_text = document.getElementById('b_text');
    const c_text = document.getElementById('c_text');
    const d_text = document.getElementById('d_text');
    const questionNumber = document.getElementById('question_number');
    const submitBtn= document.getElementById('submit');

    let currentQuiz = 0;
    questionNumber.innerText = currentQuiz + 1;
    let score = 0;

    loadQuiz();

    function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText =  currentQuizData.a;
    b_text.innerText =  currentQuizData.b;
    c_text.innerText =  currentQuizData.c;
    d_text.innerText =  currentQuizData.d;
    }

    function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
    }

    function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
    }
    submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length) {
            loadQuiz();
            questionNumber.innerText = currentQuiz + 1;
        } else {
            quiz.innerHTML = `
                <div class = "quiz_result">
                    <h2 class = "h6 text-center text-uppercase mb-3">Your Score</h2>
                    <h1 class = "h3 text-center"><span class = "text-success">${score}</span>/${quizData.length}</h1>
                </div>
                <button class = "button rounded p-4 my-4 fs-6" onclick = "location.reload()">Take Quiz Again</button>
            `
        }
    }
    });
}
quiz();
