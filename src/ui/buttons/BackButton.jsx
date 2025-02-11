import Icons from "../Icons.jsx";
import {useNavigate} from "react-router-dom";

/**
 * Renders a back button component that navigates to the previous page when clicked.
 *
 * @return {JSX.Element} The rendered back button component.
 *
 * @author James M Kambanga
 * Date: April 19, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */
function BackButton() {
    const navigate = useNavigate();
    return (
        <button className="btn-sm px-3 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-slate-600 dark:text-slate-300"
            onClick={(e) => {
                e.preventDefault();
                navigate(-1);
            }}>
            <Icons id="chevron-left" className="fill-current text-slate-400 dark:text-slate-500 mr-2" width="7"
                   height="12" viewBox="0 0 7 12"/>
            <span>Back</span>
        </button>
    );
}

export default BackButton;