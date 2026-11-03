import { useState } from 'react';

const useLogic = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return {
    isLoaded,
    loadVideo: () => setIsLoaded(true),
  };
};

export default useLogic;
