import Icons from "../../ui/Icons.jsx";
import {useGetAllTeams} from "./hooks/useGetAllTeams.js";
import {useState} from "react";
import TeamList from "./TeamList.jsx";
import Spinner from "../../ui/spinners/Spinner.jsx";
import Empty from "../../ui/Empty.jsx";
import AddTeam from "./AddTeam.jsx";
import Heading from "../../ui/Heading.jsx";

/**
 * Renders the detailed information of a team.
 *
 * @return {JSX.Element} The JSX element representing the team details.
 *
 * @author James M Kambanga
 * Date: April 24, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */

function TeamDetails() {
    const [active, setActive] = useState(null)
    const [ formHidden, setFormHidden ] = useState(true);
    const {isFetchingTeam, teams} = useGetAllTeams();

    const handleToggle = (id) => {
        if (active === id) {
            setActive(null);
        } else {
            setActive(id);
        }
    };

    if (isFetchingTeam) return <Spinner />;
    if (!teams) return <Empty resourceName="Team" />

    return (
        <>
            <div className="mb-6">
                <button className="btn-sm px-3 py-2 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:text-indigo-500 hover:border-primary dark:hover:border-slate-600 text-slate-600 dark:text-slate-300"
                        onClick={() => setFormHidden(!formHidden)}>
                    {formHidden ? <Icons id="plus" className="fill-current text-slate-400 dark:text-slate-500 mr-2"/> :
                        <Icons id="minus" width="15" height="3" viewBox="0 0 15 3" className="fill-current text-slate-400 dark:text-slate-500 mr-2"/>
                    }
                    <span>Create New Team</span>
                </button>
                {/*<AddTeam formHidden={formHidden} />*/}
                <AddTeam formHidden={formHidden} hideForm={setFormHidden} />
            </div>
            <Heading title="Media Teams" />
            {teams?.map((team) => (
                <TeamList key={team.id}
                          leader = {team.leaderData}
                          members={team.members}
                          team={team}
                          handleToggle={handleToggle}
                          active={active}/>
            ))}
        </>
    )
}

export default TeamDetails;