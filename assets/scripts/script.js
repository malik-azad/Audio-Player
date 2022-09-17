const cover = document.getElementById('cover');
const disc = document.getElementById('disc');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const progressContainer = document.getElementById('progress-container');
const progress = document.getElementById('progress');
const timer = document.getElementById('timer');
const duration = document.getElementById('duration');
const prev = document.getElementById('prev');
const play = document.getElementById('play');
const next = document.getElementById('next');
let audioIndex = 0;

// Audio info
const audios = [
{
        title: 'Surah Al Nas- Quran Recitation',
        artist: 'Al Moulim-Juz Am. [Khalifa Al Tunaiji]',
        coverPath: 'img/track1.jpg',
        discPath: 'AUD/01_النّاس.mp3',
     },
{
        title: 'Surah Al Falaq- Quran Recitation',
        artist: 'Al Moulim-Juz Am. [Khalifa Al Tunaiji]',
        coverPath: 'img/track1.jpg',
        discPath: 'AUD/02_الفلق.mp3',
    },
{
        title: 'Surah Al Ikhlas- Quran Recitation',
        artist: 'Al Moulim-Juz Am. [Khalifa Al Tunaiji]',
        coverPath: 'img/track1.jpg',
        discPath: 'AUD/03_الاخلاص.mp3',
    },

{
        title: 'Surah Al Lahab- Quran Recitation',
        artist: 'Al Moulim-Juz Am. [Khalifa Al Tunaiji]',
        coverPath: 'img/track1.jpg',
        discPath: 'AUD/04_لھب.mp3',
    },
{
        title: 'Surah An Nasr- Quran Recitation',
        artist: 'Al Moulim-Juz Am. [Khalifa Al Tunaiji]',
        coverPath: 'img/track1.jpg',
        discPath: 'AUD/05_النّصر.mp3',
    },
{
        title: 'Surah Al Kafirun - Quran Recitation',
        artist: 'Al Moulim-Juz Am. [Khalifa Al Tunaiji]',
        coverPath: 'img/track1.jpg',
        discPath: 'AUD/06_الکافرون.mp3',
    },
{
        title: 'Surah Al Kausar- Quran Recitation',
        artist: 'Al Moulim-Juz Am. [Khalifa Al Tunaiji]',
        coverPath: 'img/track1.jpg',
        discPath: 'AUD/07_الکوثر.mp3',
    },

{
        title: 'Surah Al Maun- Quran Recitation',
        artist: 'Al Moulim-Juz Am. [Khalifa Al Tunaiji]',
        coverPath: 'img/track1.jpg',
        discPath: 'AUD/08_الماعون.mp3',
    },
{
        title: 'Surah Quraish- Quran Recitation',
        artist: 'Al Moulim-Juz Am. [Khalifa Al Tunaiji]',
        coverPath: 'img/track1.jpg',
        discPath: 'AUD/09_قریش.mp3',
    },
 {
        title: 'Surah Al Fil- Quran Recitation',
        artist: 'Al Moulim-Juz Am. [Khalifa Al Tunaiji]',
        coverPath: 'img/track1.jpg',
        discPath: 'AUD/10_الفیل.mp3',
    },
 {
        title: 'Surah Al Hamza- Quran Recitation',
        artist: 'Al Moulim-Juz Am. [Khalifa Al Tunaiji]',
        coverPath: 'img/track1.jpg',
        discPath: 'AUD/11_الھمزہ.mp3',
    },
 {
        title: 'Surah Al Asr- Quran Recitation',
        artist: 'Al Moulim-Juz Am. [Khalifa Al Tunaiji]',
        coverPath: 'img/track1.jpg',
        discPath: 'AUD/12_العصر.mp3',
    },
{
        title: 'Surah Al Taqasur- Quran Recitation',
        artist: 'Al Moulim-Juz Am. [Khalifa Al Tunaiji]',
        coverPath: 'img/track1.jpg',
        discPath: 'AUD/13_التّکاثر.mp3',
    },
 {
        title: 'Surah Al Qaria- Quran Recitation',
        artist: 'Al Moulim-Juz Am. [Khalifa Al Tunaiji]',
        coverPath: 'img/track1.jpg',
        discPath: 'AUD/14_القارعۃ.mp3',
    },
 {
        title: 'Surah Al Adiyat- Quran Recitation',
        artist: 'Al Moulim-Juz Am. [Khalifa Al Tunaiji]',
        coverPath: 'img/track1.jpg',
        discPath: 'AUD/15_العادیات.mp3',
    },
 {
        title: 'Surah Al Zalzalah - Quran Recitation',
        artist: 'Al Moulim-Juz Am. [Khalifa Al Tunaiji]',
        coverPath: 'img/track1.jpg',
        discPath: 'AUD/16_الزلزال.mp3',
    },
 {
        title: 'Surah Al Baiyina- Quran Recitation',
        artist: 'Al Moulim-Juz Am. [Khalifa Al Tunaiji]',
        coverPath: 'img/track1.jpg',
        discPath: 'AUD/17_البیّنۃ.mp3',
    },
 {
        title: 'Surah Qadr- Quran Recitation',
        artist: 'Al Moulim-Juz Am. [Khalifa Al Tunaiji]',
        coverPath: 'img/track2.jpg',
        discPath: 'AUD/18_قدر.mp3',
    },
 {
        title: 'Surah Al Alaq- Quran Recitation',
        artist: 'Al Moulim-Juz Am. [Khalifa Al Tunaiji]',
        coverPath: 'img/track1.jpg',
        discPath: 'AUD/19_العلق.mp3',
    },
 {
        title: 'Surah At Tin- Quran Recitation',
        artist: 'Al Moulim-Juz Am. [Khalifa Al Tunaiji]',
        coverPath: 'img/track1.jpg',
        discPath: 'AUD/20_التّین.mp3',
    },
 {
        title: 'Surah Al Sharh- Quran Recitation',
        artist: 'Al Moulim-Juz Am. [Khalifa Al Tunaiji]',
        coverPath: 'img/track1.jpg',
        discPath: 'AUD/21_انشراح.mp3',
    },
 {
        title: 'Surah Adh Dhuha- Quran Recitation',
        artist: 'Al Moulim-Juz Am. [Khalifa Al Tunaiji]',
        coverPath: 'img/track2.jpg',
        discPath: 'AUD/22_ضحی.mp3',
    },
 {
        title: 'Surah Al Lail- Quran Recitation',
        artist: 'Al Moulim-Juz Am. [Khalifa Al Tunaiji]',
        coverPath: 'img/track1.jpg',
        discPath: 'AUD/23_اللّیل.mp3',
    },
{
        title: 'Surah Ash Shams - Quran Recitation',
        artist: 'Al Moulim-Juz Am. [Khalifa Al Tunaiji]',
        coverPath: 'img/track1.jpg',
        discPath: 'AUD/24_الشّمس.mp3',
    },
 {
        title: 'Surah Al Balad - Quran Recitation',
        artist: 'Al Moulim-Juz Am. [Khalifa Al Tunaiji]',
        coverPath: 'img/track2.jpg',
        discPath: 'AUD/25_البلد.mp3',
    },
 {
        title: 'Surah Al Fajr - Quran Recitation',
        artist: 'Al Moulim-Juz Am. [Khalifa Al Tunaiji]',
        coverPath: 'img/track1.jpg',
        discPath: 'AUD/26_الفجر.mp3',
    },

 {
        title: 'Surah Al Gashiya- Quran Recitation',
        artist: 'Al Moulim-Juz Am. [Khalifa Al Tunaiji]',
        coverPath: 'img/track1.jpg',
        discPath: 'AUD/27_الغشیۃ.mp3',
    },
{
        title: 'Surah الاعلیٰ- Quran Recitation',
        artist: 'Al Moulim-Juz Am. [Khalifa Al Tunaiji]',
        coverPath: 'img/track1.jpg',
        discPath: 'AUD/28_الاعلیٰ.mp3',
    },
{
        title: 'Surah الطّارق - Quran Recitation',
        artist: 'Al Moulim-Juz Am. [Khalifa Al Tunaiji]',
        coverPath: 'img/track1.jpg',
        discPath: 'AUD/29_الطّارق.mp3',
    },
{
        title: 'Surah البروج - Quran Recitation',
        artist: 'Al Moulim-Juz Am. [Khalifa Al Tunaiji]',
        coverPath: 'img/track1.jpg',
        discPath: 'AUD/30_البروج.mp3',
    },
{
        title: 'Surah المطفّفین - Quran Recitation',
        artist: 'Al Moulim-Juz Am. [Khalifa Al Tunaiji]',
        coverPath: 'img/track1.jpg',
        discPath: 'AUD/32_المطفّفین.mp3',
    },

{
        title: 'Surah الانّفطار - Quran Recitation',
        artist: 'Al Moulim-Juz Am. [Khalifa Al Tunaiji]',
        coverPath: 'img/track1.jpg',
        discPath: 'AUD/33_الانّفطار.mp3',
    },
{
        title: 'Surah التّکویر - Quran Recitation',
        artist: 'Al Moulim-Juz Am. [Khalifa Al Tunaiji]',
        coverPath: 'img/track1.jpg',
        discPath: 'AUD/34_التّکویر.mp3',
    },
{
        title: 'Surah عبس - Quran Recitation',
        artist: 'Al Moulim-Juz Am. [Khalifa Al Tunaiji]',
        coverPath: 'img/track1.jpg',
        discPath: 'AUD/35_عبس.mp3',
    },
{
        title: 'Surah النّازعات - Quran Recitation',
        artist: 'Al Moulim-Juz Am. [Khalifa Al Tunaiji]',
        coverPath: 'img/track1.jpg',
        discPath: 'AUD/36_النّازعات.mp3',
    }, 
{
        title: 'Surah النّبأ- Quran Recitation',
        artist: 'Al Moulim-Juz Am. [Khalifa Al Tunaiji]',
        coverPath: 'img/track1.jpg',
        discPath: 'AUD/37_النّبأ.mp3',
    },
{
        title: 'Tamanna Muddaton Se Hai- Naat',
        artist: 'Laiba_Fatima',
        coverPath: 'img/track2.jpg',
        discPath: 'AUD/TamanahNaat.mp3',
    },
{
        title: 'Oh Allah Oh Almighty- Naat',
        artist: 'Sami Yusuf',
        coverPath: 'img/track2.jpg',
        discPath: 'AUD/Oh Allah Oh Almighty - Sami Yusuf.mp3',
    },



];

window.addEventListener('load', function() {
    // Load audio initially
    loadAudio(audios[audioIndex]);
})

// Load the given audio
function loadAudio(audio) {
    var dur = 0;
    cover.src = audio.coverPath;
    disc.src = audio.discPath;
    title.textContent = audio.title;
    artist.textContent = audio.artist;
    disc.addEventListener('canplaythrough', function() {
        dur = disc.duration
        mins = Math.floor(Math.abs(dur / 60))
        mins = String(mins).padStart('2', 0)
        sec = Math.floor(dur - (parseInt(mins) * 60))
        sec = String(sec).padStart('2', 0)
        duration.textContent = `${mins}:${sec}`
    })
}

// Toggle play and pause
function playPauseMedia() {
    if (disc.paused) {
        disc.play();
    } else {
        disc.pause();
    }
}

// Update icon
function updatePlayPauseIcon() {
    if (disc.paused) {
        play.classList.remove('fa-pause');
        play.classList.add('fa-play');
    } else {
        play.classList.remove('fa-play');
        play.classList.add('fa-pause');
    }
}

// Update progress bar
function updateProgress() {
    progress.style.width = (disc.currentTime / disc.duration) * 100 + '%';

    let minutes = Math.floor(disc.currentTime / 60);
    let seconds = Math.floor(disc.currentTime % 60);
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    timer.textContent = `${minutes}:${seconds}`;
}

// Reset the progress
function resetProgress() {
    progress.style.width = 0 + '%';
    timer.textContent = '0:00';
}

// Go to previous audio
function gotoPreviousAudio() {
    if (audioIndex === 0) {
        audioIndex = audios.length - 1;
    } else {
        audioIndex = audioIndex - 1;
    }

    const isDiscPlayingNow = !disc.paused;
    loadAudio(audios[audioIndex]);
    resetProgress();
    if (isDiscPlayingNow) {
        playPauseMedia();
    }
}

// Go to next audio
function gotoNextAudio(playImmediately) {
    if (audioIndex === audios.length - 1) {
        audioIndex = 0;
    } else {
        audioIndex = audioIndex + 1;
    }

    const isDiscPlayingNow = !disc.paused;
    loadAudio(audios[audioIndex]);
    resetProgress();
    if (isDiscPlayingNow || playImmediately) {
        playPauseMedia();
    }
}

// Change audio progress when clicked on progress bar
function setProgress(ev) {
    const totalWidth = this.clientWidth;
    const clickWidth = ev.offsetX;
    const clickWidthRatio = clickWidth / totalWidth;
    disc.currentTime = clickWidthRatio * disc.duration;
}

// Navigate audio slider
function progressSlider(ev) {
    var is_playing = !disc.paused
    if (is_playing)
        disc.pause()
    const totalWidth = this.clientWidth;
    const clickWidth = ev.offsetX;
    const clickWidthRatio = clickWidth / totalWidth;
    disc.currentTime = clickWidthRatio * disc.duration;
    if (is_playing)
        disc.play()
    document.addEventListener('mousemove', slideMoving);
    document.addEventListener('mouseup', function() {
        if (is_playing)
            disc.play()
        document.removeEventListener('mousemove', slideMoving);
    });

}

// Navigate audio slider while moving
function slideMoving(ev) {
    var is_playing = !disc.paused
    if (is_playing)
        disc.pause()
    const totalWidth = progressContainer.clientWidth;
    const clickWidth = ev.offsetX;
    const clickWidthRatio = clickWidth / totalWidth;
    disc.currentTime = clickWidthRatio * disc.duration;
    if (is_playing)
        disc.play()
}

// Play/Pause when play button clicked
play.addEventListener('click', playPauseMedia);

// Various events on disc
disc.addEventListener('play', updatePlayPauseIcon);
disc.addEventListener('pause', updatePlayPauseIcon);
disc.addEventListener('timeupdate', updateProgress);
disc.addEventListener('ended', gotoNextAudio.bind(null, true));

// Go to next audio when next button clicked
prev.addEventListener('click', gotoPreviousAudio);

// Go to previous audio when previous button clicked
next.addEventListener('click', gotoNextAudio.bind(null, false));

// Move to different place in the audio
progressContainer.addEventListener('mousedown', progressSlider);