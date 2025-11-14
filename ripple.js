document.addEventListener("pointerdown", (e) => {
    const ripple = document.createElement("div");
    ripple.className = "chromatic-ripple";

    const size = 180;
    ripple.style.width = ripple.style.height = size + "px";

    ripple.style.left = e.clientX - size / 2 + "px";
    ripple.style.top = e.clientY - size / 2 + "px";

    document.body.appendChild(ripple);

    setTimeout(() => {
        ripple.remove();
    }, 600);
});
