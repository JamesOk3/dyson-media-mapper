import { useEffect, useState } from "react"

/**
 * Custom hook that allows you to store and retrieve values from local storage.
 *
 * @param {string} key - The key used to identify the value in local storage.
 * @param {any} initialValue - The initial value to be stored in local storage if no value is found.
 * @return {Array} An array containing the stored value and a function to update the stored value.
 *
 * @author James M Kambanga
 * Date: March 27, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */
function useLocalStorage(key, initialValue) {
    // State to store our value
    // Pass  initial state function to useState so logic is only executed once
    const [storedValue, setStoredValue] = useState(() => {
        try {
            // Get from local storage by key
            const item = window.localStorage.getItem(key)
            // Parse stored json or if none return initialValue
            return item ? JSON.parse(item) : initialValue
        } catch (error) {
            console.log(error)
            return initialValue
        }
    })

    // useEffect to update local storage when the state changes
    useEffect(() => {
        try {
            // Allow value to be a function so we have same API as useState
            const valueToStore =
                typeof storedValue === "function"
                    ? storedValue(storedValue)
                    : storedValue
            // Save state
            window.localStorage.setItem(key, JSON.stringify(valueToStore))
        } catch (error) {
            console.log(error)
        }
    }, [key, storedValue])

    return [storedValue, setStoredValue]
}

export default useLocalStorage
