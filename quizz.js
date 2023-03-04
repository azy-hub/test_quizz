let allQuestion = [
    {
      "category": "Science: Computers",
      "type": "multiple",
      "difficulty": "hard",
      "question": "The Harvard architecture for micro-controllers added which additional bus?",
      "correct_answer": "Instruction",
      "incorrect_answers": [
        "Address",
        "Data",
        "Control"
      ]
    },
    {
      "category": "Science: Computers",
      "type": "multiple",
      "difficulty": "easy",
      "question": "What is the most preferred image format used for logos in the Wikimedia database?",
      "correct_answer": ".svg",
      "incorrect_answers": [
        ".png",
        ".jpeg",
        ".gif"
      ]
    },
    {
      "category": "Science: Computers",
      "type": "multiple",
      "difficulty": "medium",
      "question": "What does the acronym CDN stand for in terms of networking?",
      "correct_answer": "Content Delivery Network",
      "incorrect_answers": [
        "Content Distribution Network",
        "Computational Data Network",
        "Compressed Data Network"
      ]
    },
    {
      "category": "Science: Computers",
      "type": "multiple",
      "difficulty": "medium",
      "question": "Which coding language was the #1 programming language in terms of usage on GitHub in 2015?",
      "correct_answer": "JavaScript",
      "incorrect_answers": [
        "C#",
        "Python",
        "PHP"
      ]
    },
    {
      "category": "Science: Computers",
      "type": "multiple",
      "difficulty": "hard",
      "question": "Which of these names was an actual codename for a cancelled Microsoft project?",
      "correct_answer": "Neptune",
      "incorrect_answers": [
        "Enceladus",
        "Pollux",
        "Saturn"
      ]
    },
    {
      "category": "Science: Computers",
      "type": "multiple",
      "difficulty": "medium",
      "question": "In CSS, which of these values CANNOT be used with the &quot;position&quot; property?",
      "correct_answer": "center",
      "incorrect_answers": [
        "static",
        "absolute",
        "relative"
      ]
    },
    {
      "category": "Science: Computers",
      "type": "multiple",
      "difficulty": "medium",
      "question": "Which operating system was released first?",
      "correct_answer": "Mac OS",
      "incorrect_answers": [
        "Windows",
        "Linux",
        "OS/2"
      ]
    },
    {
      "category": "Science: Computers",
      "type": "multiple",
      "difficulty": "hard",
      "question": "Which data structure does FILO apply to?",
      "correct_answer": "Stack",
      "incorrect_answers": [
        "Queue",
        "Heap",
        "Tree"
      ]
    },
    {
      "category": "Science: Computers",
      "type": "multiple",
      "difficulty": "medium",
      "question": "What does the term GPU stand for?",
      "correct_answer": "Graphics Processing Unit",
      "incorrect_answers": [
        "Gaming Processor Unit",
        "Graphite Producing Unit",
        "Graphical Proprietary Unit"
      ]
    },
    {
      "category": "Science: Computers",
      "type": "multiple",
      "difficulty": "easy",
      "question": "This mobile OS held the largest market share in 2012.",
      "correct_answer": "iOS",
      "incorrect_answers": [
        "Android",
        "BlackBerry",
        "Symbian"
      ]
    }
];
const question = document.getElementById('question');
const reponses = document.getElementById('reponses');


function createQuestions (tab) {
    const loadQuestions = tab.map( (elt) => {
    const loadQuestion = { question : elt.question };
    loadQuestion.reponse = Math.floor(Math.random()*4);
    elt.incorrect_answers.splice(loadQuestion.reponse,0,elt.correct_answer);
    loadQuestion.reponses = elt.incorrect_answers;
    return loadQuestion;
    });
    return loadQuestions;
}

function genererQuestion(tab){
    if(tab === []) { console.log("plus de questions !"); return; }
    else {let n = Math.floor(Math.random() * tab.length);
    let currentQuestion = tab[n];
    question.innerHTML = currentQuestion.question;
    reponses.innerHTML = "";
    currentQuestion.reponses.forEach((elt,index) => {
      let balise = document.createElement("div")
      balise.innerHTML = elt;
    //  else balise.setAttribute('class','red');
      reponses.appendChild(balise);
    });
    tab.splice(n,1);
  Array.from(document.querySelectorAll("#reponses > div")).forEach( (elt,index) => 
  elt.addEventListener('click',() => {  
    if(index == currentQuestion.reponse ) { genererQuestion(availableQuestion); }
    else elt.setAttribute('class','red');
   }));
} }

const availableQuestion = createQuestions(allQuestion);
genererQuestion(availableQuestion);