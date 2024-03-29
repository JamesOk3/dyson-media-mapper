import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

/**
 * Custom hook for managing color mode (light/dark) in the application.
 *
 * @return {Array} An array containing the current color mode and a function to set the color mode.
 *
 * @author James M Kambanga
 * Date: March 27, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */
const useColorMode = () => {
    const [colorMode, setColorMode] = useLocalStorage('color-theme', 'light');

    useEffect(() => {
        const className = 'dark';
        const bodyClass = window.document.body.classList;

        colorMode === 'dark'
            ? bodyClass.add(className)
            : bodyClass.remove(className);
    }, [colorMode]);

    return [colorMode, setColorMode];
};

export default useColorMode;
