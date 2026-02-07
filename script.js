
// ========== VOCABULARY DATA ==========
const vocabulary = {
    jp: {
        basics: [
            { word: "はい", romanji: "Hai", translation: "Yes", example: "はい、そうです" },
            { word: "いいえ", romanji: "Iie", translation: "No", example: "いいえ、違います" },
            { word: "ありがとう", romanji: "Arigatou", translation: "Thank you", example: "ありがとうございます" },
            { word: "すみません", romanji: "Sumimasen", translation: "Excuse me", example: "すみません、質問があります" },
            { word: "お願いします", romanji: "Onegaishimasu", translation: "Please", example: "水をお願いします" },
            { word: "大丈夫", romanji: "Daijoubu", translation: "It's okay", example: "大丈夫ですか？" }
        ],
        greetings: [
            { word: "こんにちは", romanji: "Konnichiwa", translation: "Hello", example: "こんにちは、元気ですか？" },
            { word: "おはよう", romanji: "Ohayou", translation: "Good morning", example: "おはようございます" },
            { word: "こんばんは", romanji: "Konbanwa", translation: "Good evening", example: "こんばんは" },
            { word: "さようなら", romanji: "Sayounara", translation: "Goodbye", example: "さようなら、また明日" },
            { word: "おやすみ", romanji: "Oyasumi", translation: "Good night", example: "おやすみなさい" },
            { word: "またね", romanji: "Mata ne", translation: "See you", example: "じゃあ、またね！" }
        ],
        numbers: [
            { word: "一", romanji: "Ichi", translation: "One", example: "一つください" },
            { word: "二", romanji: "Ni", translation: "Two", example: "二人です" },
            { word: "三", romanji: "San", translation: "Three", example: "三時です" },
            { word: "四", romanji: "Yon", translation: "Four", example: "四月" },
            { word: "五", romanji: "Go", translation: "Five", example: "五分" },
            { word: "十", romanji: "Juu", translation: "Ten", example: "十円" }
        ],
        food: [
            { word: "水", romanji: "Mizu", translation: "Water", example: "水をください" },
            { word: "ご飯", romanji: "Gohan", translation: "Rice", example: "ご飯を食べる" },
            { word: "魚", romanji: "Sakana", translation: "Fish", example: "魚が好きです" },
            { word: "肉", romanji: "Niku", translation: "Meat", example: "肉料理" },
            { word: "お茶", romanji: "Ocha", translation: "Tea", example: "お茶を飲む" },
            { word: "寿司", romanji: "Sushi", translation: "Sushi", example: "寿司を食べたい" }
        ],
        colors: [
            { word: "赤", romanji: "Aka", translation: "Red", example: "赤い花" },
            { word: "青", romanji: "Ao", translation: "Blue", example: "青い空" },
            { word: "黄色", romanji: "Kiiro", translation: "Yellow", example: "黄色い車" },
            { word: "緑", romanji: "Midori", translation: "Green", example: "緑の葉" },
            { word: "白", romanji: "Shiro", translation: "White", example: "白い雪" },
            { word: "黒", romanji: "Kuro", translation: "Black", example: "黒い猫" }
        ],
        animals: [
            { word: "犬", romanji: "Inu", translation: "Dog", example: "犬が好きです" },
            { word: "猫", romanji: "Neko", translation: "Cat", example: "猫を飼っています" },
            { word: "鳥", romanji: "Tori", translation: "Bird", example: "鳥が飛ぶ" },
            { word: "馬", romanji: "Uma", translation: "Horse", example: "馬に乗る" },
            { word: "牛", romanji: "Ushi", translation: "Cow", example: "牛乳" },
            { word: "兎", romanji: "Usagi", translation: "Rabbit", example: "白い兎" }
        ]
    },
    fr: {
        basics: [
            { word: "Oui", romanji: "", translation: "Yes", example: "Oui, c'est vrai" },
            { word: "Non", romanji: "", translation: "No", example: "Non, merci" },
            { word: "Merci", romanji: "", translation: "Thank you", example: "Merci beaucoup" },
            { word: "Pardon", romanji: "", translation: "Sorry", example: "Pardon, excusez-moi" },
            { word: "S'il vous plaît", romanji: "", translation: "Please", example: "Un café, s'il vous plaît" },
            { word: "D'accord", romanji: "", translation: "Okay", example: "D'accord, pas de problème" }
        ],
        greetings: [
            { word: "Bonjour", romanji: "", translation: "Hello", example: "Bonjour, comment allez-vous?" },
            { word: "Bonsoir", romanji: "", translation: "Good evening", example: "Bonsoir, madame" },
            { word: "Bonne nuit", romanji: "", translation: "Good night", example: "Bonne nuit" },
            { word: "Au revoir", romanji: "", translation: "Goodbye", example: "Au revoir!" },
            { word: "Salut", romanji: "", translation: "Hi/Bye", example: "Salut, ça va?" },
            { word: "À bientôt", romanji: "", translation: "See you soon", example: "À bientôt!" }
        ],
        numbers: [
            { word: "Un", romanji: "", translation: "One", example: "Un café" },
            { word: "Deux", romanji: "", translation: "Two", example: "Deux personnes" },
            { word: "Trois", romanji: "", translation: "Three", example: "Trois heures" },
            { word: "Quatre", romanji: "", translation: "Four", example: "Quatre saisons" },
            { word: "Cinq", romanji: "", translation: "Five", example: "Cinq minutes" },
            { word: "Dix", romanji: "", translation: "Ten", example: "Dix euros" }
        ],
        food: [
            { word: "Eau", romanji: "", translation: "Water", example: "De l'eau" },
            { word: "Pain", romanji: "", translation: "Bread", example: "Du pain frais" },
            { word: "Fromage", romanji: "", translation: "Cheese", example: "Le fromage" },
            { word: "Viande", romanji: "", translation: "Meat", example: "De la viande" },
            { word: "Café", romanji: "", translation: "Coffee", example: "Un café noir" },
            { word: "Vin", romanji: "", translation: "Wine", example: "Un verre de vin" }
        ],
        colors: [
            { word: "Rouge", romanji: "", translation: "Red", example: "La rose rouge" },
            { word: "Bleu", romanji: "", translation: "Blue", example: "Le ciel bleu" },
            { word: "Jaune", romanji: "", translation: "Yellow", example: "Le soleil jaune" },
            { word: "Vert", romanji: "", translation: "Green", example: "L'herbe verte" },
            { word: "Blanc", romanji: "", translation: "White", example: "La neige blanche" },
            { word: "Noir", romanji: "", translation: "Black", example: "Le chat noir" }
        ],
        animals: [
            { word: "Chien", romanji: "", translation: "Dog", example: "Mon chien" },
            { word: "Chat", romanji: "", translation: "Cat", example: "Le chat dort" },
            { word: "Oiseau", romanji: "", translation: "Bird", example: "L'oiseau chante" },
            { word: "Cheval", romanji: "", translation: "Horse", example: "Le cheval" },
            { word: "Vache", romanji: "", translation: "Cow", example: "La vache" },
            { word: "Lapin", romanji: "", translation: "Rabbit", example: "Le lapin blanc" }
        ]
    }
};

// ========== STATE ==========
const state = {
    language: 'jp',
    category: 'basics',
    cardIndex: 0,
    xp: 0,
    streak: 1,
    wordsLearned: 0
};

let gameState = {};
let currentGame = null;
let recognition = null;
let currentSpeakingWord = null;

// ========== HELPERS ==========
function $(id) {
    return document.getElementById(id);
}

function shuffle(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function getVocab() {
    return vocabulary[state.language][state.category] || [];
}

function speak(text, lang) {
    if ('speechSynthesis' in window) {
        speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = lang === 'jp' ? 'ja-JP' : 'fr-FR';
        utterance.rate = 0.8;
        speechSynthesis.speak(utterance);
    }
}

function showToast(message, type, icon) {
    const container = $('toastContainer');
    const toast = document.createElement('div');
    toast.className = 'toast ' + (type || '');
    toast.innerHTML = '<span class="toast-icon">' + (icon || '✅') + '</span><span class="toast-text">' + message + '</span>';
    container.appendChild(toast);
    setTimeout(function () { toast.remove(); }, 3000);
}

function addXP(amount) {
    state.xp += amount;
    $('xpCount').textContent = state.xp;
    showToast('+' + amount + ' XP earned!', 'success', '⭐');
}

function createConfetti() {
    const colors = ['#6366f1', '#ec4899', '#10b981', '#f59e0b', '#ef4444'];
    for (let i = 0; i < 30; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
        confetti.style.animationDelay = Math.random() * 0.5 + 's';
        document.body.appendChild(confetti);
        setTimeout(function () { confetti.remove(); }, 4000);
    }
}

function updateStats() {
    $('xpCount').textContent = state.xp;
    $('streakCount').textContent = state.streak;
    $('wordsLearned').textContent = state.wordsLearned;
}

// ========== NAVIGATION ==========
function navigateTo(page) {
    document.querySelectorAll('.page').forEach(function (p) {
        p.classList.remove('active');
    });
    document.querySelectorAll('.nav-btn').forEach(function (btn) {
        btn.classList.remove('active');
    });

    var pageEl = $('page-' + page);
    if (pageEl) {
        pageEl.classList.add('active');
    }

    document.querySelectorAll('.nav-btn').forEach(function (btn) {
        if (btn.getAttribute('data-page') === page) {
            btn.classList.add('active');
        }
    });

    if (page === 'flashcards') {
        updateCard();
    }
    if (page === 'speaking') {
        loadSpeakingWord();
    }
}

// ========== FLASHCARDS ==========
function buildCategorySelector() {
    var categories = Object.keys(vocabulary[state.language]);
    var html = '';
    categories.forEach(function (cat, i) {
        var activeClass = i === 0 ? ' active' : '';
        var name = cat.charAt(0).toUpperCase() + cat.slice(1);
        html += '<button class="category-btn' + activeClass + '" data-category="' + cat + '">' + name + '</button>';
    });
    $('categorySelector').innerHTML = html;

    document.querySelectorAll('.category-btn').forEach(function (btn) {
        btn.addEventListener('click', function () {
            document.querySelectorAll('.category-btn').forEach(function (b) {
                b.classList.remove('active');
            });
            btn.classList.add('active');
            state.category = btn.getAttribute('data-category');
            state.cardIndex = 0;
            updateCard();
        });
    });
}

function updateCard() {
    var vocab = getVocab();
    if (vocab.length === 0) return;

    var card = vocab[state.cardIndex];
    $('cardWord').textContent = card.word;
    $('cardRomanji').textContent = card.romanji || '';
    $('cardRomanji').style.display = card.romanji ? 'block' : 'none';
    $('cardTranslation').textContent = card.translation;
    $('cardExample').textContent = card.example;

    $('flashcard').classList.remove('flipped');
    $('currentCard').textContent = state.cardIndex + 1;
    $('totalCards').textContent = vocab.length;
    $('cardProgressFill').style.width = ((state.cardIndex + 1) / vocab.length * 100) + '%';
}

function nextCard(known) {
    var vocab = getVocab();

    if (known) {
        state.wordsLearned++;
        addXP(10);
        updateStats();
    }

    state.cardIndex++;
    if (state.cardIndex >= vocab.length) {
        state.cardIndex = 0;
        showToast('🎉 All cards completed! Starting over...', 'success', '🔄');
        createConfetti();
    }

    $('flashcard').classList.remove('flipped');
    setTimeout(updateCard, 300);
}

// ========== SPEAKING ==========
function initSpeechRecognition() {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
        var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;

        recognition.onresult = function (event) {
            var result = event.results[0][0].transcript;
            checkPronunciation(result);
        };

        recognition.onend = function () {
            $('micBtn').classList.remove('recording');
            $('micHint').textContent = 'Click to start speaking';
        };

        recognition.onerror = function (event) {
            console.error('Speech error:', event.error);
            $('micBtn').classList.remove('recording');
            $('micHint').textContent = 'Error. Try again.';
        };
    }
}

function loadSpeakingWord() {
    var vocab = getVocab();
    if (vocab.length === 0) return;

    currentSpeakingWord = vocab[Math.floor(Math.random() * vocab.length)];
    $('speakingWord').textContent = currentSpeakingWord.word;
    $('speakingTranslation').textContent = currentSpeakingWord.translation;
    $('resultDisplay').style.display = 'none';

    if (recognition) {
        recognition.lang = state.language === 'jp' ? 'ja-JP' : 'fr-FR';
    }
}

function checkPronunciation(spoken) {
    var target = currentSpeakingWord.word.toLowerCase();
    var spokenLower = spoken.toLowerCase();

    $('resultDisplay').style.display = 'block';
    $('resultText').textContent = spoken;

    var feedback = $('resultFeedback');
    if (spokenLower.includes(target) || target.includes(spokenLower) || spokenLower === target) {
        feedback.className = 'result-feedback correct';
        feedback.textContent = '✅ Excellent pronunciation!';
        addXP(20);
    } else {
        feedback.className = 'result-feedback incorrect';
        feedback.textContent = '❌ Try again!';
    }
}

// ========== GAMES ==========
function showGame(gameName) {
    $('gamesGrid').style.display = 'none';
    document.querySelectorAll('.game-area').forEach(function (g) {
        g.style.display = 'none';
        g.classList.remove('active');
    });

    var gameEl = $('game-' + gameName);
    if (gameEl) {
        gameEl.style.display = 'block';
        gameEl.classList.add('active');
    }

    currentGame = gameName;
    initGame(gameName);
}

function hideGame() {
    document.querySelectorAll('.game-area').forEach(function (g) {
        g.style.display = 'none';
        g.classList.remove('active');
    });
    $('gamesGrid').style.display = 'grid';
    currentGame = null;
}

function initGame(game) {
    var vocab = shuffle(getVocab()).slice(0, 8);

    switch (game) {
        case 'quiz':
            gameState = { score: 0, question: 1, total: 10 };
            loadQuizQuestion();
            break;
        case 'memory':
            initMemoryGame(vocab.slice(0, 6));
            break;
        case 'matching':
            initMatchingGame(vocab.slice(0, 5));
            break;
        case 'scramble':
            gameState = { score: 0, round: 1, vocab: vocab, total: 5 };
            loadScrambleWord();
            break;
    }
}

// Quiz Game
function loadQuizQuestion() {
    if (gameState.question > gameState.total) {
        showGameComplete(gameState.score * 10);
        return;
    }

    var vocab = getVocab();
    var correct = vocab[Math.floor(Math.random() * vocab.length)];
    var wrongAnswers = shuffle(vocab.filter(function (v) { return v !== correct; })).slice(0, 3);
    var options = shuffle([correct.translation].concat(wrongAnswers.map(function (v) { return v.translation; })));

    $('quizWord').textContent = correct.word;
    $('quizScore').textContent = gameState.score;
    $('quizQuestion').textContent = gameState.question;

    var html = '';
    options.forEach(function (opt) {
        html += '<button class="quiz-option" data-answer="' + opt + '" data-correct="' + correct.translation + '">' + opt + '</button>';
    });
    $('quizOptions').innerHTML = html;

    document.querySelectorAll('.quiz-option').forEach(function (btn) {
        btn.addEventListener('click', function () {
            handleQuizAnswer(btn);
        });
    });
}

function handleQuizAnswer(btn) {
    var isCorrect = btn.getAttribute('data-answer') === btn.getAttribute('data-correct');
    var correctAnswer = btn.getAttribute('data-correct');

    document.querySelectorAll('.quiz-option').forEach(function (b) {
        b.disabled = true;
        if (b.getAttribute('data-answer') === correctAnswer) {
            b.classList.add('correct');
        } else if (b === btn && !isCorrect) {
            b.classList.add('wrong');
        }
    });

    if (isCorrect) {
        gameState.score++;
        showToast('Correct! 🎉', 'success', '✅');
    } else {
        showToast('Wrong! Answer: ' + correctAnswer, 'error', '❌');
    }

    gameState.question++;
    setTimeout(loadQuizQuestion, 1500);
}

// Memory Game
function initMemoryGame(vocab) {
    gameState = { moves: 0, matched: 0, flipped: [], total: vocab.length };

    var cards = shuffle(
        vocab.map(function (v, i) { return { id: i, type: 'word', value: v.word }; }).concat(
            vocab.map(function (v, i) { return { id: i, type: 'trans', value: v.translation }; }))
    );

    var html = '';
    cards.forEach(function (card, idx) {
        html += '<div class="memory-card" data-idx="' + idx + '" data-id="' + card.id + '">?</div>';
    });
    $('memoryGrid').innerHTML = html;

    document.querySelectorAll('.memory-card').forEach(function (card, idx) {
        card.addEventListener('click', function () {
            handleMemoryClick(card, cards, idx);
        });
    });

    $('memoryMoves').textContent = '0';
}

function handleMemoryClick(card, cards, idx) {
    if (card.classList.contains('flipped') || card.classList.contains('matched') || gameState.flipped.length >= 2) return;

    var cardData = cards[idx];
    card.textContent = cardData.value;
    card.classList.add('flipped');
    gameState.flipped.push({ card: card, data: cardData });

    if (gameState.flipped.length === 2) {
        gameState.moves++;
        $('memoryMoves').textContent = gameState.moves;

        var first = gameState.flipped[0];
        var second = gameState.flipped[1];

        if (first.data.id === second.data.id && first.data.type !== second.data.type) {
            first.card.classList.add('matched');
            second.card.classList.add('matched');
            gameState.matched++;

            if (gameState.matched === gameState.total) {
                setTimeout(function () {
                    showGameComplete(Math.max(10, 100 - gameState.moves * 3));
                }, 500);
            }
        } else {
            setTimeout(function () {
                first.card.classList.remove('flipped');
                second.card.classList.remove('flipped');
                first.card.textContent = '?';
                second.card.textContent = '?';
            }, 1000);
        }
        gameState.flipped = [];
    }
}

// Matching Game
function initMatchingGame(vocab) {
    gameState = { score: 0, selected: null, total: vocab.length };

    var words = shuffle(vocab);
    var translations = shuffle(vocab);

    var wordsHtml = '';
    words.forEach(function (v) {
        wordsHtml += '<div class="matching-item" data-word="' + v.word + '" data-translation="' + v.translation + '">' + v.word + '</div>';
    });
    $('matchingWords').innerHTML = wordsHtml;

    var transHtml = '';
    translations.forEach(function (v) {
        transHtml += '<div class="matching-item" data-word="' + v.word + '" data-translation="' + v.translation + '">' + v.translation + '</div>';
    });
    $('matchingTranslations').innerHTML = transHtml;

    $('matchingScore').textContent = '0';

    document.querySelectorAll('#matchingWords .matching-item, #matchingTranslations .matching-item').forEach(function (item) {
        item.addEventListener('click', function () {
            handleMatchingClick(item);
        });
    });
}

function handleMatchingClick(item) {
    if (item.classList.contains('matched')) return;

    if (!gameState.selected) {
        gameState.selected = item;
        item.classList.add('selected');
    } else {
        var first = gameState.selected;
        var second = item;

        first.classList.remove('selected');

        if (first.getAttribute('data-word') === second.getAttribute('data-word') && first !== second) {
            first.classList.add('matched');
            second.classList.add('matched');
            gameState.score++;
            $('matchingScore').textContent = gameState.score;

            if (gameState.score === gameState.total) {
                setTimeout(function () {
                    showGameComplete(gameState.score * 20);
                }, 500);
            }
        } else {
            first.classList.add('wrong');
            second.classList.add('wrong');
            setTimeout(function () {
                first.classList.remove('wrong');
                second.classList.remove('wrong');
            }, 500);
        }

        gameState.selected = null;
    }
}

// Scramble Game
function loadScrambleWord() {
    if (gameState.round > gameState.total) {
        showGameComplete(gameState.score * 20);
        return;
    }

    var word = gameState.vocab[(gameState.round - 1) % gameState.vocab.length];
    var scrambled = shuffle(word.translation.toUpperCase().split('')).join('');

    gameState.currentAnswer = word.translation.toUpperCase();
    $('scrambleWord').textContent = scrambled;
    $('scrambleHint').textContent = 'Hint: ' + word.word;
    $('scrambleInput').value = '';
    $('scrambleScore').textContent = gameState.score;
    $('scrambleRound').textContent = gameState.round;
}

function checkScrambleAnswer() {
    var answer = $('scrambleInput').value.toUpperCase().trim();

    if (answer === gameState.currentAnswer) {
        gameState.score++;
        showToast('Correct! 🎉', 'success', '✅');
    } else {
        showToast('Wrong! Answer: ' + gameState.currentAnswer, 'error', '❌');
    }

    gameState.round++;
    setTimeout(loadScrambleWord, 1000);
}

// Game Complete
function showGameComplete(score) {
    createConfetti();
    var xpEarned = Math.round(score / 2);
    addXP(xpEarned);

    $('completeScore').textContent = score;
    $('completeXP').textContent = '+' + xpEarned;

    document.querySelectorAll('.game-area').forEach(function (g) {
        g.style.display = 'none';
    });
    $('game-complete').style.display = 'block';
}

// ========== INIT ==========
document.addEventListener('DOMContentLoaded', function () {
    updateStats();
    buildCategorySelector();
    updateCard();
    loadSpeakingWord();
    initSpeechRecognition();

    // Navigation
    document.querySelectorAll('.nav-btn').forEach(function (btn) {
        btn.addEventListener('click', function () {
            navigateTo(btn.getAttribute('data-page'));
        });
    });

    // Feature cards
    document.querySelectorAll('.feature-card').forEach(function (card) {
        card.addEventListener('click', function () {
            var page = card.getAttribute('data-goto');
            if (page) navigateTo(page);
        });
    });

    // Language selector
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
        btn.addEventListener('click', function () {
            document.querySelectorAll('.lang-btn').forEach(function (b) {
                b.classList.remove('active');
            });
            btn.classList.add('active');
            state.language = btn.getAttribute('data-lang');
            state.cardIndex = 0;
            buildCategorySelector();
            updateCard();
            loadSpeakingWord();
        });
    });

    // Flashcard flip
    $('flashcard').addEventListener('click', function (e) {
        if (e.target.classList.contains('speak-btn')) return;
        $('flashcard').classList.toggle('flipped');
    });

    // Speak buttons
    $('speakFront').addEventListener('click', function (e) {
        e.stopPropagation();
        var vocab = getVocab();
        speak(vocab[state.cardIndex].word, state.language);
    });

    $('speakBack').addEventListener('click', function (e) {
        e.stopPropagation();
        var vocab = getVocab();
        speak(vocab[state.cardIndex].translation, 'en');
    });

    // Card controls
    $('knowBtn').addEventListener('click', function () { nextCard(true); });
    $('dontKnowBtn').addEventListener('click', function () { nextCard(false); });
    $('skipBtn').addEventListener('click', function () { nextCard(false); });

    // Speaking
    $('listenBtn').addEventListener('click', function () {
        if (currentSpeakingWord) {
            speak(currentSpeakingWord.word, state.language);
        }
    });

    $('micBtn').addEventListener('click', function () {
        if (recognition) {
            if ($('micBtn').classList.contains('recording')) {
                recognition.stop();
            } else {
                $('micBtn').classList.add('recording');
                $('micHint').textContent = 'Listening...';
                recognition.start();
            }
        } else {
            showToast('Speech recognition not supported in this browser', 'error', '❌');
        }
    });

    $('nextSpeakBtn').addEventListener('click', loadSpeakingWord);

    // Games
    document.querySelectorAll('.game-card').forEach(function (card) {
        card.addEventListener('click', function () {
            showGame(card.getAttribute('data-game'));
        });
    });

    $('scrambleSubmit').addEventListener('click', checkScrambleAnswer);
    $('scrambleInput').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') checkScrambleAnswer();
    });

    $('playAgainBtn').addEventListener('click', function () {
        $('game-complete').style.display = 'none';
        if (currentGame) showGame(currentGame);
    });
});
