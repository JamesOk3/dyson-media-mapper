import {useState, createContext, useContext, cloneElement} from 'react';
import Icons from "../Icons.jsx";
import {createPortal} from "react-dom";
import {useOutsideClick} from "../../hooks/useOutsideClick.js";

const ModalContext = createContext();

function Modal ({ children }) {
    const [openName, setOpenName] = useState("");
    const close = () => setOpenName("");
    const open = (name) => setOpenName(name);
    return (
        <ModalContext.Provider value={{ openName, setOpenName, close, open }}>
            {children}
        </ModalContext.Provider>
    );
}

/* function that opens the modal when it's button is clicked */
function Open ( { children, opens: opensWindowName } ) {
    const { open } = useContext(ModalContext);

    return cloneElement(children, { onClick: () => open(opensWindowName) });
}

function Window({children, name, type}) {
    const {openName, close} = useContext(ModalContext)
    const ref = useOutsideClick(close);

    if (name !== openName) return null;

    return createPortal (
        <div className={`fixed left-0 top-0 z-9999 flex h-full min-h-screen w-full items-center justify-center bg-black/90 px-4 py-5 `}>
            <div ref={ref} className="relative md:px-15 w-full max-w-142.5 rounded-lg bg-white px-8 py-12 text-center dark:bg-boxdark md:py-15">
                {type && (
                    <button className={`absolute right-6 top-6 flex h-7 w-7 items-center justify-center rounded-full ${type === "danger" ? "bg-rose-200 text-rose-600" : "bg-primary"}  text-gray hover:bg-opacity-90 hover:text-white`}
                        onClick={close}>
                        <Icons id="close" height="10" width="10" viewBox="0 0 13 13"
                               className="fill-current stroke-current"/>
                    </button>
                )}
                <div>{cloneElement(children, {onCloseModal: close})}</div>
            </div>
        </div>,
        document.body
    )

}

Modal.Open = Open;

Modal.Window = Window;

export default Modal;

/*function Modal ({ children }) {
   const [modalOpen, setModalOpen] = useState(true);

   const trigger = useRef(null);
   const modal = useRef(null);

   // close on click outside
   useEffect(() => {
       const clickHandler = ({ target }) => {
           if (!modal.current) return;
           if (
               !modalOpen ||
               modal.current.contains(target) ||
               trigger.current.contains(target)
           )
               return;
           setModalOpen(false);
       };
       document.addEventListener('click', clickHandler);
       return () => document.removeEventListener('click', clickHandler);
   });

   // close if the esc key is pressed
   useEffect(() => {
       const keyHandler = ({ keyCode }) => {
           if (!modalOpen || keyCode !== 27) return;
           setModalOpen(false);
       };
       document.addEventListener('keydown', keyHandler);
       return () => document.removeEventListener('keydown', keyHandler);
   });

   return createPortal (


           <div>
               <button
                   ref={trigger}
                   onClick={() => setModalOpen(!modalOpen)}
                   className="rounded-md bg-primary px-9 py-3 font-medium text-white hover:bg-opacity-90"
               >
                   Modal 2
               </button>
               <div className={`fixed left-0 top-0 z-999999 flex h-full min-h-screen w-full items-center justify-center bg-black/90 px-4 py-5 ${
                       modalOpen ? 'block' : 'hidden'
                   }`}>
                   <div ref={modal}
                       onFocus={() => setModalOpen(true)}
                       onBlur={() => setModalOpen(false)}
                       className="relative md:px-17.5 w-full max-w-142.5 rounded-lg bg-white px-8 py-12 text-center dark:bg-boxdark md:py-15">

                     <span className="mx-auto inline-block">
                         <ModalIcons id="danger" width="60" height="60" viewBox="0 0 60 60"/>
                     </span>
                       <h3 className="mt-5.5 pb-2 text-xl font-bold text-black dark:text-white sm:text-2xl">
                           Deactivate Your Account
                       </h3>
                       <p className="mb-10">
                           Lorem Ipsum is simply dummy text of the printing and typesetting
                           industry Lorem Ipsum been.
                       </p>
                       <div className="-mx-3 flex flex-wrap gap-y-4">
                           <div className="2xsm:w-1/2 w-full px-3">
                               <button
                                   onClick={() => setModalOpen(false)}
                                   className="block w-full rounded border border-stroke bg-gray p-3 text-center font-medium text-black transition hover:border-meta-1 hover:bg-meta-1 hover:text-white dark:border-strokedark dark:bg-meta-4 dark:text-white dark:hover:border-meta-1 dark:hover:bg-meta-1"
                               >
                                   Cancel
                               </button>
                           </div>
                           <div className="2xsm:w-1/2 w-full px-3">
                               <button
                                   className="block w-full rounded border border-meta-1 bg-meta-1 p-3 text-center font-medium text-white transition hover:bg-opacity-90">
                                   Deactivate
                               </button>
                           </div>
                       </div>
                       <button className="absolute right-6 top-6 flex h-7 w-7 items-center justify-center rounded-full bg-rose-100 text-rose-600 transition hover:bg-rose-600 hover:text-white"
                           onClick={() => setModalOpen(false)}>
                           <Icons id="close" height="10" width="10" viewBox="0 0 13 13"
                                  className="fill-current stroke-current"/>
                       </button>
                   </div>


               </div>


           </div>, document.body
   );
}

export default Modal;*/