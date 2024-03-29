import { useEffect } from "react"
import { useLocation } from "react-router-dom"

/**
 * Updates the document title based on the provided title when rendering different components.
 *
 * @param {Object} title - The new title to set for the document.
 * @return {null} This component does not render anything.
 *
 * @author James M Kambanga
 * Date: March 27, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */
const PageTitle = ({ title }) => {
    const location = useLocation()

    useEffect(() => {
        document.title = title
    }, [location, title])

    return null
}

export default PageTitle
