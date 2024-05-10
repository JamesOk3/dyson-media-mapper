import Breadcrumb from "../ui/Breadcrumb.jsx";
import {Link} from "react-router-dom";

/**
 * A function that renders the account settings for each user
 *
 * @return {JSX.Element} This function  will strictly display the account settings for each user
 *
 * @author Hiruy Alemseged
 * Date: April 7, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */

function Settings() {
    return (
        <>
            <Breadcrumb pageName=" Account Settings"/>
            
  <div className="flex justify-center pt-20">
    <div className="w-full max-w-2xl bg-white dark:bg-slate-800 shadow-2xl rounded-sm border border-slate-200 dark:border-slate-700">
      <article className="flex flex-col p-12 bg-white-300">
        <header className="mb-6">
          <div className="font-medium">
            <h3 className="text-2xl leading-tight font-semibold">This Feature is under development</h3>
          </div>
        </header>
        <p className="text-base text-gray-400 italic"> Comming Soon</p>
      </article>
    </div>
  </div>

        </>
    );
}

export default Settings;