module.exports = (ms = Date.now()) => {
    const time = new Date(ms);
    const h = time.getHours();
    const m = time.getMinutes();
    const s = time.getSeconds();

    return `${h < 9 ? '0' + h : h}:${m < 9 ? '0' + m : m}:${s < 9 ? '0' + s : s}`;
}