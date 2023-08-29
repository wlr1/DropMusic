import { useState, useEffect } from 'react';

export function AutoClosePopUp(initialVisible = false, timeout = 3000) {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const showPopUp = () => {
    setIsVisible(true);
  };

  const hidePopUp = () => {
    setIsVisible(false);
  };

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        hidePopUp();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, timeout]);

  return { isVisible, showPopUp, hidePopUp };
}
