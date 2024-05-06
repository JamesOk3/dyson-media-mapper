import BackButton from "../../ui/buttons/BackButton.jsx";
import {Link} from "react-router-dom";
import {useGetProductById} from "../products/hooks/useGetProductById.js";
import Spinner from "../../ui/spinners/Spinner.jsx";

/**
 * Renders the details of a product.
 *
 * @return {JSX.Element} The JSX element containing the product details.
 *
 * @author James M Kambanga
 * Date: May 6, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */
function ProductDetails() {
    const {isFetchingProduct, product} = useGetProductById();
    if (isFetchingProduct) return <Spinner/>
    const {  name, description, photo, status, price, quantity, category} = product;


    return (
        <div className="flex h-[100dvh] overflow-hidden">
            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

                <main className="grow">
                    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full">
                        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row lg:space-x-8 xl:space-x-16">
                            <div>
                                <div className="mb-6">
                                    <BackButton/>
                                </div>
                                <h4 className="flex mb-2 text-left text-title-xsm font-bold text-black dark:text-white sm:text-title-md">
                                    {name}
                                    <span>
                                        {/*<EditButton onClick={() => navigate("edit", {replace: true})}/>*/}
                                        {/*<EditButton />*/}
                                    </span>
                                </h4>

                                <div className="space-y-3 sm:flex sm:items-center sm:justify-between sm:space-y-0 mb-6">
                                    <div className="flex items-center sm:mr-4">
                                        <span>{category.categoryName}</span>
                                    </div>
                                    {/* Right side */}
                                    <div className="flex flex-wrap items-center sm:justify-end space-x-2">
                                        <div
                                            className="text-sm inline-flex items-center font-medium bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-400 rounded-full text-center px-2.5 py-1">
                                            <span>{quantity}</span>
                                        </div>
                                        <div className="text-xs inline-flex font-medium uppercase bg-emerald-100 dark:bg-emerald-400/30 text-emerald-600 dark:text-emerald-400 rounded-full text-center px-2.5 py-1">
                                            {status}
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-2">
                                    <img src={photo} alt="profile-photo"/>
                                </div>

                                <div>
                                    <h2 className="text-xl leading-snug text-slate-800 dark:text-slate-100 font-bold mb-2">Summary</h2>
                                    <div className="font-medium mb-6">
                                        <ul>
                                            <li>Available Quantity: {quantity}</li>
                                            <li>Price: {price}</li>
                                            <li>Category: {category.categoryName}</li>
                                        </ul>
                                    </div>

                                    <h2 className="text-xl leading-snug text-slate-800 dark:text-slate-100 font-bold mb-2">
                                        Description
                                    </h2>
                                    <p className="mb-6">{description}</p>

                                </div>
                                <hr className="my-6 border-t border-slate-200 dark:border-slate-700"/>

                                <div>
                                    <h2 className="text-xl leading-snug text-slate-800 dark:text-slate-100 font-bold mb-2">
                                        Upcoming Events
                                    </h2>
                                    {/* {!teamEvents?.length ? <p>No events assigned</p> : (
                                        teamEvents?.map((event) => (
                                            <EventItem key={event.id} event={event} isFetching={isFetching}/>
                                        ))
                                    )}*/}
                                    <p>Events where the product will be showcased</p>

                                </div>
                            </div>

                            {/* Sidebar */}
                            <div className="space-y-4">
                                <div
                                    className="bg-white dark:bg-slate-800 p-5 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 lg:w-72 xl:w-80">
                                    <div className="flex justify-between space-x-1 mb-5">
                                        <div className="text-sm text-slate-800 dark:text-slate-100 font-semibold">
                                            Pending Requests
                                        </div>
                                        <Link
                                            className="text-sm font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400"
                                            to="#0">
                                            View All
                                        </Link>
                                    </div>
                                    <ul className="space-y-3">
                                        {/*{members?.map((member, index) => (
                                            <ListItem2 key={index} image={member?.avatar || defaultUser}
                                                       content={`${member?.firstname} ${member?.lastname}`}/>
                                        ))
                                        }*/}
                                        <p>Pending requests</p>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default ProductDetails;