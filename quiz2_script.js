// Quiz questions array
const questions = [
    {
      question: "Question 1: What is an example of good debt?",
      options: ["Student loans for higher education", 
      "Maxing out credit cards on unnecessary purchases", 
      "Payday loans with high-interest rates", 
      "Borrowing money to go on vacation "],
      answer: "Student loans for higher education"
    },
    {
      question: "Question 2: Which of the following is a characteristic of bad debt?",
      options: ["Low-interest rate", 
      "Investment in a property", 
      "Improving one's skills through education", 
      "Accumulating credit card debt for luxury items"],
      answer: "Accumulating credit card debt for luxury items"
    },
    {
      question: "Question 3: What is a potential benefit of good debt?",
      options: ["Decreased credit score", 
      "Increased financial security", 
      "Frequent reliance on payday loans", 
      "Inability to save money"],
      answer: "Increased financial security"
    },
    {
      question: "Question 4: Which of the following is considered bad debt?",
      options: ["Mortgage for purchasing a home", 
      "Financing a new car beyond one's means", 
      "Personal loan for starting a business", 
      "Borrowing money for a medical emergency"],
      answer: "Financing a new car beyond one's means"
    },
    {
      question: "Question 5: What is a common consequence of bad debt?",
      options: ["Better ability to manage personal finances", 
      "Increased financial stability", 
      "Limited access to future credit opportunities", 
      "Improved creditworthiness"],
      answer: "Limited access to future credit opportunities"
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
  