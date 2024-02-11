let totalQuestions = 6;
let currentQuestion = 1;
let allQuestionsAnswered = false;
let starRated = false;

document
  .querySelectorAll('.feedback-box .question-box input[type="radio"]')
  .forEach(function (radio) {
    radio.addEventListener("change", function () {
      if (currentQuestion < totalQuestions) {
        document.getElementById("question" + currentQuestion).style.display =
          "none";
        currentQuestion++;
        if (currentQuestion <= totalQuestions) {
          document.getElementById("question" + currentQuestion).style.display =
            "block";
        }
      }
      checkCompletion();
      updateProgressBar();
    });
  });

function showStarRating() {
  if (currentQuestion === 5) {
    document.getElementById("question6").style.display = "block";
  }
}

document
  .querySelectorAll('.star-rating input[type="radio"]')
  .forEach(function (star) {
    star.addEventListener("change", function () {
      starRated = true;
      checkCompletion();
    });
  });

function checkCompletion() {
  if (currentQuestion > 5 && !starRated) {
    allQuestionsAnswered = Array.from(
      document.querySelectorAll(".feedback-box .question-box")
    )
      .slice(0, -1)
      .every(function (question) {
        return question.querySelector('input[type="radio"]:checked');
      });
    if (allQuestionsAnswered) {
      document.getElementById("question6").style.display = "block";
    }
  }

  if (currentQuestion === totalQuestions && starRated) {
    allQuestionsAnswered = Array.from(
      document.querySelectorAll(".feedback-box .question-box")
    ).every(function (question) {
      return question.querySelector('input[type="radio"]:checked');
    });
  }

  if (allQuestionsAnswered && starRated) {
    document.getElementById("submitFeedback").style.backgroundColor = "teal";
  }
}

function submitFeedback() {
  if (!allQuestionsAnswered || !starRated) {
    alert("Please answer all questions and rate the exam.");
    return;
  }
  alert("Feedback submitted successfully!");
  // Add submission logic here
}

function toggleComments() {
  var checkBox = document.getElementById("additionalCommentsCheck");
  var comments = document.getElementById("additionalComments");
  comments.style.display = checkBox.checked ? "block" : "none";
}

document
  .querySelectorAll('.feedback-box .question-box input[type="radio"]')
  .forEach(function (radio) {
    radio.addEventListener("change", function () {
      updateProgressBar();
    });
  });

function updateProgressBar() {
  var progressPercentage = (currentQuestion / totalQuestions) * 100;
  document.getElementById("progress").style.width = progressPercentage + "%";
}

function submitFeedback() {
  if (allQuestionsAnswered && starRated) {
    document.getElementById("progress").style.width = "100%";
    alert("Feedback submitted successfully!");
  }
}
