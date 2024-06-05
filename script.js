document.addEventListener('DOMContentLoaded', function() {
    const noButtons = document.querySelectorAll('.no');
    const nextButtons = document.querySelectorAll('.next');
    const yesButtons = document.querySelectorAll('.yes');
    const initialSection = document.querySelector('.initial');
    const gifSections = document.querySelectorAll('.gif-section');
    const questionSections = document.querySelectorAll('.question-section, .question');
    const responseSections = document.querySelectorAll('.response');
    const finalMessage = document.querySelector('.final-message');
    const fingerCircle = document.getElementById('fingerCircle');
    let currentGifIndex = 0;
    let currentQuestionIndex = 0;
    let currentResponseIndex = 0;

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
        } else if (currentResponseIndex < responseSections.length) {
            questionSections[currentQuestionIndex].classList.add('hidden');
            response