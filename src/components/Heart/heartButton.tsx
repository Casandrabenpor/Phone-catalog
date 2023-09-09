import React, { useState } from 'react';

export const HeartButton = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleHeart = (event: any) => {
    event.preventDefault();
    setIsFavorite((IsFavorite) => !IsFavorite);
  };

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill={isFavorite ? 'red' : 'white'}
        onClick={handleHeart}
        className="heartbeat"
      >
        <path
          d="M8.16668 3.5C4.94551 3.5 2.33334 6.08533 2.33334 9.275C2.33334 11.8498 3.35418 17.9608 13.4027 24.1383C13.5827 24.2479 13.7893 24.3058 14 24.3058C14.2107 24.3058 14.4173 24.2479 14.5973 24.1383C24.6458 17.9608 25.6667 11.8498 25.6667 9.275C25.6667 6.08533 23.0545 3.5 19.8333 3.5C16.6122 3.5 14 7 14 7C14 7 11.3878 3.5 8.16668 3.5Z"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};
