import { useState, useEffect, useRef } from 'react';

/**
 * Generate a custom hook to handle closing dropdown context menu on click outside or pressing the escape key.
 *
 * @return {Object} Object containing dropdown state, setter function, and refs for trigger and dropdown elements
 *
 * @author James M Kambanga
 * Date: April 8, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */

function useClickOutsideEsc() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const triggerRef = useRef(null);
    const dropdownRef = useRef(null);

    // close on click outside
    useEffect(() => {
        const clickHandler = ({ target }) => {
            if (!dropdownRef.current) return;
            if (!dropdownOpen || dropdownRef.current.contains(target) || triggerRef.current.contains(target)) return;
            setDropdownOpen(false);
        };

        document.addEventListener('click', clickHandler);
        return () => document.removeEventListener('click', clickHandler);
    });

    // close if the esc key is pressed
    useEffect(() => {
        const keyHandler = ({ keyCode }) => {
            if (!dropdownOpen || keyCode !== 27) return;
            setDropdownOpen(false);
        };

        document.addEventListener('keydown', keyHandler);
        return () => document.removeEventListener('keydown', keyHandler);
    });

    return { dropdownOpen, setDropdownOpen, triggerRef, dropdownRef };
}

export default useClickOutsideEsc;