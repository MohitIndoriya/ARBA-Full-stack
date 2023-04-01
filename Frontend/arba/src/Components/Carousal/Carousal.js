import React, { useState } from "react";
import styles from "../Carousal/Carousal.module.css";

const Carousel = ({ images }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handlePrev = () => {
        setActiveIndex((activeIndex - 1 + images.length) % images.length);
    };

    const handleNext = () => {
        setActiveIndex((activeIndex + 1) % images.length);
    };

    const renderImages = () => {
        const prevIndex = (activeIndex - 1 + images.length) % images.length;
        const nextIndex = (activeIndex + 1) % images.length;

        // Use splice to create a window of three images centered on the active index
        const windowStart = (activeIndex - 1 + images.length) % images.length;
        const windowEnd = (activeIndex + 2) % images.length;
        const window = images.slice(windowStart, windowEnd + 1);

        return window.map((image, index) => {
            let className = styles.image;
            if (index === 1) {
                // Center image
                className += ` ${styles.active}`;
            } else if (index === 0) {
                // Previous image
                className += ` ${styles.prev}`;
            } else if (index === 2) {
                // Next image
                className += ` ${styles.next}`;
            }
            return (
                <img
                    key={index}
                    src={image}
                    alt={`Carousel Image ${index}`}
                    className={className}
                />
            );
        });
    };

    return (
        <div className={styles.carousel}>
            <div className={styles.imageContainer}>{renderImages()}</div>
            <button className={styles.prevButton} onClick={handlePrev}>
                Prev
            </button>
            <button className={styles.nextButton} onClick={handleNext}>
                Next
            </button>
        </div>
    );
};

export default Carousel;
