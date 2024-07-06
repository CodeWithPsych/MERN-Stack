let previous = document.getElementById('backward')
let next = document.getElementById('forward')
let actionBtn = document.getElementById('action')
let seekBar = document.getElementById('seekbar')
let audioElement = null;
let songId = 1;

const songs = {
    1: new Audio('Songs/1.mp3'),
    2: new Audio('Songs/2.mp3'),
    3: new Audio('Songs/3.mp3'),
    4: new Audio('Songs/4.mp3'),
    5: new Audio('Songs/5.mp3'),
    6: new Audio('Songs/6.mp3'),
    7: new Audio('Songs/7.mp3'),
    8: new Audio('Songs/8.mp3'),
    9: new Audio('Songs/9.mp3'),
    10: new Audio('Songs/10.mp3'),
    11: new Audio('Songs/11.mp3'),
    12: new Audio('Songs/12.mp3'),
    13: new Audio('Songs/13.mp3')
}

// Function to play a song
const playSong = (id) => {
    if (audioElement) {
        audioElement.pause()
    }
    songId = id;
    audioElement = songs[songId]
    audioElement.play();
    updateSeekBar()
    updatePlayButton();
}

// update seekbar 
const updateSeekBar = () => {
    audioElement.addEventListener('timeupdate', () => {
        const progress = (audioElement.currentTime / audioElement.duration) * 100;
        seekBar.value = progress;
    })
    seekBar.addEventListener('input', () => {
        const seek = (seekBar.value / 100) * audioElement.duration
        audioElement.currentTime = seek;
    })
}


// update the play button 
const updatePlayButton = () => {
    if (audioElement && !audioElement.paused) {
        actionBtn.classList.add('fa-pause')
        actionBtn.classList.remove('fa-play')
    }
    else {
        actionBtn.classList.add('fa-play')
        actionBtn.classList.remove('fa-pause')
    }
}

// play / pause btn 
actionBtn.addEventListener('click', () => {
    if (audioElement && !audioElement.paused) {
        audioElement.pause()
    } else if (audioElement) {
        audioElement.play()
    }
    else {
        playSong(songId)
    }
    updatePlayButton();
})

// card listner 
document.querySelectorAll('.songs .card').forEach((card, index) => {
    card.addEventListener('click', () => {
        playSong(index + 1)
    })
})

// next button 
next.addEventListener('click', () => {
    songId = (songId % Object.keys(songs).length) + 1;
    playSong(songId)
    seekBar.value = 0
})

// previous button 
previous.addEventListener('click', () => {
    songId = (songId - 2 + Object.keys(songs).length) % Object.keys(songs).length + 1;
    playSong(songId)
    seekBar.value = 0
})
// navbar not used buttons 
document.addEventListener('DOMContentLoaded', function() {
    var homeNotAllowed = document.getElementById('home-notAllowed');
    var moreNotAllowed = document.getElementById('more-notAllowed');
    var signInNotAllowed = document.getElementById('signIn-notAllowed');
    homeNotAllowed.addEventListener('click', function(event) {
        event.preventDefault();
        alert('Home: Not Allowed');
    });

    moreNotAllowed.addEventListener('click', function(event) {
        event.preventDefault();
        alert('More Info: Not Allowed');
    });

    signInNotAllowed.addEventListener('click', function(event) {
        event.preventDefault();
        alert('Sign In: Not Allowed');
    });
});