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

// Navigate to the next page
function nextPage() {
    const form = document.getElementById('quiz-form');
    const answers = JSON.parse(localStorage.getItem('answers')) || {};

    new FormData(form).forEach((value, key) => {
        answers[key] = value;
    });

    localStorage.setItem('answers', JSON.stringify(answers));
    window.location.href = 'quiz2.html';
}