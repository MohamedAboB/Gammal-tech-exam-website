function nextQuestion2(nextQuestionId) {
    // Hide the current question and show the next one
    document.getElementById('question1').style.display = 'none';
    document.getElementById('question2').style.display = 'none';
    document.getElementById('question3').style.display = 'none';
    document.getElementById(nextQuestionId).style.display = 'block';
}

function nextQuestion3(nextQuestionId) {
    // Hide the current question and show the next one
    document.getElementById('question1').style.display = 'none';
    document.getElementById('question2').style.display = 'none';
    document.getElementById('question3').style.display = 'none';
    document.getElementById(nextQuestionId).style.display = 'block';
}

function submitExam() {
    // Add logic to handle the submission of the exam
    alert('Exam submitted'); // Placeholder for actual logic
}

function navigateToAnotherPage2() {
    // You can replace "target_page.html" with the actual URL or file path of your target page
    window.location.href = "PhaseThree.html";
}

function navigateToAnotherPage3() {
    // You can replace "target_page.html" with the actual URL or file path of your target page
    window.location.href = "PhaseOne.html";
}

let nextQuestionID = 1; // Ensure this is correctly initialized and accessible

function startTimer(questionID) {
    clearInterval(timer); // Clear any existing timer
    let timerSeconds = 10; // Set the timer to 10 seconds for each question
    const timerDisplay = document.getElementById('timer');

    // Debug: Log the current question ID
    console.log("Starting timer for question:", questionID);

    // Select elements specific to the current question
    const textAndChoicesColumn = document.getElementById(questionID).querySelector('.text-and-choices-column');
    const container2Button = document.getElementById(questionID).querySelector('.container2 button');

    timer = setInterval(function () {
        timerDisplay.innerText = timerSeconds + 's'; // Update the timer display

        if (timerSeconds === 0) {
            clearInterval(timer); // Stop the timer
            nextQuestion(); // Move to the next question
        } else if (timerSeconds <= 3) {
            textAndChoicesColumn.style.borderColor = "#FFA07A";
            container2Button.style.borderColor = "#FFA07A";
            container2Button.style.backgroundColor = "#FFA07A";
        } else {
            textAndChoicesColumn.style.borderColor = "#008080";
            container2Button.style.borderColor = "#008080";
            container2Button.style.backgroundColor = "#008080";
        }
        timerSeconds--; // Decrement the timer
    }, 1000);
}

function nextQuestion() {
    document.getElementById(nextQuestionID).style.display = 'none'; // Hide the current question
    if (nextQuestionID < 6) {
        nextQuestionID++;
        document.getElementById(nextQuestionID).style.display = 'flex'; // Show the next question
        startTimer(nextQuestionID); // Start the timer for the new question
    } else {
        navigateToAnotherPage(); // Navigate to another page if it's the last question
    }
}

startTimer(nextQuestionID); // Start the timer for the first question

// Function to navigate to another page
function navigateToAnotherPage() {
    // You can replace "target_page.html" with the actual URL or file path of your target page
    window.location.href = "ratingpage.html";
}

// Add an event listener to the "Next" button for manual navigation
document.getElementById('nextButton').addEventListener('click', nextQuestion);


