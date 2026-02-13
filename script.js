const config = window.VALENTINE_CONFIG;

window.addEventListener('DOMContentLoaded', () => {
    document.title = config.pageTitle;
    document.getElementById('valentineTitle').textContent = config.pageTitle;

    // --- 1. Question 1 ---
    if (config.questions.first) {
        document.getElementById('question1Text').textContent = config.questions.first.text;
        document.getElementById('yesBtn1').textContent = config.questions.first.yesBtn;
        document.getElementById('noBtn1').textContent = config.questions.first.noBtn;
    }

    // --- 2. Question 2 (With Secret Hover) ---
    if (config.questions.second) {
        document.getElementById('question2Text').textContent = config.questions.second.text;
        document.getElementById('yesBtn2').textContent = config.questions.second.yesBtn;
        document.getElementById('noBtn2').textContent = config.questions.second.noBtn;
        
        // Secret Hover Message
        if (config.questions.second.secretAnswer) {
            document.getElementById('secretMessage').textContent = config.questions.second.secretAnswer;
        }
    }

    // --- 3. Question 3 (Buttons mapped from startText/nextBtn) ---
    if (config.questions.third) {
        document.getElementById('question3Text').textContent = config.questions.third.text;
        document.getElementById('yesBtn3').textContent = config.questions.third.startText; // "Merooon"
        document.getElementById('noBtn3').textContent = config.questions.third.nextBtn;   // "Baka umuwi"
    }

    // --- 4. Question 4 (Proposal) ---
    if (config.questions.fourth) {
        document.getElementById('question4Text').textContent = config.questions.fourth.text;
        document.getElementById('yesBtn4').textContent = config.questions.fourth.yesBtn;
        document.getElementById('noBtn4').textContent = config.questions.fourth.noBtn;
    }

    // --- 5. Question 5 (Goodluck) ---
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
    showNextQuestion(4); // Skip to proposal
}

function moveButton(button) {
    const x = Math.random() * (window.innerWidth - button.offsetWidth);
    const y = Math.random() * (window.innerHeight - button.offsetHeight);
    button.style.position = 'fixed';
    button.style.left = x + 'px';
    button.style.top = y + 'px';
}

// --- LOVE METER ---
const loveMeter = document.getElementById('loveMeter');
const loveValue = document.getElementById('loveValue');
const extraLove = document.getElementById('extraLove');

if (loveMeter) {
    loveMeter.addEventListener('input', () => {
        const value = parseInt(loveMeter.value);
        loveValue.textContent = value;
        if (value > 100) {
            extraLove.classList.remove('hidden');
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
        }
    });
}

// --- CELEBRATION ---
function celebrate() {
    document.querySelectorAll('.question-section').forEach(q => q.classList.add('hidden'));
    document.getElementById('loveMeterSection').classList.add('hidden'); // Hide meter too
    
    const celebration = document.getElementById('celebration');
    celebration.classList.remove('hidden');
    
    document.getElementById('celebrationTitle').textContent = config.celebration.title;
    document.getElementById('celebrationMessage').textContent = config.celebration.message;
    document.getElementById('celebrationEmojis').textContent = config.celebration.emojis;
    
    createHeartExplosion();
}

// --- MUSIC (LOCAL FILE) ---
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
    bgMusic.volume = config.music.volume;
    bgMusic.load();

    if (config.music.autoplay) {
        bgMusic.play().catch(() => console.log("Autoplay blocked"));
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

// --- ANIMATIONS ---
function createFloatingElements() {
    const container = document.querySelector('.floating-elements');
    config.floatingEmojis.hearts.forEach(heart => {
        const div = document.createElement('div');
        div.className = 'heart';
        div.innerHTML = heart;
        div.style.left = Math.random() * 100 + 'vw';
        div.style.animationDelay = Math.random() * 5 + 's';
        div.style.animationDuration = 10 + Math.random() * 20 + 's';
        container.appendChild(div);
    });
}

function createHeartExplosion() {
    for (let i = 0; i < 50; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '💖';
        heart.className = 'heart';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animation = 'explode 1s ease-out forwards';
        document.querySelector('.floating-elements').appendChild(heart);
    }
}