import { useState, useEffect } from 'react';

export const useIsTabbing = () => {
  const [showTabOutline, setShowTabOutline] = useState(false);

  useEffect(() => {
    const handleFirstTab = (e: KeyboardEvent) => {
      if (e.keyCode === 9) {
        setShowTabOutline(true);
        window.removeEventListener('keydown', handleFirstTab);
      }
    };

    window.addEventListener('keydown', handleFirstTab);

    return () => {
      window.removeEventListener('keydown', handleFirstTab);
    };
  });

  return showTabOutline;
};
