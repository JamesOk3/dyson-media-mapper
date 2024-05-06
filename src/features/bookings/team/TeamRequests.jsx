import {useState} from "react";
import GeneralContainer from "../../../ui/containers/GeneralContainer.jsx";
import TabMenuContainer from "../../../ui/tabs/TabMenuContainer.jsx";
import TabButton from "../../../ui/tabs/TabButton.jsx";
import TabContent from "../../../ui/tabs/TabContent.jsx";
import RequestForm from "../RequestForm.jsx";
import NotificationTag from "../../../ui/NotificationTag.jsx";
import AllTeamRequestsList from "./AllTeamRequestsList.jsx";


/**
 * Renders the ProductRequests component containing tabs options.
 *
 * @return {JSX.Element} The rendered ProductRequests component.
 *
 * @author James M Kambanga
 * Date: May 5, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */

function TeamRequests({role}) {
    const [openTab, setOpenTab] = useState(1);
    const [sortKey, setSortKey] = useState("approved");

    function handleClick({ id, key }) {
        setOpenTab(id);
        setSortKey(key);
    }

    return (
        <GeneralContainer>
            <TabMenuContainer>
                <TabButton id="1" openTab={openTab}
                           onClick={() => handleClick({id: 1, key: "approved"})}>
                    <NotificationTag count={5}>
                        Approved
                    </NotificationTag>
                </TabButton>
                <TabButton id="2" openTab={openTab}
                           onClick={() => handleClick({id: 2, key: "pending"})}>
                    Pending
                </TabButton>
                <TabButton id="3" openTab={openTab}
                           onClick={() => handleClick({ id: 3, key: "unconfirmed"})}>
                    Unconfirmed
                </TabButton>
                <TabButton id="4" openTab={openTab}
                           onClick={() => handleClick({ id: 4, key: "sent-back"})}>
                    Sent Back
                </TabButton>
                <TabButton id="5" openTab={openTab}
                           onClick={() => handleClick({id: 5, key: ""})}>
                    {role === "leader" ? "New Request" : " "}
                </TabButton>
            </TabMenuContainer>

            <main>
                <TabContent openTab={openTab} id="1">
                    <AllTeamRequestsList sortKey={sortKey} title="Approved Requests" />
                </TabContent>
                <TabContent openTab={openTab} id="2">
                    <AllTeamRequestsList sortKey={sortKey} title="Pending Requests" />
                </TabContent>
                <TabContent openTab={openTab} id="3">
                    <AllTeamRequestsList sortKey={sortKey} title="Unconfirmed Requests" />
                </TabContent>
                <TabContent openTab={openTab} id="4">
                    <AllTeamRequestsList sortKey={sortKey} title="Returned Requests" />
                </TabContent>
                <TabContent openTab={openTab} id="5">
                    {role === "leader" ? <RequestForm /> : " "}
                </TabContent>
            </main>
        </GeneralContainer>
    );
}

export default TeamRequests;