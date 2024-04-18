import ModalIcons from "./ModalIcons.jsx";

/**
 * Renders a confirmation modal for deleting a specific resource.
 *
 * @param {string} resourceName - The name of the resource to be deleted.
 * @param {function} onConfirm - The function to call when deletion is confirmed.
 * @param {function} onCloseModal - The function to call when the modal is closed.
 * @param {string} id - The unique identifier of the resource to be deleted.
 * @return {JSX.Element} The JSX element representing the confirmation modal.
 *
 * @author James M Kambanga
 * Date: April 9, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */

function ConfirmDelete({ resourceName, onConfirm, onCloseModal, id }) {
    return (
        <div>
            <span className="mx-auto inline-block">
                <ModalIcons id="danger" width="60" height="60" viewBox="0 0 60 60"/>
            </span>

            <h3 className=" mt-5.5 pb-2 text-xl font-bold text-black dark:text-white sm:text-2xl">
               Deleting {resourceName}
            </h3>
            <p className="mb-10">
                Are you sure you want to delete this {resourceName} permanently? This action cannot be undone.
            </p>
            <div className="-mx-3 flex flex-wrap gap-y-4">
                <div className="2xsm:w-1/2 w-full px-3">
                    <button onClick={onCloseModal} className="block w-full rounded border border-stroke bg-gray p-3 text-center font-medium text-black transition hover:border-meta-1 hover:bg-meta-1 hover:bg-opacity-90 hover:text-white dark:border-strokedark dark:bg-meta-4 dark:text-white dark:hover:border-meta-1 dark:hover:bg-meta-1">
                        Cancel
                    </button>
                </div>
                <div className="2xsm:w-1/2 w-full px-3">
                    <button className="block w-full rounded border border-meta-1 bg-meta-1 p-3 text-center font-medium text-white transition hover:bg-opacity-90"
                        onClick={() => {
                        onConfirm(id);
                        onCloseModal();}
                    } >Delete
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ConfirmDelete;


