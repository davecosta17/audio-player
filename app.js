const tracks = [
    {
        title: "Not Even Love",
        artist: "Seven Lions, ILLENIUM, ÁSDÍS",
        src: "audio1.mp3",
        albumArt: "album-art1.jpg",
        duration: "4:05"
    },
    {
        title: "Track 2",
        artist: "Artist 2",
        src: "audio2.mp3",
        albumArt: "album-art2.jpg",
        duration: "3:45"
    },
    {
        title: "Track 3",
        artist: "Artist 3",
        src: "audio3.mp3",
        albumArt: "album-art3.jpg",
        duration: "5:10"
    }
];

let currentTrackIndex = 0;
const audio = new Audio(tracks[currentTrackIndex].src);
const playPauseButton = document.getElementById('play-pause');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');
const playlist = document.getElementById('playlist');
const trackTitle = document.getElementById('track-title');
const trackArtist = document.getElementById('track-artist');
const albumArt = document.getElementById('album-art');
const duration = document.getElementById('duration');

function loadTrack(index) {
    const track = tracks[index];
    audio.src = track.src;
    trackTitle.textContent = track.title;
    trackArtist.textContent = track.artist;
    albumArt.src = track.albumArt;
    duration.textContent = track.duration;

    // Update active playlist item
    document.querySelectorAll('.playlist li').forEach((li, i) => {
        li.classList.toggle('active', i === index);
    });
}

playPauseButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playPauseButton.textContent = '⏸️';
    } else {
        audio.pause();
        playPauseButton.textContent = '▶️';
    }
});

nextButton.addEventListener('click', () => {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    loadTrack(currentTrackIndex);
    audio.play();
    playPauseButton.textContent = '⏸️';
});

prevButton.addEventListener('click', () => {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    loadTrack(currentTrackIndex);
    audio.play();
    playPauseButton.textContent = '⏸️';
});

playlist.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        currentTrackIndex = parseInt(e.target.dataset.index, 10);
        loadTrack(currentTrackIndex);
        audio.play();
        playPauseButton.textContent = '⏸️';
    }
});

// Load the initial track
loadTrack(currentTrackIndex);