const circle = document.getElementById("circle");

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
    }
);

observer.observe(circle);