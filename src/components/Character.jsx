
import { useEffect, useRef } from "react";
import { initCharacter } from "./Character";

function Character() {
    const containerRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const cleanup =
            initCharacter(containerRef.current);

        return cleanup;
    }, []);

    return (
        <div
            ref={containerRef}
            className="character-container"
        />
    );
}

export default Character;
