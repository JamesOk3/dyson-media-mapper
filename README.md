# Dyson Media Mapper Web Application
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


## Libraries and Packages
Frontend Library: React 18.2.0
Styling: Tailwind CSS 3.4.1


## Commenting
### JSDoc
```
/**
 * Represents a user profile component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.userName - The name of the user.
 * @param {string} props.bio - The biography of the user.
 * @returns {React.ReactElement} A user profile element.
 */
function UserProfile({ userName, bio }) {
  return (
    <div className="user-profile">
      <h2>{userName}</h2>
      <p>{bio}</p>
    </div>
  );
}
```
### JavaDoc
```
/** 
 * AppLayout Component: Provide an overall layout of the App.
 *
 * @author James M Kambanga
 * Copyright (C) 2024 Newcastle University, UK
 */
```
