import { useState, useEffect, useRef } from 'react';

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