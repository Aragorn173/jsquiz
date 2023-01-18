

function sendResult(url) {
    if (!url) return;
    fetch(url, {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(answerObject),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success!');
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}


let answerObject = {

    points: [],
    chancewin: [],
    answers: [],
    correctanswers: [],
    outcome: []

};






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
        randomSlide();
        showfråga();
        calcWin();
        calcLoss();
        kanvinna();
        anta();
        showScore();
    }

    function kanvinna() {
        let kanvinnaDiv = document.getElementById('kanvinna');
        kanvinnaDiv.textContent = 'vid vinst: +' + loss + Array(25).fill('\xa0').join('') + 'vid förlust: -' + win;
    }

    function showScore() {
        let scoreDiv = document.getElementById('score');
        scoreDiv.textContent = 'Poäng:' + score;
    }

    function showfråga() {
        let frågaDiv = document.getElementById('fråga');
        frågaDiv.textContent = 'Fråga: ' + fråga + '/25';
    }

    function anta() {
        let antaDiv = document.getElementById('anta');
        antaDiv.textContent = 'Antar du vadet?';
    }

    function showSlide(n) {
        slides[n].classList.remove('active-slide');

        randomSlide();
        //currentSlide = Math.floor(Math.random() * questions.length);
        if (fråga < 26) {
            slides[currentSlide].classList.add('active-slide');
        }
        calcWin();
        calcLoss();
        kanvinna();
        anta();
        showfråga();

        i++;
        fråga++;
        answerObject.points.push(score);
        end();

        answerObject.chancewin.push(chancewin);
        if (x < 1) {
            answerObject.correctanswers.push(1);
        } else if (x > 1) {
            answerObject.correctanswers.push(0);
        } else {
            answerObject.correctanswers.push(2);
        }
        console.log(answerObject);
    }

    function randomSlide() {
        currentSlide = Math.floor(Math.random() * questions.length);
        
        for(z = 0; z < doneQuestion.length; ) {
            if (currentSlide == doneQuestion[z]) {
                z++;
            } else {
                doneQuestion[z] = currentSlide;
            }
            
        }

        console.log(currentSlide);
        console.log(questions[currentSlide]);
        

        return currentSlide;
    }

    function calcWin() {
        chancewin = questions[currentSlide].chanceWin
        x = (Math.floor(Math.random() * (110 - 90)) + 90) / 100;
        win = chancewin * 1000 * x;
        win = Math.round(win);
    }

    function calcLoss() {
        loss = 1000 - win;
    }

    function takeChance() {
        y = Math.random();
        if (y < chancewin) {
            score += loss;
        } else {
            score -= win;
        }
    }

    function answerNo() {
        answerObject.answers.push(0);
        answerObject.outcome.push(2);

        showScore();
        showSlide(currentSlide);

    }

    function answerYes() {
        answerObject.answers.push(1);
        takeChance();
        if (y < chancewin) {
            answerObject.outcome.push(1);
        } else {
            answerObject.outcome.push(0);
        }
        showScore();
        showSlide(currentSlide);
    }

    function end() {
        if (fråga > 26) {
            yesButton.style.display = 'none';
            noButton.style.display = 'none';
            this.kanvinna.style.display = 'none';
            this.anta.style.display = 'none';
            endDiv = document.getElementById('end');
            endDiv.textContent = 'Tack för att du spelade!';
            sendResult('https://foregoing-marble-marscapone.glitch.me/');
        }
    }



    const quizContainer = document.getElementById('quiz');
    let win = 0;
    let loss = 0;
    let i = 0;
    let chancewin = 0;
    let x = 0;
    let y = 0;
    let score = 0;
    let fråga = 1;
    let currentSlide = 0;
    const doneQuestion = [];


    const questions = [
        {
            question: "Det finns en 87 % chans att du vinner.",
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
        {
            question: "Det finns en 23 % chans att du vinner.",
            chanceWin: 0.23
        },
        {
            question: "Det finns en 76 % chans att du vinner.",
            chanceWin: 0.76
        },
        {
            question: "Det finns en 30 % chans att du vinner.",
            chanceWin: 0.30
        },
        {
            question: "Det finns en 10 % chans att du vinner.",
            chanceWin: 0.10
        },
        {
            question: "Det finns en 41 % chans att du vinner.",
            chanceWin: 0.41
        },
        {
            question: "Det finns en 37 % chans att du vinner.",
            chanceWin: 0.37
        },
        {
            question: "Det finns en 77 % chans att du vinner.",
            chanceWin: 0.77
        },
        {
            question: "Det finns en 14 % chans att du vinner.",
            chanceWin: 0.14
        },
        {
            question: "Det finns en 61 % chans att du vinner.",
            chanceWin: 0.61
        },
        {
            question: "Det finns en 51 % chans att du vinner.",
            chanceWin: 0.51
        },
        {
            question: "Det finns en 18 % chans att du vinner.",
            chanceWin: 0.18
        },
       
    ];


    buildQuiz();


    const slides = document.querySelectorAll(".slide");

    showSlide(currentSlide);

    yesButton.addEventListener('click', answerYes);
    noButton.addEventListener('click', answerNo);
})();