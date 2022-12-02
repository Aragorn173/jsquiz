(function () {
    const yesButton = document.getElementById("yes");
    const noButton = document.getElementById("no");
    function buildQuiz() {
        score = 0;
        const output = [];
        questions.forEach(
            (currentQuestion, questionNumber) => {

                output.push(
                    `<div class="slide">
                <div class="question"> ${currentQuestion.question} </div>
                </div>`
                );
            }
        );
        quizContainer.innerHTML = output.join('');
        kanvinna();
        showScore();
    }

    function kanvinna(){
        let kanvinnaDiv = document.getElementById('kanvinna');
        kanvinnaDiv.textContent = 'vid vinst:' + loss + Array(25).fill('\xa0').join('') + 'vid förlust:' + win;
    }

    function showScore() {
        let scoreDiv = document.getElementById('score');
        scoreDiv.textContent = 'Poäng:' + score;
    }

    function showSlide(n) {
        slides[currentSlide].classList.remove('active-slide');
        slides[n].classList.add('active-slide');
        currentSlide = n;
        calcWin();
        calcLoss();
        console.log(win);
        console.log(loss);
    }

    function calcWin() {
        x = (Math.floor(Math.random() * (110 - 90)) + 90) / 100;
        win = 0.05 * 1000 * x;
        Math.round(win);
    }

    function calcLoss() {
        loss = 1000 - win;
    }

    function answerNo() {
        showScore();
        showSlide(currentSlide + 1);
        kanvinna();
    }

    function answerYes() {
        score += win;
        showScore();
        console.log(win);
        console.log(loss);
        showSlide(currentSlide + 1);
        kanvinna();
    }



    const quizContainer = document.getElementById('quiz');
    let win = 0;
    let loss = 0;
    let chanceWin;
    let x = 0;
    let score = 0;

    let questions = [
        {
            question: "Det finns en 95 % chans att du vinner.",
            chanceWin: 0.87
        },
        {
            question: "Det finns en 48 % chans att du vinner.",
            chanceWin: 0.48
        },
        {
            question: "Det finns en 80 % chans att du vinner.",
            chanceWin: 0.80
        },
        {
            question: "Det finns en 26 % chans att du vinner.",
            chanceWin: 0.26
        },
        {
            question: "Det finns en 62 % chans att du vinner.",
            chanceWin: 0.62
        },
        {
            question: "Det finns en 5 % chans att du vinner.",
            chanceWin: 0.05
        },
        {
            question: "Det finns en 74 % chans att du vinner.",
            chanceWin: 0.74
        },
        {
            question: "Det finns en 55 % chans att du vinner.",
            chanceWin: 0.55
        },
        {
            question: "Det finns en 38 % chans att du vinner.",
            chanceWin: 0.38
        },
        {
            question: "Det finns en 82 % chans att du vinner.",
            chanceWin: 0.82
        },
        {
            question: "Det finns en 68 % chans att du vinner.",
            chanceWin: 0.68
        },
        {
            question: "Det finns en 35 % chans att du vinner.",
            chanceWin: 0.35
        },
        {
            question: "Det finns en 15 % chans att du vinner.",
            chanceWin: 0.15
        },
        {
            question: "Det finns en 33 % chans att du vinner.",
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