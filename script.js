function playVideo() {
    const video = document.getElementById("aboutVideo");
    const btn = document.querySelector(".play-btn");

    video.play();
    video.controls = true;

    btn.style.display = "none";
}


function toggleText() {
    const moreText = document.getElementById("moreText");
    const btn = document.getElementById("readBtn");

    if (moreText.style.display === "none") {
        moreText.style.display = "block";
        btn.innerText = "Read Less";
    } else {
        moreText.style.display = "none";
        btn.innerText = "Read More";
    }
}


function showMore() {
    let hiddenCards = document.querySelectorAll(".hidden");
    let btn = document.getElementById("viewBtn");

    // Check current state
    if (btn.innerText === "View More") {
        hiddenCards.forEach(card => {
            card.style.display = "block";
        });
        btn.innerText = "View Less";
    } else {
        hiddenCards.forEach(card => {
            card.style.display = "none";
        });
        btn.innerText = "View More";

        // Optional: scroll back up smoothly
        document.getElementById("courseContainer").scrollIntoView({
            behavior: "smooth"
        });
    }
}


function playTourVideo() {
    const video = document.getElementById("tourVideo");
    const btn = document.querySelector(".video-container .play-btn");

    video.play();
    video.controls = true;

    btn.style.display = "none";
}


let index = 0;

function slideRight() {
    const track = document.getElementById("facultyTrack");
    const totalCards = document.querySelectorAll(".faculty-card").length;

    if (index < totalCards - 3) {
        index++;
        track.style.transform = `translateX(-${index * 33.33}%)`;
    }
}

function slideLeft() {
    const track = document.getElementById("facultyTrack");

    if (index > 0) {
        index--;
        track.style.transform = `translateX(-${index * 33.33}%)`;
    }
}


function openPopup(title, time, desc, img) {
    document.getElementById("eventPopup").style.display = "flex";

    document.getElementById("popupTitle").innerText = title;
    document.getElementById("popupTime").innerText = time;
    document.getElementById("popupDesc").innerText = desc;
    document.getElementById("popupImage").src = img;
}

function closePopup() {
    document.getElementById("eventPopup").style.display = "none";
}


function openFromData(el) {
    openPopup(
        el.dataset.title,
        el.dataset.time,
        el.dataset.desc,
        el.dataset.img
    );
}


function loadPage(page) {
    fetch(page)
        .then(res => res.text())
        .then(data => {
            document.getElementById("main-content").innerHTML = data;
        });
}

window.onload = function () {
    loadPage('index.html');
};


let tIndex = 0;

function slideTestRight() {
    const track = document.getElementById("testimonialTrack");
    const total = document.querySelectorAll(".testimonial-card").length;

    if (tIndex < total - 3) {
        tIndex++;
        track.style.transform = `translateX(-${tIndex * 33.33}%)`;
    }
}

function slideTestLeft() {
    const track = document.getElementById("testimonialTrack");

    if (tIndex > 0) {
        tIndex--;
        track.style.transform = `translateX(-${tIndex * 33.33}%)`;
    }
}

