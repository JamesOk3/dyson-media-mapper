import {Link} from "react-router-dom";
import {ApproveButton, ButtonGroup, EditButton, RejectButton} from "../../../ui/buttons/Button.jsx";
import defaultUser from "../../../images/user/default-user.jpeg";
import {format} from "date-fns";
import {useState} from "react";
import FormRow from "../../../ui/forms/FormRow.jsx";
import Icons from "../../../ui/Icons.jsx";
import {styles} from "../../../ui/forms/FormInputs.jsx";
import toast from "react-hot-toast";
import {useUpdateBooking} from "../hooks/useUpdateBooking.js";
import {useUpdateQuantity} from "../../products/hooks/useUpdateQuantity.js";
import SpinnerMin from "../../../ui/spinners/SpinnerMin.jsx";
/**
 * Renders an approval form for a booking.
 *
 * @param {Object} props - The props object containing the booking data.
 * @param {Object} props.booking - The booking object containing information about the booking.
 * @return {JSX.Element} The rendered approval form.
 *
 * @author James M Kambanga
 * Date: May 5, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */

function ApprovalForm({booking}) {
    const {quantity, product, pickup_location: {address, city, postcode}, team, event} = booking;
    const {name, quantity: availableQuantity, price, category} = product;

    const [showEditForm, setShowEditForm] = useState(false);
    const [approvedQuantity, setApprovedQuantity] = useState(quantity);
    const [comments, setComments] = useState("")
    const {updateBooking, isUpdating: isUpdatingBooking} = useUpdateBooking();
    const {updateQuantity, isUpdating: isUpdatingQuantity} = useUpdateQuantity();
    const isUpdating = isUpdatingBooking || isUpdatingQuantity;

    function handleApprove() {
        if (Number(approvedQuantity) > availableQuantity) {
            toast.error("Quantity cannot be greater than available quantity")
            return;
        }

        const newProductQuantity = availableQuantity - Number(approvedQuantity);

        const newBookingData = {
            quantity: Number(approvedQuantity),
            status: "approved",
            comments,
        }

        updateBooking({id: booking.id, newBookingData}, {
            onSuccess: () => {
                updateQuantity({
                    quantity: newProductQuantity,
                    id: product.id
                }, {
                    onSuccess: () => {
                        setShowEditForm(false);
                    }
                })
            }
        })

    }

    function handleReject() {
        const newBookingData = {
            status: "unconfirmed",
            comments,
        }

        updateBooking({id: booking.id, newBookingData}, {
            onSuccess: () => {
                setShowEditForm(false);
            }
        })
    }

    return (
        <div className="flex h-[100dvh] overflow-hidden">
            <main className="grow overflow-y-auto overflow-x-hidden">

                <div className="max-w-7xl px-4 sm:px-6 lg:px-8 py-8  mx-auto scroll-auto ">
                    <div className="flex flex-col lg:flex-row lg:space-x-8 xl:space-x-16">

                        <div>
                            <h4 className=" mb-2 text-left text-title-xsm font-bold text-black dark:text-white sm:text-title-md">
                                {name}
                            </h4>
                            <div className="grid gap-x-8 gap-y-2 grid-cols-2 font-medium mb-6">
                                <div>Requested Quantity</div>
                                <div className="flex items-center font-semibold">
                                    {showEditForm ? (
                                        <input className="bg-gray pl-2 rounded-md" type="number" min="1" max="5" defaultValue={quantity}
                                               onChange={(e) => setApprovedQuantity(e.target.value)}/>
                                    ) : (
                                        <>
                                            <span> {quantity} </span>
                                            <span><EditButton onClick={() => setShowEditForm(!showEditForm)}/></span>

                                        </>
                                    )}
                                </div>
                                <div>Available Quantity</div>
                                <div className="font-semibold">{availableQuantity}</div>
                                <div>Product Price</div>
                                <div className="font-semibold">{price}</div>
                                <div>Category</div>
                                <div className="font-semibold">{category?.categoryName}</div>
                            </div>
                        </div>

                        {/* Right side */}
                        <div className="">
                            <h2 className="text-xl leading-snug text-slate-800 dark:text-slate-100 font-bold mb-2">
                                Requested By <span>{team.name}</span>
                            </h2>
                            <div className="flex items-center mb-3">
                                <Link className="block mr-2 shrink-0" to="#0">
                                    <img className="rounded-full" src={defaultUser}
                                         width="32" height="32"
                                         alt="User 04"/>
                                </Link>
                                <div className="text-sm whitespace-nowrap nb">
                                    Managed by{' '}
                                    <Link className="font-semibold text-slate-800 dark:text-slate-100"
                                          to="#0">
                                        Leader Name
                                    </Link>
                                </div>
                            </div>
                            <div className="grid gap-x-8 gap-y-2 grid-cols-2 font-medium mb-6">
                                {/*<p>{`${leader?.postcode}, ${leader?.city}`}</p>*/}
                                <div>Physical Address</div>
                                <div className="font-semibold">Leader Address</div>
                                <div>Phone Number</div>
                                <div className="font-semibold">Number</div>
                                <div>Email</div>
                                <div className="font-semibold">wwedia@eamil</div>

                            </div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <h3 className="font-semibold mb-2">Pickup Location</h3>
                        <p>{`${address}, ${city}, ${postcode}`}</p>
                    </div>
                    <FormRow id="comments"
                             icon={<Icons id="pen" width="20" height="20" viewBox="0 0 20 20"/>}>
                             <textarea className={` ${styles}`} name="comments" id="comments" rows="4"
                                       placeholder="Comments"
                                       onChange={(e) => setComments(e.target.value)}>
                            </textarea>
                    </FormRow>
                    <div className="flex items-center sm:mr-4">
                        <ButtonGroup>
                            <ApproveButton onClick={handleApprove}>
                                {isUpdating ? <SpinnerMin label="Updating"/> : "Approve"}
                            </ApproveButton>
                            <RejectButton onClick={handleReject}>Reject</RejectButton>
                        </ButtonGroup>
                        {/*comments input*/}
                    </div>

                    <hr className="my-6 border-t border-slate-200 dark:border-slate-700"/>

                    <div>
                        <h2 className="text-xl leading-snug text-slate-800 dark:text-slate-100 font-bold mb-2">
                            Event: {event.eventName}
                        </h2>
                        <div className="text-sm font-semibold text-indigo-500 uppercase mb-2">
                            date: {format(event.eventDate, 'eeee, MMM dd, yyyy')} {/*&mdash; {event.startTime} &rarr; {event.endTime}*/}
                        </div>
                        <div>
                            <h2 className="text-xl leading-snug text-slate-800 dark:text-slate-100 font-bold mb-2">Location</h2>
                            <div className="font-medium mb-6">
                                <h5>{event.address}</h5>
                                <p>{`${event.city}, ${event.postcode}`}</p>
                            </div>
                            <h2 className="text-xl leading-snug text-slate-800 dark:text-slate-100 font-bold mb-2">
                                Description
                            </h2>
                            <p className="mb-6">
                                {event.description}
                            </p>
                        </div>

                    </div>
                    <hr className="my-6 border-t border-slate-200 dark:border-slate-700"/>

                </div>

            </main>
        </div>
    );
}

export default ApprovalForm;
