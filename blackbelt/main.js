const addLyrics = (artist, song, lyrics) => {
    let text = document.querySelector(".main-container")

    let lyricsDiv = document.createElement("div");
    lyricsDiv.classList.add("text-container");
    lyricsDiv.innerHTML = lyrics;
    text.appendChild(lyricsDiv);

    let container = document.querySelector(".text-container")
    let titleHeader = document.createElement("h2")
    titleHeader.classList.add('song-title')
    titleHeader.innerHTML = artist;
    container.appendChild(titleHeader)

    let songHeader = document.createElement("h3")
    songHeader.classList.add('song-title')
    songHeader.innerHTML = song;
    container.appendChild(songHeader)
};


const getInput = () => {
    let artist = document.getElementById('artist').value; 
    let song = document.getElementById('song').value; 
        return getLyrics(artist, song); 
}

const getLyrics = (artist, song) => {
    let a = fetch(
        `https://api.lyrics.ovh/v1/${artist}/${song}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (text) {
            return addLyrics(artist, song, text.lyrics)
        });
};

