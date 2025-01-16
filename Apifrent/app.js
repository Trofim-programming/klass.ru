// Функция для старта квеста
function startQuest(questName) {
    if (questName === 'feb23') {
        alert('Вы начали квест на 23 февраля! Найдите все ответы на вопросы!');
    } else if (questName === 'march8') {
        alert('Вы начали квест на 8 марта! Ответьте на вопросы и получите приз!');
    }
}
// Функция для открытия модального окна
function openModal(img) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");

    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
}

// Функция для закрытия модального окна
function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

// Функция для начала квеста
function startQuest(quest) {
    if (quest === 'feb23') {
        alert("Квест на 23 февраля начинается!");
    } else if (quest === 'march8') {
        alert("Квест на 8 марта начинается!");
    }
}

// Функция для проверки ответов
function checkAnswer(question, correctAnswer) {
    const userAnswer = document.querySelector(`input[name="${question}"]:checked`);
    const response = document.getElementById(`response${question.charAt(question.length - 1)}`);

    if (!userAnswer) {
        response.textContent = "Пожалуйста, выберите ответ!";
        return;
    }

    if (userAnswer.value === correctAnswer) {
        response.textContent = "Правильно! Молодец!";
        response.style.color = "green";
    } else {
        response.textContent = "Неправильно, попробуйте снова.";
        response.style.color = "red";
    }
}

const questions = [
    {
        question: "Как называется день, когда отмечается 23 февраля?",
        options: ["День защитника Отечества", "День Победы", "День Трудового народа"],
        correct: 0
    },
    {
        question: "Какой предмет символизирует защиту в День защитника Отечества?",
        options: ["Меч", "Щит", "Кубок"],
        correct: 1
    }
];

let currentQuestionIndex = 0;

function showQuestion(index) {
    const question = questions[index];
    const questionContainer = document.getElementById('question-container');
    const answerButtons = document.getElementById('answer-buttons');

    questionContainer.innerHTML = `
        <div class="question">${question.question}</div>
        ${question.options
        .map((option, i) => {
            return `<label>
                    <input type="radio" name="question${index}" value="${i}"> ${option}
                </label><br>`;
        })
        .join('')}
    `;

    const nextButton = document.createElement('button');
    nextButton.classList.add('btn');
    nextButton.innerText = 'Ответить';
    nextButton.onclick = function() {
        checkAnswer(index);
    };

    answerButtons.innerHTML = '';
    answerButtons.appendChild(nextButton);
}

function checkAnswer(index) {
    const question = questions[index];
    const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);

    if (!selectedOption) {
        alert('Пожалуйста, выберите ответ!');
        return;
    }

    const selectedAnswer = parseInt(selectedOption.value);

    if (selectedAnswer === question.correct) {
        alert('Правильный ответ!');
    } else {
        alert('Неправильный ответ!');
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(currentQuestionIndex);
    } else {
        alert('Квест завершен! Поздравляем!');
        window.location.href = "index.html";  // Перенаправление на главную страницу
    }
}

// Инициализация первого вопроса
showQuestion(currentQuestionIndex);

const questions = [
    {
        question: "Как называется день, когда отмечается 23 февраля?",
        options: ["День защитника Отечества", "День Победы", "День Трудового народа"],
        correct: 0,
        image: "https://via.placeholder.com/600x300?text=23+Февраля" // Пример изображения
    },
    {
        question: "Какой предмет символизирует защиту в День защитника Отечества?",
        options: ["Меч", "Щит", "Кубок"],
        correct: 1,
        image: "https://via.placeholder.com/600x300?text=Щит"
    },
    {
        question: "Какое событие связано с 23 февраля в истории России?",
        options: ["Начало Второй мировой войны", "Создание Красной Армии", "Первое использование атомной бомбы"],
        correct: 1,
        image: "https://via.placeholder.com/600x300?text=Красная+Армия"
    },
    {
        question: "Какая традиция существует в День защитника Отечества?",
        options: ["Подарки для мужчин", "День тишины", "Праздничные салюты"],
        correct: 0,
        image: "https://via.placeholder.com/600x300?text=Подарки+для+мужчин"
    },
    {
        question: "Какое животное является символом мужества и силы в российской культуре?",
        options: ["Орёл", "Медведь", "Лев"],
        correct: 1,
        image: "https://via.placeholder.com/600x300?text=Медведь"
    }
];

let currentQuestionIndex = 0;

function showQuestion(index) {
    const question = questions[index];
    const questionContainer = document.getElementById('question-container');
    const answerButtons = document.getElementById('answer-buttons');

    questionContainer.innerHTML = `
        <div class="question">${question.question}</div>
        <img src="${question.image}" alt="image" />
        ${question.options
        .map((option, i) => {
            return `<label class="answer">
                    <input type="radio" name="question${index}" value="${i}"> ${option}
                </label><br>`;
        })
        .join('')}
    `;

    const nextButton = document.createElement('button');
    nextButton.classList.add('btn');
    nextButton.innerText = 'Ответить';
    nextButton.onclick = function() {
        checkAnswer(index);
    };

    answerButtons.innerHTML = '';
    answerButtons.appendChild(nextButton);
}

function checkAnswer(index) {
    const question = questions[index];
    const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);

    if (!selectedOption) {
        alert('Пожалуйста, выберите ответ!');
        return;
    }

    const selectedAnswer = parseInt(selectedOption.value);

    if (selectedAnswer === question.correct) {
        alert('Правильный ответ!');
    } else {
        alert('Неправильный ответ!');
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(currentQuestionIndex);
    } else {
        alert('Квест завершен! Поздравляем!');
        window.location.href = "index.html";  // Перенаправление на главную страницу
    }
}

// Инициализация первого вопроса
showQuestion(currentQuestionIndex);

const questions = [
    {
        question: "Как называется день, когда отмечается 23 февраля?",
        options: ["День защитника Отечества", "День Победы", "День Трудового народа"],
        correct: 0,
        image: "https://via.placeholder.com/600x300?text=23+Февраля" // Пример изображения
    },
    {
        question: "Какой предмет символизирует защиту в День защитника Отечества?",
        options: ["Меч", "Щит", "Кубок"],
        correct: 1,
        image: "https://via.placeholder.com/600x300?text=Щит"
    },
    {
        question: "Какое событие связано с 23 февраля в истории России?",
        options: ["Начало Второй мировой войны", "Создание Красной Армии", "Первое использование атомной бомбы"],
        correct: 1,
        image: "https://via.placeholder.com/600x300?text=Красная+Армия"
    },
    {
        question: "Какая традиция существует в День защитника Отечества?",
        options: ["Подарки для мужчин", "День тишины", "Праздничные салюты"],
        correct: 0,
        image: "https://via.placeholder.com/600x300?text=Подарки+для+мужчин"
    },
    {
        question: "Какое животное является символом мужества и силы в российской культуре?",
        options: ["Орёл", "Медведь", "Лев"],
        correct: 1,
        image: "https://via.placeholder.com/600x300?text=Медведь"
    }
];

let currentQuestionIndex = 0;

function showQuestion(index) {
    const question = questions[index];
    const questionContainer = document.getElementById('question-container');
    const answerButtons = document.getElementById('answer-buttons');

    questionContainer.innerHTML = `
        <div class="question">${question.question}</div>
        <img src="${question.image}" alt="image" />
        ${question.options
        .map((option, i) => {
            return `<label class="answer">
                    <input type="radio" name="question${index}" value="${i}"> ${option}
                </label><br>`;
        })
        .join('')}
    `;

    const nextButton = document.createElement('button');
    nextButton.classList.add('btn');
    nextButton.innerText = 'Ответить';
    nextButton.onclick = function() {
        checkAnswer(index);
    };

    answerButtons.innerHTML = '';
    answerButtons.appendChild(nextButton);
}

function checkAnswer(index) {
    const question = questions[index];
    const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);

    if (!selectedOption) {
        alert('Пожалуйста, выберите ответ!');
        return;
    }

    const selectedAnswer = parseInt(selectedOption.value);

    if (selectedAnswer === question.correct) {
        alert('Правильный ответ!');
    } else {
        alert('Неправильный ответ!');
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(currentQuestionIndex);
    } else {
        alert('Квест завершен! Поздравляем!');
        window.location.href = "index.html";  // Перенаправление на главную страницу
    }
}

// Инициализация первого вопроса
showQuestion(currentQuestionIndex);

