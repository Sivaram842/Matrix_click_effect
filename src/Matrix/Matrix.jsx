import React, { useState } from "react";
import "./Matrix.css";

const Matrix = () => {
    const matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];

    const [clickedIndexes, setClickedIndexes] = useState([]);
    const [orangeIndexes, setOrangeIndexes] = useState([]);

    const handleClick = (index) => {
        if (!clickedIndexes.includes(index)) {
            setClickedIndexes([...clickedIndexes, index]);
        }

        // If last box is clicked, change green blocks to orange one by one
        if (index === 8) {
            clickedIndexes.forEach((idx, i) => {
                setTimeout(() => {
                    setOrangeIndexes((prev) => [...prev, idx]);
                }, i * 500); // Delay for each block
            });

            // Change the last box to orange after all previous ones
            setTimeout(() => {
                setOrangeIndexes((prev) => [...prev, 8]);
            }, clickedIndexes.length * 500);
        }
    };

    const handleReset = () => {
        setClickedIndexes([]);
        setOrangeIndexes([]);
    };

    return (
        <div className="matrix-wrapper">
            <div className="matrix-container">
                {matrix.flat().map((num, index) => (
                    <div
                        key={index}
                        className={`matrix-item ${orangeIndexes.includes(index) ? "orange" : clickedIndexes.includes(index) ? "green" : ""}`}
                        onClick={() => handleClick(index)}
                    >
                        {num}
                    </div>
                ))}
            </div>
            <div className="button-container">
                <button className="reset-button" onClick={handleReset}>Reset</button>
            </div>
        </div>
    );
};

export default Matrix;
