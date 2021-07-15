/**
 * @param {KeyboardEvent} e 
 */
function tab(e) {
    if (e.key === 'Tab') {
        document.body.classList.add('user-tab');
        window.removeEventListener('keydown', tab);
        window.addEventListener('mousedown', mouseDown);
    }
}

function mouseDown() {
    document.body.classList.remove('user-tab');
    window.removeEventListener('mousedown', mouseDown);
    window.addEventListener('keydown', tab);
}

window.addEventListener('keydown', tab);

const btn = document.querySelector('.back-to-top');

/**
 * @param {boolean} x 
 */
function alt(x) {
    btn.style.visibility = x ? 'visible' : 'hidden';
    btn.style.opacity = x ? 1 : 0;
    btn.style.transform = x ? 'scale(1)' : 'scale(0)';
}

window.addEventListener('scroll', () => {
    window.scrollY > 700 ? alt(true) : alt(false);
});

window.onerror = async (x, y, z) => {
    if (location.hostname === 'localhost' || location.hostname === '127.0.0.1') {
        const headers = { 'Accept': 'application/json', 'Content-Type': 'application/json' };
        const error = await fetch('/error', {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({
                msg: x.toString(),
                file: y,
                line: z.toString(),
            }),
        });

        if (error.status === 200) {
            const data = await error.json();
            console.log(JSON.parse(data).message);
        }
    }
}