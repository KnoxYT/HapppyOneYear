document.addEventListener('DOMContentLoaded', function() {
    const noButtons = document.querySelectorAll('.no');
    const nextButtons = document.querySelectorAll('.next');
    const yesButtons = document.querySelectorAll('.yes');
    const initialSection = document.querySelector('.initial');
    const gifSections = document.querySelectorAll('.gif-section');
    const questionSections = document.querySelectorAll('.question-section, .question');
    const finalMessage = document.querySelector('.final-message');
    let currentGifIndex = 0;
    let currentQuestionIndex = 0;

    function showNextGif() {
        if (currentGifIndex < gifSections.length - 1) {
            gifSections[currentGifIndex].classList.add('hidden');
            currentGifIndex++;
            gifSections[currentGifIndex].classList.remove('hidden');
        } else {
            gifSections[currentGifIndex].classList.add('hidden');
            questionSections[0].classList.remove('hidden');
        }
    }

    function showNextQuestion() {
        if (currentQuestionIndex < questionSections.length - 1) {
            questionSections[currentQuestionIndex].classList.add('hidden');
            currentQuestionIndex++;
            questionSections[currentQuestionIndex].classList.remove('hidden');
        } else {
            questionSections[currentQuestionIndex].classList.add('hidden');
            finalMessage.classList.remove('hidden');
        }
    }

    noButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('No is not an option! 😊');
            const fingerEmoji = '👉';
            button.textContent = fingerEmoji.repeat(5) + ' Yes';
        });
    });

    document.getElementById('thankYou').addEventListener('click', function() {
        initialSection.classList.add('hidden');
        gifSections[0].classList.remove('hidden');
    });

    nextButtons.forEach(button => {
        button.addEventListener('click', showNextGif);
    });

    yesButtons.forEach(button => {
        button.addEventListener('click', showNextQuestion);
    });
});