
function NotificationTag({count, type = "info", children}) {
    return (
        <div className="relative flex mr-1 sm:mr-0">
            {children}
            <span className={`absolute -right-5 block rounded ${type === "danger" ? "bg-rose-500" : "bg-primary"} px-1.5 py-0.5 text-xs font-medium text-white`}>
                {count || ""}
            </span>
        </div>
    );
}

export default NotificationTag;