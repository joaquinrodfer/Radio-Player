const songData = [
    {
        "title": "Los 40",
        "dataName": "los40",
        "cover": "https://pbs.twimg.com/profile_images/1546463891697422336/Ug3uBt63_400x400.jpg"
    } , {
        "title": "Cadena Ser",
        "dataName": "cadenaser",
        "cover": "https://static.mytuner.mobi/media/tvos_radios/e6xdJAvSZu.png"
    }
]

//Variables
let actual = [new Audio(songData[0].url), 0];
let playing = false;

// Getting DOM elements
let cover = document.querySelector(".cover")
let coverImage = document.querySelector(".rde-player-station-logo")
let title = document.querySelector(".title")
let radio = document.querySelector(".embedded-radio-player")

// Changing station
radio.setAttribute("data-playstation" , "los40")

cover.setAttribute("src" , songData[0].cover)