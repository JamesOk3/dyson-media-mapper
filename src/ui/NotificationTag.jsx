/**
 * Renders a notification tag component with a count and optional type.
 *
 * @param {object} props - The properties passed to the component.
 * @param {number} props.count - The count to display in the notification tag.
 * @param {string} [props.type="info"] - The type of notification tag to display.
 * @param {ReactNode} props.children - The content to display inside the notification tag.
 * @return {JSX.Element} The rendered notification tag component.
 *
 * @author James M Kambanga
 * Date: May 1, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */
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