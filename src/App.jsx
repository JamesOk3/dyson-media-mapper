import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";

import AppLayout from "./layout/AppLayout.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Products from "./pages/Products.jsx";
import Stock from "./features/products/Stock.jsx";
import AddProduct from "./features/products/AddProduct.jsx";
import Categories from "./features/products/Categories.jsx";
import Events from "./pages/Events.jsx";
import Calendar from "./features/events/Calendar.jsx";
import AddEvent from "./features/events/AddEVent.jsx";
import Bookings from "./pages/Bookings.jsx";
import ProductRequests from "./features/bookings/ProductRequests.jsx";
import PickupLocation from "./features/bookings/PickupLocationList.jsx";
import Teams from "./pages/Teams.jsx";
import Users from "./pages/Users.jsx";
import Guests from "./pages/Guests.jsx";
import EventReports from "./features/reports/EventReports.jsx";
import ProductReports from "./features/reports/ProductReports.jsx";
import CustomerReports from "./features/reports/CustomerReports.jsx";
import TeamReports from "./features/reports/TeamReports.jsx";
import Settings from "./pages/Settings.jsx";
import Administration from "./features/settings/Administration.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import Homepage from "./pages/Homepage.jsx";
import NewPassword from "./features/auth/NewPassword.jsx";
import Login from "./pages/Login.jsx";
import {Toaster} from "react-hot-toast";
import CreateUser from "./features/users/CreateUser.jsx";
import UserList from "./features/users/UserList.jsx";
import ResetPassword from "./features/auth/ResetPassword.jsx";
import Account from "./pages/Account.jsx";
import ProtectedRoute from "./ui/ProtectedRoute.jsx";

/**
 * Renders the main application component.
 * Provide routes to all parts of the application.
 *
 * @return {JSX.Element} The main application component.
 *
 * @author James M Kambanga
 * Date: March 29, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 0,
        }
    }
});

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} />

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/homepage" element={<Homepage />} />
                    <Route element={<ProtectedRoute><AppLayout /></ProtectedRoute>} >
                        {/*<Route index element={
                            <>
                            <PageTitle title="Media Mapper Dashboard | Dyson - External Media Team Management" />
                            <Dashboard />
                            </>
                        }/>*/}
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/products" element={<Products />} >
                            <Route index element={<Navigate to="stock" />} />
                            <Route path="stock" element={<Stock />} />
                            <Route path="add-product" element={<AddProduct />} />
                            <Route path="categories" element={<Categories />} />
                        </Route>
                        <Route path="/events" element={<Events />} >
                            <Route index element={<Navigate to="calendar" />} />
                            <Route path="calendar" element={<Calendar />} />
                            <Route path="add-event" element={<AddEvent />} />
                        </Route>
                        <Route path="/bookings" element={<Bookings />} >
                            <Route index element={<Navigate to="product-requests" />} />
                            <Route path="product-requests" element={<ProductRequests />} />
                            <Route path="pickup-locations" element={<PickupLocation />} />
                        </Route>
                        <Route path="/teams" element={<Teams />} />
                        <Route path="/users" element={<Users />} >
                            <Route index element={<Navigate to="users-list" />}/>
                            <Route path="users-list" element={<UserList />} />
                            <Route path="create-user" element={<CreateUser />} />
                        </Route>
                        <Route path="/guests" element={<Guests />} />
                        <Route path="/reports" element={<Navigate to="general-reports" />} >
                            <Route path="general-reports" element={<EventReports />} />
                            <Route path="products-statistics" element={<ProductReports />} />
                            <Route path="customers-statistics" element={<CustomerReports />} />
                            <Route path="teams-statistics" element={<TeamReports />} />
                        </Route>
                        <Route path="account" element={<Account />} />
                        <Route path="/settings" element={<Settings />} >
                            <Route path="/settings/admin" element={<Administration />} />
                        </Route>

                    </Route>
                    <Route path="/login" element={<Login />} />
                    <Route path="/new-password" element={<NewPassword />} />
                    <Route path="/reset-password" element={<ResetPassword />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>

                <Toaster position="top-center"
                         gutter={12}
                         containerStyle={{margin: "8px"}}
                         toastOptions={{
                             success: {duration: 3000},
                             error: {duration: 5000},
                             className: " bg-gray py-4 px-6 max-w-[400px]",
                         }
                }/>
            </BrowserRouter>
        </QueryClientProvider>
    )
}

export default App;
