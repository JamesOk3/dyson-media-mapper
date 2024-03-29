import {Outlet} from "react-router-dom";
import {useState} from "react";
import Sidebar from "./sidebar/Index.jsx";
import Header from "./header/Index.jsx";

/**
 * AppLayout component sets the overall layout of the application.
 * @includes Sidebar, Header and main content area
 * All other components are rendered within the main content area.
 *
 * @return {JSX.Element} The main layout component.
 *
 * @author James M Kambanga
 * Date: March 28, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */

function AppLayout() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="dark:bg-boxdark-2 dark:text-bodydark" >
            {/* <!-- ===== Page Container Start ===== --> */}
            <div className="flex h-screen overflow-hidden">
                <Sidebar sidebarOpen={isSidebarOpen} setSidebarOpen={setIsSidebarOpen} />

                {/* <!-- ===== Content Area Start ===== --> */}
                <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
                    <Header sidebarOpen={isSidebarOpen} setSidebarOpen={setIsSidebarOpen} />

                    <main>
                        <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                            <Outlet />
                        </div>
                    </main>
                </div>
                {/* <!-- ===== Content Area End ===== --> */}
            </div>
            {/* <!-- ===== Page Container End ===== --> */}

        </div>
    );
}

export default AppLayout;