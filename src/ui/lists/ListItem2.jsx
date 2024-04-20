
function ListItem2({image, content}) {
    return (
        <li>
            <div className="flex justify-between">
                <div className="grow flex items-center">
                    <div className="relative mr-3">
                        <img className="w-8 h-8 rounded-full" src={image}
                             width="32" height="32" alt="User profile"/>
                    </div>
                    <div className="truncate">
                        <span className="text-sm font-medium text-slate-800 dark:text-slate-100">{content}</span>
                    </div>
                </div>
                <button className="text-slate-400 hover:text-slate-500 dark:text-slate-500 dark:hover:text-slate-400 rounded-full">
                    <span className="sr-only">Menu</span>
                    <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32">
                        <circle cx="16" cy="16" r="2"/>
                        <circle cx="10" cy="16" r="2"/>
                        <circle cx="22" cy="16" r="2"/>
                    </svg>
                </button>
            </div>
        </li>
    );
}

export default ListItem2;