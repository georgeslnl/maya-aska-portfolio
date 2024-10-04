import { useState, useEffect } from 'react';
import useOnScreen from './useOnScreen'; // Adjust the import path as needed

const useVisibilityState = (threshold = 0.1) => {
  const [ref, isVisible] = useOnScreen({ threshold });
  const [hasBeenVisible, setHasBeenVisible] = useState(false);

  useEffect(() => {
    if (isVisible && !hasBeenVisible) {
      setHasBeenVisible(true);
    }
  }, [isVisible, hasBeenVisible]);

  return [ref, hasBeenVisible];
};

export default useVisibilityState;