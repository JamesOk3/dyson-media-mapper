import useColorMode from '../../hooks/useColorMode';
import Icons from "../../ui/Icons.jsx";

/**
 * Renders a dark mode toggle component to change between light and dark mode.
 *
 * @return {JSX.Element} The rendered dark mode switcher component.
 *
 * @author James M Kambanga
 * Date: March 28, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */
const DarkModeSwitcher = () => {
    const [colorMode, setColorMode] = useColorMode()

    function changeColorMode() {
        if (typeof setColorMode === 'function') {
            setColorMode(colorMode === 'light' ? 'dark' : 'light');
        }
    }

    return (
        <li>
            <label className={`relative m-0 block h-7.5 w-14 rounded-full ${colorMode === 'dark' ? 'bg-primary' : 'bg-stroke'}`}>
                <input type="checkbox"
                       className="dur absolute top-0 z-50 m-0 h-full w-full cursor-pointer opacity-0"
                        onChange={changeColorMode}/>
                <span className={`absolute top-1/2 left-[3px] flex h-6 w-6 -translate-y-1/2 translate-x-0 items-center justify-center rounded-full bg-white shadow-switcher duration-75 ease-linear ${
                        colorMode === 'dark' && '!right-[3px] !translate-x-full'}`}>
                  <span className="dark:hidden">
                    <Icons id="sun-icon" width="16" height="16" viewBox="0 0 16 16"/>
                  </span>
                  <span className="hidden dark:inline-block">
                    <Icons id="moon-icon" width="16" height="16" viewBox="0 0 16 16"/>
                  </span>
                </span>
            </label>
        </li>
    );
};

export default DarkModeSwitcher;
