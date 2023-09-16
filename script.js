// eslint-disable-next-line no-undef
const images = document.querySelectorAll('img');
console.log(images);

// eslint-disable-next-line no-undef
const observer = new IntersectionObserver(
    // eslint-disable-next-line no-shadow
    (images) => {
        images.forEach((img) => {
            if (img.isIntersecting) {
                img.target.classList.add('visible');
            } else {
                img.target.classList.remove('visible');
            }
        });
    },
    {
        threshold: 0.8,
    }
);

images.forEach((img) => observer.observe(img));
