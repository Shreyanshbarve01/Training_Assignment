// Timer function
function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = "Time left: " + minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
            alert("Time's up!");
            submitQuiz();
        }
    }, 1000);
}

// Start the timer on page load
window.onload = function () {
    const timeLimit = 60 * 20; // 20 minutes
    const display = document.querySelector('#timer');
    if (display) {
        startTimer(timeLimit, display);
    }
};

// Submit the quiz and calculate the score
function submitQuiz() {
    const form = document.getElementById('quiz-form');
    const answers = JSON.parse(localStorage.getItem('answers')) || {};

    new FormData(form).forEach((value, key) => {
        answers[key] = value;
    });

    localStorage.setItem('answers', JSON.stringify(answers));

    const correctAnswers = {
        q1: 'Hyper Text Markup Language',
        q2: '<style>',
        q3: 'color',
        q4: 'alert(\'Hello World\');',
        q5: 'style'
    };

    let score = 0;
    for (let key in correctAnswers) {
        if (answers[key] === correctAnswers[key]) {
            score++;
        }
    }

    localStorage.setItem('score', score);
    window.location.href = 'result.html';
}