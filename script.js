const config = window.VALENTINE_CONFIG;

// Validate configuration
function validateConfig() {
    // (Existing validation logic - kept simple for brevity)
    if (!config.valentineName) config.valentineName = "My Love";
}

document.title = config.pageTitle;

window.addEventListener('DOMContentLoaded', () => {
    validateConfig();
    document.getElementById('valentineTitle').textContent = config.pageTitle;

    // --- 1. Question 1 ---
    if (config.questions.first) {
        document.getElementById('question1Text').textContent = config.questions.first.text;
        document.getElementById('yesBtn1').textContent = config.questions.first.yesBtn;
        document.getElementById('noBtn1').textContent = config.questions.first.noBtn;
    }

    // --- 2. Question 2 ---
    if (config.questions.second) {
        document.getElementById('question2Text').textContent = config.questions.second.text;
        document.getElementById('yesBtn2').textContent = config.questions.second.yesBtn;
        document.getElementById('noBtn2').textContent = config.questions.second.noBtn;
    }

    // --- 3. Question 3 (UPDATED: Buttons now) ---
    if (config.questions.third) {
        document.getElementById('question3Text').textContent = config.questions.third.text;
        // Mapping "startText" (Meroooon) to the Yes Button
        document.getElementById('yesBtn3').textContent = config.questions.third.startText;
        // Mapping "nextBtn" (baka umuwi agad) to the No Button
        document.getElementById('noBtn3').textContent = config.questions.third.nextBtn;
        
        if (document.getElementById('secretAnswerBtn') && config.questions.third.secretAnswer) {
            document.getElementById('secretAnswerBtn').textContent = config.questions.third.secretAnswer;
        }
    }

    // --- 4. Question 4 ---
    if (config.questions.fourth) {
        document.getElementById('question4Text').textContent = config.questions.fourth.text;
        document.getElementById('yesBtn4').textContent = config.questions.fourth.yesBtn;
        document.getElementById('noBtn4').textContent = config.questions.fourth.noBtn;
    }

    // --- 5. Question 5 ---
    if (config.questions.fifth) {
        document.getElementById('question5Text').textContent = config.questions.fifth.text;
        document.getElementById('yesBtn5').textContent = config.questions.fifth.yesBtn;
        document.getElementById('noBtn5').textContent = config.questions.fifth.noBtn;
    }

    createFloatingElements();
    setupMusicPlayer();
});

// --- NAVIGATION ---
function showNextQuestion(nextId) {
    document.querySelectorAll('.question-section').forEach(q => q.classList.add('hidden'));
    const nextQuestion = document.getElementById('question' + nextId);
    if (nextQuestion) nextQuestion.classList.remove('hidden');
}

function showLoveMeter() {
    document.querySelectorAll('.question-section').forEach(q => q.classList.add('hidden'));
    document.getElementById('loveMeterSection').classList.remove('hidden');
}

function showSecretDate() {
    alert("Date Treat Unlocked! 📅💖\nSee you after exams!");
    showNextQuestion(4);
}

function moveButton(button) {
    const x = Math.random() * (window.innerWidth - button.offsetWidth);
    const y = Math.random() * (window.innerHeight - button.offsetHeight);
    button.style.position = 'fixed';
    button.style.left = x + 'px';
    button.style.top = y + 'px';
}

// --- LOVE METER LOGIC ---
const loveMeter = document.getElementById('loveMeter');
const loveValue = document.getElementById('loveValue');
const extraLove = document.getElementById('extraLove');

function setInitialPosition() {
    if (!loveMeter) return;
    loveMeter.value = 100;
    loveValue.textContent = 100;
    loveMeter.style.width = '100%';
}

if (loveMeter) {
    loveMeter.addEventListener('input', () => {
        const value = parseInt(loveMeter.value);
        loveValue.textContent = value;
        
        if (value > 100) {
            extraLove.classList.remove('hidden');
            const overflowPercentage = (value - 100) / 9900;
            const extraWidth = overflowPercentage * window.innerWidth * 0.8;
            loveMeter.style.width = `calc(100% + ${extraWidth}px)`;
            loveMeter.style.transition = 'width 0.3s';
            
            if (value >= 5000) {
                extraLove.classList.add('super-love');
                extraLove.textContent = config.loveMessages.extreme;
            } else if (value > 1000) {
                extraLove.classList.remove('super-love');
                extraLove.textContent = config.loveMessages.high;
            } else {
                extraLove.classList.remove('super-love');
                extraLove.textContent = config.loveMessages.normal;
            }
        } else {
            extraLove.classList.add('hidden');
            extraLove.classList.remove('super-love');
            loveMeter.style.width = '100%';
        }
    });
}

// --- CELEBRATION & EXTRAS ---
function celebrate() {
    document.querySelectorAll('.question-section').forEach(q => q.classList.add('hidden'));
    const celebration = document.getElementById('celebration');
    celebration.classList.remove('hidden');
    
    document.getElementById('celebrationTitle').textContent = config.celebration.title;
    document.getElementById('celebrationMessage').textContent = config.celebration.message;
    document.getElementById('celebrationEmojis').textContent = config.celebration.emojis;
    
    createHeartExplosion();
}

function createFloatingElements() {
    const container = document.querySelector('.floating-elements');
    config.floatingEmojis.hearts.forEach(heart => {
        const div = document.createElement('div');
        div.className = 'heart';
        div.innerHTML = heart;
        setRandomPosition(div);
        container.appendChild(div);
    });
}

function setRandomPosition(element) {
    element.style.left = Math.random() * 100 + 'vw';
    element.style.animationDelay = Math.random() * 5 + 's';
    element.style.animationDuration = 10 + Math.random() * 20 + 's';
}

function createHeartExplosion() {
    for (let i = 0; i < 50; i++) {
        const heart = document.createElement('div');
        const randomHeart = config.floatingEmojis.hearts[Math.floor(Math.random() * config.floatingEmojis.hearts.length)];
        heart.innerHTML = randomHeart;
        heart.className = 'heart';
        document.querySelector('.floating-elements').appendChild(heart);
        setRandomPosition(heart);
    }
}

function setupMusicPlayer() {
    const musicControls = document.getElementById('musicControls');
    const musicToggle = document.getElementById('musicToggle');
    const bgMusic = document.getElementById('bgMusic');
    const musicSource = document.getElementById('musicSource');

    if (!config.music.enabled) {
        musicControls.style.display = 'none';
        return;
    }

    musicSource.src = config.music.musicUrl;
    bgMusic.volume = config.music.volume || 0.5;
    bgMusic.load();

    if (config.music.autoplay) {
        bgMusic.play().catch(() => {
            musicToggle.textContent = config.music.startText;
        });
    }

    musicToggle.addEventListener('click', () => {
        if (bgMusic.paused) {
            bgMusic.play();
            musicToggle.textContent = config.music.stopText;
        } else {
            bgMusic.pause();
            musicToggle.textContent = config.music.startText;
        }
    });
}

window.addEventListener('DOMContentLoaded', setInitialPosition);