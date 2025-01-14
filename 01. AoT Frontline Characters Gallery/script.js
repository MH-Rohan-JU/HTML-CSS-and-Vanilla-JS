const panels = document.querySelectorAll('.panel');
const text = document.querySelectorAll('h2');

function removeActives() {
    panels.forEach((panel) => panel.classList.remove('active'));
}

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActives();
        panel.classList.add('active');
    });
});

text.forEach((touch) => {
    touch.addEventListener('click', () => {
        removeActives();
    });
});
