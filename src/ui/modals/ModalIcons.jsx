import spritesWithStyles from "../../assets/spritesWithStyles.svg";
/**
 * Renders an SVG icon using the provided ID and props.
 *
 * @param {Object} props - The props object containing the ID and other attributes.
 * @param {string} props.id - The ID of the icon to be rendered.
 * @param {Object} props.rest - The rest of the props to be spread onto the SVG element.
 * @return {JSX.Element} The rendered SVG element.
 *
 * @author James M Kambanga
 * Date: April 5, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */
function ModalIcons({ id, ...props }) {
    return (
        <svg {...props}>
            <use xlinkHref={`${spritesWithStyles}#${id}`}></use>
        </svg>
    );
}

ModalIcons.defaultProps = {
    width: 18,
    height: 18,
    fill: "none",
    viewBox: "0 0 18 18",
    className:"fill-current"
}

export default ModalIcons;