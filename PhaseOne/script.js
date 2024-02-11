var id = "<?php echo isset($_SESSION['email']) ? $_SESSION['email'] : ''; ?>";

function sendDataToServer(valueToSend, rowToUpdate) {
  // Create a new XMLHttpRequest object
  var xhr = new XMLHttpRequest();

  // Configure it: POST-request, URL, and set asynchronous
  xhr.open('POST', 'score.php', true);

  // Set the appropriate header for form data
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

  // Define what happens on successful data submission
  xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
          // Request was successful
          console.log('Data updated successfully!');
      } else {
          // Request failed
          console.error('Request failed!');
      }
  };

  // Send the request with the value to update and the row ID
  xhr.send('value=' + encodeURIComponent(valueToSend) + '&row_id=' + rowToUpdate);
}

// Quiz data
const quizData = [
  {
    id: "Question 1",
    question: "Syntax error is in: ",
    options: ["additional  '&'  in first scanf", "missing  ';'  in printf", "mising  '&'  in printf", "None"],
    correctAnswer: "additional  '&'  in first scanf"
  },
  {
    id: "Question 2",
    question: "Syntax error is in: ",
    options: ["Missing ';' in first for loop", "Should be 'Int'", "Should be '>=' not '=>'", "None"],
    correctAnswer: "Should be '>=' not '=>'"
  },
  {
    id: "Question 3",
    question: "Functoin syntax error is in: ",
    options: ["Missing ';' in 'return'", "Type in function should be 'char'", "Should be 'Printf'", "None"],
    correctAnswer: "Missing ';' in 'return'"
  },
  {
    id: "Question 4",
    question: "Syntax error is in: ",
    options: ["Missing '&' in scanf", "Missing ';' in 'if' statment", "Missing '#include <string.h>'", "None"],
    correctAnswer: "Missing '#include <string.h>'"
  },
  {
    id: "Question 5",
    question: "Syntax error is in: ",
    options: ["Missing '&' in scanf", "Missing ';' in 'if' statment", "Missing ';' in 'for' loop", "None"],
    correctAnswer: "Missing ';' in 'for' loop"
  },
  {
    id: "Question 6",
    question: "functoin syntax error is in: ",
    options: ["Missing type of function", "Missing ';' in printf", "Missing ';' in 'for' loop", "None"],
    correctAnswer: "Missing type of function"
  },
];
var txt =[` 
      #include <stdio.h>

      int main() {
        char x[20];
        int y;
        scanf("%s",&x);
        scanf("%d",&y);
        printf("%s\\t%d\\n",x,y);
        return 0;
      }`,
`         
        #include <stdio.h>

        int main(void) {
          int x[10],i;
          for(i=0;i<10;i++)
            scanf("%d",&x[i]);

          for(i=0;i<10;i++)
            if(x[i] => 0)
              printf("%d\\n",x[i]);
          return 0;
        }`,
      `
      #include <stdio.h>

      void fun(int n1,int n2,int n3,int n4){
        int max1 = n1 > n2 ? n1 : n2;
        int max2 = n3 > n4 ? n3 : n4;
        if(max1 > max2){
          printf("%d\\n", max1);
          return
        }
        printf("%d\\n", max2);
        return
      }
      
      //code here
      `,
      `
      #include <stdio.h>
      
      int main(void) {
        char x[20];
        scanf("%s",x);
        if(strcmp(x,"string")==0){
          printf("OK\\n");
          strcat(x, " Good");
        }
        printf("Done\\n");
        return 0;
      }`,
      `
      #include <stdio.h>

      int main() {
        int n,i,x=0;
        scanf("%d",&n);
        for(i=1; i<=n i++){
          printf("%d\\n",i);
          x+=i;
        }
        printf("%d\\n",x);
        return 0;
      }`,
      `
      #include <stdio.h>

      fun(char w[]){
        int i;
        for(i=0;w[i];i++)
          if(w[i]>='A'&&w[i]<='Z')
            w[i]+=32;
        printf("%s\\n",w);
      }

      int main(void) {
        char w[50];
        scanf("%[^\\n]",w);
        fun(w);
        return 0;
      }`,];

var speed = 35;
// Variables
let currentQuestion = 0;
let score = 0;
let timer;
let i;
// DOM elements
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const timerElement = document.getElementById("timer");
const nextButton = document.getElementById("next-btn");
const codeContainer = document.getElementById("code-container");
const code = document.getElementById("code");
const questionNumberElement = document.getElementById("question-number");

// Function to start the quiz
function startQuiz() {
  showQuestion();
  startTimer();
}

function typeWriter() {
  if (i < txt[currentQuestion].length) {
    const targetDiv = document.getElementById("code");
    targetDiv.innerHTML += txt[currentQuestion].charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

// Function to display the current question
function showQuestion() {
  i = 0;
  code.innerHTML = "";
  typeWriter(i);
  const currentQuizData = quizData[currentQuestion];
  questionElement.textContent = currentQuizData.question;
  optionsElement.innerHTML = "";
  questionNumberElement.textContent = currentQuizData.id;
  currentQuizData.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.classList.add("option-btn");
    button.addEventListener("click", () => selectOption(option));
    optionsElement.appendChild(button);
  });
}

// Function to select an option
function selectOption(selectedOption) {
  if (selectedOption === quizData[currentQuestion].correctAnswer) {
    // Increment the score if the answer is correct
    score++;
  }
}

// Function to show the next question or end the quiz
function showNextQuestion() {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    startTimer();
    showQuestion();
  } else {
    endQuiz();
  }
}

// Function to start the timer for each question
function startTimer() {
  let timeLeft = 20; // Timer set to 15 seconds per question
  timerElement.textContent = timeLeft;

  timer = setInterval(() => {
    timeLeft--;
    timerElement.textContent = timeLeft;
    if (timeLeft === 0) {
      clearInterval(timer);
      showNextQuestion();
    }
  }, 1000);

  // Add event listener to check if an option is selected when the timer runs out
  optionsElement.addEventListener("click", checkOptionSelected);

  // Check if it's the last question
  if (currentQuestion === quizData.length) {
    timerElement.style.display = "none"; // Hide timer on the last question
  } else {
    timerElement.style.display = "block"; // Show timer for other questions
  }
}

// Function to check if an option is selected when the timer runs out
function checkOptionSelected() {
  const selectedOption = document.querySelector(".option-btn.selected");
  if (!selectedOption) {
    clearInterval(timer);
    showNextQuestion();
  }
}

// Function to handle when the next button is clicked
function handleNextButtonClick() {
  const selectedOption = document.querySelector(".option-btn.selected");
  if (!selectedOption) {
    // If no option is selected, proceed to the next question
    clearInterval(timer);
    showNextQuestion();
    return;
  }
  selectOption(selectedOption.textContent);
}

// Event listener for next button click
nextButton.addEventListener("click", handleNextButtonClick);

// Function to end the quiz and display the final score
function stopTimer() {
  clearInterval(timer);
  timerElement.style.display = "none"; // Hide timer on the last question
}

// Function to end the quiz and display the final score
function endQuiz() {
  stopTimer(); // Stop the timer on the score page
  sendDataToServer(score, id);
  optionsElement.innerHTML = "";
  timerElement.textContent = "";
  questionNumberElement.style.display = "none";
  nextButton.style.display = "none";
  codeContainer.style.display = "none";
}
// Event listener for starting the quiz
nextButton.addEventListener('click', startQuiz);

// Start the quiz when the page loads
startQuiz();
