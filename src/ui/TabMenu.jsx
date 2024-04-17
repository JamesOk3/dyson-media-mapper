import {ButtonLink, ButtonLinkContainer, ButtonLinkGroup} from "./buttons/ButtonLink.jsx";

function TabMenu() {

    return (
        <ButtonLinkContainer>
            <ButtonLinkGroup>
                <ButtonLink to="#"  >
                    Available Products
                </ButtonLink>
                <ButtonLink to="/products/categories">
                    Product Categories
                </ButtonLink>
            </ButtonLinkGroup>
        </ButtonLinkContainer>
    );
}

export default TabMenu;