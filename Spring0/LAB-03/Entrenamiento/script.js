const startButton = document.getElementById("startButton");
const quizContainer = document.getElementById("quizContainer");
const resultDiv = document.getElementById("result");
const answerInput = document.getElementById("answerInput");
const submitAnswer = document.getElementById("submitAnswer");
const title = document.getElementById("title");

startButton.addEventListener("click" , () =>{
    quizContainer.style.display = "block";
    startButton.style.display = "none";
});

submitAnswer.addEventListener("click", () => {
    const answer = answerInput.value.trim();
    if (answer === "4") {
      resultDiv.textContent = "Correct!";
      resultDiv.classList.remove("incorrect");
      resultDiv.classList.add("correct");
    } else {
      resultDiv.textContent = "Incorrect, try again.";
      resultDiv.classList.remove("correct");
      resultDiv.classList.add("incorrect");
    }
    answerInput.value = "";
  });
  
  document.addEventListener("click", (event) => {
    const clickedElement = event.target;
    if (clickedElement !== startButton && clickedElement !== submitAnswer) {
      title.textContent = "Quiz in Progress";
    }
  });