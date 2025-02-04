window.addEventListener('load', () => {
    // Hide the chatbox initially
    document.querySelector(".four").style.visibility = "hidden";

    Swal.fire({
        title: 'Do you want to play music in the background?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'No',
        confirmButtonText: 'Yes',
    }).then((result) => {
        // Show chatbox after the user response
        document.querySelector(".four").style.visibility = "visible";
        animationTimeline();

        // Check if the user confirmed (Yes)
        if (result.isConfirmed) {
            let song = document.querySelector('.song');
            let playPromise = song.play();

            // Handle the promise returned by play() method
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    console.log("Music is playing!");
                }).catch(error => {
                    console.log("Error playing the song:", error);
                });
            }
        }
    });
});

const animationTimeline = () => {
    const textBox = document.querySelector(".hbd-chatbox");
    let text = textBox.textContent.trim();
    textBox.innerHTML = "";

    const tl = new TimelineMax();

    tl.to(".four", 0.6, { autoAlpha: 1 });

    text.split("").forEach((char, i) => {
        let span = document.createElement("span");
        span.textContent = char;
        span.style.opacity = "0";
        span.style.display = "inline";
        span.style.letterSpacing = "0px";
        textBox.appendChild(span);

        tl.to(span, 0.05, { opacity: 1 }, i * 0.05);
    });

    tl.to(".fake-btn", 0.1, { backgroundColor: "rgb(127, 206, 248)" }, "+=1");
    tl.to(".four", 0.5, { scale: 0.2, opacity: 0, y: -150 }, "+=3");

    tl.add(() => {
        window.location.href = "index.html";
    });
};
