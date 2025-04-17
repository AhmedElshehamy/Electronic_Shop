document.onscroll = () => {
    if (window.scrollY > 440) {
        document.querySelector('.upTo').style.display = 'block';
    } else {
        document.querySelector('.upTo').style.display = 'none';
    }
};

document.querySelector('.upTo').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
