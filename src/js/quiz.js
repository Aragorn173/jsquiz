(function () {
    const yesButton = document.getElementById("yes");
    const noButton = document.getElementById("no");
    function buildQuiz() {
        score = 0;
        const output = [];
        questions.forEach(
            (currentQuestion, questionNumber) => {
                const answers = [];
                for (letter in currentQuestion.answers) {
                    answers.push(
                        `<label> 
                    <input type="button" name="question${questionNumber}" value="${letter}">
                    ${letter} :
                    ${currentQuestion.answers[letter]}
                    </label>`
                    );
                }
                output.push(
                    `<div class="slide">
                <div class="question"> ${currentQuestion.question} </div>
                <div class="answers"> ${answers.join('')} </div>
                </div>`
                );
            }
        );
        quizContainer.innerHTML = output.join('');
        showScore();
    }

    function showResults() {
        const answerContainers = quizContainer.querySelectorAll('.answers');

        let numCorrect = 0;

        questions.forEach((currentQuestion, questionNumber) => {

            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            if (userAnswer === currentQuestion.correctAnswer) {
                numCorrect++;

                answerContainers[questionNumber].style.color = 'lightgreen';
            }
            else {
                answerContainers[questionNumber].style.color = 'red';
            }
        });

        resultsContainer.innerHTML = `${numCorrect} out of ${questions.length}`;
    }

    function showScore() {
        let scoreDiv = document.getElementById('score');
        scoreDiv.textContent = 'Poäng:' + score;
    }

    function showSlide(n) {
        slides[currentSlide].classList.remove('active-slide');
        slides[n].classList.add('active-slide');
        currentSlide = n;
        if (currentSlide === 0) {
            yesButton.style.display = 'inline-block';
        }
        else {
            yesButton.style.display = 'inline-block';
        }
        if (currentSlide === slides.length - 1) {
            noButton.style.display = 'inline-block';
            submitButton.style.display = 'inline-block';
        }
    }

    function calcWin() {
        x = (Math.floor(Math.random() * (120 - 90)) + 90) / 100;
        win = chanceWin * 1000 * x;
    }

    function calcLoss() {
        loss = 1000 - win;

    }

    function answerNo() {
        showSlide(currentSlide + 1);
    }

    function answerYes() {
        calcWin();
        calcLoss();
        console.log(win);
        console.log(loss);
        showSlide(currentSlide + 1);
    }

    function checkAnswer(userSelected) {

        let currQuestion = questions[this.currentSlide];

        if (currQuestion.yesButton == userSelected) {
            answerYes();
        }
        else if (currQuestion.noButton == userSelected) {
            answerNo();
        }

        showScore();
    }



    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    let win = 0;
    let loss = 0;
    let chanceWin;
    let x = 0;
    let score = 0;
    /*const myQuestions = [
        {
            question: "Who invented JavaScript?",
            answers: {
                a: "Douglas Crockford",
                b: "Sheryl Sandberg",
                c: "Brendan Eich"
            },
            correctAnswer: "c"
        },
        {
            question: "Which one of these is a JavaScript package manager?",
            answers: {
                a: "Node.js",
                b: "TypeScript",
                c: "npm"
            },
            correctAnswer: "c"
        },
        {
            question: "Which tool can you use to ensure code quality?",
            answers: {
                a: "Angular",
                b: "jQuery",
                c: "RequireJS",
                d: "ESLint"
            },
            correctAnswer: "d"
        },
        {
            question: "Du har 50% chans att vinna. <br> <br> <br> Vid vinst: " + win + Array(25).fill('\xa0').join('') + " Vid förlust: "+ loss + "<br> <br> Vill du ta chansen?",
            answers: {
                a: "ja",  
                b: "nej",
            },
            correctAnswer: "a"
        }
    ];*/

    let questions = [
        {
            question: "Det finns en 95 % chans att du vinner.",
            chanceWin: 0.95
        },
        {
            question: "Det finns en 48 % chans att du vinner.",
            answers: {
                a: 'ja',
                b: 'nej',
            },
            chanceWin: 0.48
        },
        {
            question: "Det finns en 80 % chans att du vinner.",
            answers: {
                a: 'ja',
                b: 'nej',
            },
            chanceWin: 0.80
        },
        {
            question: "Det finns en 26 % chans att du vinner.",
            answers: {
                a: 'ja',
                b: 'nej',
            },
            chanceWin: 0.26
        },
        {
            question: "Det finns en 62 % chans att du vinner.",
            answers: {
                a: 'ja',
                b: 'nej',
            },
            chanceWin: 0.62
        },
        {
            question: "Det finns en 5 % chans att du vinner.",
            answers: {
                a: 'ja',
                b: 'nej',
            },
            chanceWin: 0.05
        },
        {
            question: "Det finns en 74 % chans att du vinner.",
            answers: {
                a: 'ja',
                b: 'nej',
            },
            chanceWin: 0.74
        },
        {
            question: "Det finns en 55 % chans att du vinner.",
            answers: {
                a: 'ja',
                b: 'nej',
            },
            chanceWin: 0.55
        },
        {
            question: "Det finns en 38 % chans att du vinner.",
            answers: {
                a: 'ja',
                b: 'nej',
            },
            chanceWin: 0.38
        },
        {
            question: "Det finns en 82 % chans att du vinner.",
            answers: {
                a: 'ja',
                b: 'nej',
            },
            chanceWin: 0.82
        },
        {
            question: "Det finns en 68 % chans att du vinner.",
            answers: {
                a: 'ja',
                b: 'nej',
            },
            chanceWin: 0.68
        },
        {
            question: "Det finns en 35 % chans att du vinner.",
            answers: {
                a: 'ja',
                b: 'nej',
            },
            chanceWin: 0.35
        },
        {
            question: "Det finns en 15 % chans att du vinner.",
            answers: {
                a: 'ja',
                b: 'nej',
            },
            chanceWin: 0.15
        },
        {
            question: "Det finns en 33 % chans att du vinner.",
            answers: {
                a: 'ja',
                b: 'nej',
            },
            chanceWin: 0.33
        },

    ];

  
    buildQuiz();

  
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    showSlide(currentSlide);

    // submitButton.addEventListener('click', showResults);
    yesButton.addEventListener('click', answerYes);
    noButton.addEventListener('click', answerNo);
})();