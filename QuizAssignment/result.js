// Display results on the result page
function displayResults() {
    const score = localStorage.getItem('score');
    const totalQuestions = 5;
    const percentage = (score / totalQuestions) * 100;

    document.getElementById('score').innerText = `Score: ${score} / ${totalQuestions}`;
    document.getElementById('percentage').innerText = `Percentage: ${percentage.toFixed(2)}%`;

    const answers = JSON.parse(localStorage.getItem('answers'));
    const correctAnswers = {
        q1: 'Hyper Text Markup Language',
        q2: '<style>',
        q3: 'color',
        q4: 'alert(\'Hello World\');',
        q5: 'style'
    };

    let answersHtml = '<h2 class="text-xl font-bold mb-4">Your Answers:</h2>';
    for (let key in correctAnswers) {
        answersHtml += `<p>${key}: Your answer: ${answers[key]} | Correct answer: ${correctAnswers[key]}</p>`;
    }

    document.getElementById('answers').innerHTML = answersHtml;
}

// Show answers when the button is clicked
document.getElementById('show-answers-btn').addEventListener('click', function() {
    const answersDiv = document.getElementById('answers');
    answersDiv.classList.toggle('hidden');
});

// Call displayResults if on the result page
if (window.location.pathname.endsWith('result.html')) {
    displayResults();
}