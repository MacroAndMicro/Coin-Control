// Quiz questions array
const questions = [
    {
      question: "Question 1: We should keep our savings with banks because",
      options: ["It is safe", "Earns interest", "Can be withdrawn anytime", "All of given"],
      answer: "All of given"
    },
    {
      question: "Question 2: Banks pays interest on",
      options: ["Deposits", "Loans", "Both (a) & (b)", "None of above"],
      answer: "Deposits"
    },
    {
      question: "Question 3: PAN means",
      options: ["Primary Account Number", "Permanent Account Number", "A kind of utensil", "None"],
      answer: "Permanent Account Number"
    },
    {
      question: "Question 4: In Recurring Deposits,",
      options: ["a fixed sum is deposited every month", "period of deposit is a fixed tenure", "interest is paid at FDR rate", "All the given"],
      answer: "All the given"
    },
    {
      question: "Question 5: Bank charges interest on",
      options: ["Deposits", "Loans", "Both the given", "None"],
      answer: "Loans"
    }
  ];
  
  // Variables to track quiz progress
  let currentQuestion = 0;
  let score = 0;
  
  // Function to display current question
  function displayQuestion() {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const nextButton = document.getElementById('nextButton');
    const previousButton = document.getElementById('previousButton');
  
    // Clear previous question and options
    questionElement.textContent = '';
    optionsElement.innerHTML = '';
  
    // Display current question
    questionElement.textContent = questions[currentQuestion].question;
  
    // Display options
    questions[currentQuestion].options.forEach(function(option) {
      const optionButton = document.createElement('button');
      optionButton.textContent = option;
  
      optionButton.addEventListener('click', function() {
        checkAnswer(option);
      });
  
      optionsElement.appendChild(optionButton);
    });
  
    // Hide next/previous buttons if necessary
    if (currentQuestion === 0) {
      previousButton.style.display = 'none';
    } else {
      previousButton.style.display = 'inline-block';
    }
  
    if (currentQuestion === questions.length - 1) {
      nextButton.style.display = 'none';
    } else {
      nextButton.style.display = 'inline-block';
    }
  }
  
  // Function to check the selected answer
  function checkAnswer(selectedOption) {
    const answer = questions[currentQuestion].answer;
    const explanationElement = document.getElementById('explanation');
  
    if (selectedOption === answer) {
      score++;
      explanationElement.textContent = 'Correct!';
    } else {
      explanationElement.textContent = `Incorrect. The correct answer is ${answer}.`;
    }
  }
  
  // Function to go to the next question
  function nextQuestion() {
    currentQuestion++;
    displayQuestion();
  }
  
  // Function to go to the previous question
  function previousQuestion() {
    currentQuestion--;
    displayQuestion();
  }
  
  // Function to show final score and correct answers
  function showResults() {
    const resultElement = document.getElementById('result');
    const scoreElement = document.getElementById('score');
  
    resultElement.textContent = `Quiz Complete!`;
    scoreElement.textContent = `Your score: ${score} out of ${questions.length}`;
  }
  
  // Initialize quiz
  displayQuestion();
  
  // Add event listeners to next and previous buttons
  const nextButton = document.getElementById('nextButton');
  nextButton.addEventListener('click', nextQuestion);
  
  const previousButton = document.getElementById('previousButton');
  previousButton.addEventListener('click', previousQuestion);
  
  // Show results at the end of the quiz
  if (currentQuestion === questions.length - 1) {
    nextButton.addEventListener('click', showResults);
  }
  