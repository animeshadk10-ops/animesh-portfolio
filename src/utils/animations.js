export const customEase = [0.16, 1, 0.3, 1]; // Premium Apple-style easing

export const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
};

export const fadeUpTilt = {
    hidden: { opacity: 0, y: 60, rotateX: -15, scale: 0.95 },
    show: {
        opacity: 1,
        y: 0,
        rotateX: 0,
        scale: 1,
        transition: { duration: 1.2, ease: customEase }
    }
};

export const clipPathReveal = {
    hidden: { clipPath: "inset(100% 0 0 0)", y: 40 },
    show: {
        clipPath: "inset(0% 0 0 0)",
        y: 0,
        transition: { duration: 1.2, ease: customEase }
    }
};

export const drawLine = {
    hidden: { height: 0, opacity: 0 },
    show: {
        height: "100%",
        opacity: 1,
        transition: { duration: 1.5, ease: customEase }
    }
};
