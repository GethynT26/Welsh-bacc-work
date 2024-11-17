const quizData = [
    {
      question: "what percentage of adults experience a mental health condition in their lifetime?",
      options: ["5-10%", "15-20%", "20-25%", "35-45%"],
      answer: "20-25%"
    },
    {
      question: "Which one of these activities is most effective for reducing stress?",
      options: ["Overworking", "Exercise", "Watching TV", "Moving houses"],
      answer: "Exercise"
    },
    {
        question: "What is the most common mental health disorder worldwide?",
        options: ["Depression", "PTSD", "Eating ", "Anxiety"],
        answer: "Anxiety"
    },
    {
        question: "Whats one thing you should NOT do to boost your mood?",
        options: ["Stretching", "Deep breaths", "Drugs", "listening to music"],
        answer: "Drugs"
    },
    {
        question: "Which activity combines physical exercise with relaxation and mindfulness?",
        options: ["Yoga", "Football", "Rugby", "Boxing"],
        answer: "Yoga"
    },
    {
        question: "True or False: Practicing meditation for only 10 minutes a day can lower stress levels?",
        options: ["True", "False",],
        answer: "True"
    },
    
    // Add more questions here...
  ];
  
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const submitButton = document.getElementById("submit");
  
  let currentQuestion = 0;
  let score = 0;
  
  function showQuestion() {
    const question = quizData[currentQuestion];
    questionElement.innerText = question.question;
  
    optionsElement.innerHTML = "";
    question.options.forEach(option => {
      const button = document.createElement("button");
      button.innerText = option;
      optionsElement.appendChild(button);
      button.addEventListener("click", selectAnswer);
    });
  }
  
  function selectAnswer(e) {
    const selectedButton = e.target;
    const answer = quizData[currentQuestion].answer;
  
    if (selectedButton.innerText === answer) {
      score++;
    }
  
    currentQuestion++;
  
    if (currentQuestion < quizData.length) {
      showQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    quiz.innerHTML = `
      <h1>Quiz Completed!</h1>
      <p>Your score: ${score}/${quizData.length}</p>
    `;
  }
  
  showQuestion();