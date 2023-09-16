const images = document.querySelectorAll('img');
console.log(images);

const observer = new IntersectionObserver(
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
