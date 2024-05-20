const mainVideo = document.querySelector("video");
const videoList = document.querySelector(".video-list ul");

videoList.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        const videoSrc = e.target.getAttribute("data-video");
        mainVideo.src = videoSrc;
        mainVideo.play();
    }
});

mainVideo.addEventListener("loadeddata", () => {
    const videoDuration = document.querySelector(".video-duration");
    videoDuration.innerText = formatTime(mainVideo.duration);
});

const formatTime = (time) => {
    let seconds = Math.floor(time % 60),
        minutes = Math.floor(time / 60) % 60,
        hours = Math.floor(time / 3600);

    seconds = seconds < 10 ? `0${seconds}` : seconds;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    hours = hours < 10 ? `0${hours}` : hours;

    if (hours == 0) {
        return `${minutes}:${seconds}`;
    }
    return `${hours}:${minutes}:${seconds}`;
};