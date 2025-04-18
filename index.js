const questionsContainer = document.getElementById("question");
const quizContainer = document.getElementById("answers");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let questions = [];
let score = 0;

fetch("https://opentdb.com/api.php?amount=5&category=28&difficulty=easy&type=multiple")
  .then(response => response.json())
  .then(data => {
    questions = data.results;
    showQuestion();
  })
  .catch(error => console.log(error));

function showQuestion() {
  const data = questions[currentQuestionIndex];

  // Clear previous
  questionsContainer.innerHTML = "";
  quizContainer.innerHTML = "";

  // Show question the question from the json obje
  const questionText = document.createElement("h2");
  questionText.innerHTML = data.question;
  questionsContainer.appendChild(questionText);

  // Shuffle and show answers
  const allAnswers = [data.correct_answer, ...data.incorrect_answers];
  shuffleArray(allAnswers);

  allAnswers.forEach(answer => {
    const button = document.createElement("button");
    button.className = "answer-btn";
    button.textContent = answer;
    button.onclick = () => {
      handleAnswer(answer === data.correct_answer);
    };
    quizContainer.appendChild(button);
  });

  // Hide next button until user answers
  nextButton.style.display = "none";
}

function handleAnswer(isCorrect) {
  if (isCorrect) {
    score++;
    alert("✅ Correct!");
  } else {
    alert("❌ Wrong!");
  }

  // Show Next button
  nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showResults();
  }
});

function showResults() {
  questionsContainer.innerHTML = `<h2>Quiz Completed!</h2><p>Your score: ${score} / ${questions.length}</p>`;
  quizContainer.innerHTML = "";
  nextButton.style.display = "none";
}

// Shuffle helper
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
