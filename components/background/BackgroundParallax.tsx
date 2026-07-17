import { useEffect } from "react";

export default function BackgroundParallax() {

    useEffect(() => {

        const root = document.documentElement;

        let mouseX = 0;
        let mouseY = 0;

        let currentX = 0;
        let currentY = 0;

        const handleMove = (event: MouseEvent) => {

            mouseX = (event.clientX / window.innerWidth - 0.5) * 90;
            mouseY = (event.clientY / window.innerHeight - 0.5) * 90;

        };

        window.addEventListener("mousemove", handleMove);

        function animate() {

            currentX += (mouseX - currentX) * 0.05;
            currentY += (mouseY - currentY) * 0.05;

            root.style.setProperty("--mouse-x", `${currentX}px`);
            root.style.setProperty("--mouse-y", `${currentY}px`);

            requestAnimationFrame(animate);

        }

        animate();

        return () => {

            window.removeEventListener("mousemove", handleMove);

        };

    }, []);

    return null;

}