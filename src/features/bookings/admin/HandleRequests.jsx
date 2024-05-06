import {useState} from "react";
import GeneralContainer from "../../../ui/containers/GeneralContainer.jsx";
import TabMenuContainer from "../../../ui/tabs/TabMenuContainer.jsx";
import TabButton from "../../../ui/tabs/TabButton.jsx";
import TabContent from "../../../ui/tabs/TabContent.jsx";
import NotificationTag from "../../../ui/NotificationTag.jsx";
import AllProductRequests from "./AllProductRequests.jsx";


/**
 * Renders the ProductRequests component containing tabs options.
 *
 * @return {JSX.Element} The rendered ProductRequests component.
 *
 * @author James M Kambanga
 * Date: May 5, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */

function HandleRequests() {
    const [openTab, setOpenTab] = useState(1);
    const [sortKey, setSortKey] = useState("pending");

    function handleClick({ id, key }) {
        setOpenTab(id);
        setSortKey(key);
    }

    return (
        <GeneralContainer>
            <TabMenuContainer>
                <TabButton id="1" openTab={openTab}
                           onClick={() => handleClick({id: 1, key: "pending"})}>
                    <NotificationTag count={5} type="danger">
                        New Requests
                    </NotificationTag>
                </TabButton>
                <TabButton id="2" openTab={openTab}
                           onClick={() => handleClick({id: 2, key: "approved"})}>
                    Approved
                </TabButton>
                <TabButton id="3" openTab={openTab}
                           onClick={() => handleClick({ id: 3, key: "unconfirmed"})}>
                    Unconfirmed
                </TabButton>
                <TabButton id="4" openTab={openTab}
                           onClick={() => handleClick({ id: 4, key: "sent-back"})}>
                    <NotificationTag count={5} type="danger">
                        Returned
                    </NotificationTag>
                </TabButton>
            </TabMenuContainer>

            <main>
                <TabContent openTab={openTab} id="1">
                    <AllProductRequests sortKey={sortKey} title="Waiting Approval" />
                </TabContent>
                <TabContent openTab={openTab} id="2">
                    <AllProductRequests sortKey={sortKey} title="Approved Requests" />
                </TabContent>
                <TabContent openTab={openTab} id="3">
                    <AllProductRequests sortKey={sortKey} title="Unconfirmed Requests" />
                </TabContent>
                <TabContent openTab={openTab} id="4">
                    <AllProductRequests sortKey={sortKey} title="Returned Products" />
                </TabContent>
            </main>
        </GeneralContainer>
    );
}

export default HandleRequests;