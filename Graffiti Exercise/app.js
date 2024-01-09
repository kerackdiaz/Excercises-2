const form = document.querySelector('form');
const wall = document.getElementById('wall');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const textInput = form.querySelector('input[type="text"]').value;
    const colorInput = form.querySelector('input[type="color"]').value;
    const styleInput = form.querySelector('input[name="style"]:checked').value;

    wall.innerHTML = stickyNote(textInput, colorInput, styleInput);
});

// Evento de clic del botón de cierre
document.addEventListener('click', function (e) {
    if (e.target && e.target.id === 'close') {
        const note = document.getElementById('note');
        note.classList.add('hidden');
    }
});

function stickyNote(textInput, colorInput, styleInput) {
    let fontStyle;

    if (styleInput === 'graffiti') {
        fontStyle = 'italic';
    } else {
        fontStyle = 'normal';
    }

    return `
        <div id="note" class="h-[300px] w-[300px] bg-[${colorInput}] flex justify-center items-center">
        <span id="close" class="relative bg-white left-[50%] bottom-[42%] p-3 cursor-pointer">X</span>
        <h1 class="${fontStyle} text-center">${textInput}</h1>
        </div>
    `;
}



