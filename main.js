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

    // Change the URL to index.html here
    tl.add(() => {
        window.location.href = "index.html"; // Redirect to index.html
    });
};
