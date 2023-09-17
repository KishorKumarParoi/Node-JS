// eslint-disable-next-line no-undef
const circle = document.getElementById('circle');

// eslint-disable-next-line no-undef
const observer = new IntersectionObserver(
    (items) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                console.log(`${item.target.id} is visible`);
            } else {
                console.log(`${item.target.id} is not visible`);
            }
        });
    },
    {
        threshold: 0.8,
        // eslint-disable-next-line comma-dangle
    }
);

observer.observe(circle);
