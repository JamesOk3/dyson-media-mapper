import { useState } from "react"

/**
 * Generate a sidebar link group component.
 *
 * @param {Object} children - The content to be rendered within the sidebar link group.
 * @param {boolean} activeCondition - The condition determining if the link group is active.
 * @return {JSX.Element}
 *
 * @author James M Kambanga
 * Date: March 29, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */
const SidebarLinkGroup = ({ children, activeCondition }) => {
    const [open, setOpen] = useState(activeCondition)

    const handleClick = () => {
        setOpen(!open)
    }

    return <li>{children(handleClick, open)}</li>
}

export default SidebarLinkGroup