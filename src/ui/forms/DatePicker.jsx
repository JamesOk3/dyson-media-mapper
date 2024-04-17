import {useEffect} from 'react';
import 'flatpickr/dist/flatpickr.min.css';
import flatpickr from 'flatpickr';
import Icons from "../Icons.jsx";

/**
 * Initializes the flatpickr date picker for the date input field.
 *
 * @return {JSX.Element} The JSX for the date picker component.
 *
 * @author James M Kambanga
 * Date: April 1, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */
function DatePicker({id, name, register}) {

    useEffect(() => {
        // Init flatpickr
        flatpickr('.form-datepicker', {
            mode: 'single',
            static: true,
            dateFormat: 'M j, Y',
            prevArrow:
                '<svg class="fill-current" width="7" height="11" viewBox="0 0 7 11"> <path d="M5.4 10.8l1.4-1.4-4-4 4-4L5.4 0 0 5.4z" /></svg>',
            nextArrow:
                '<svg class="fill-current" width="7" height="11" viewBox="0 0 7 11"> <path d="M1.4 10.8L0 9.4l4-4-4-4L1.4 0l5.4 5.4z" /></svg>',
        });
    }, []);

    return (
        <div>
            <div className="relative z-30 bg-gray">

                <input className="form-datepicker w-full rounded border-[1.5px] border-stroke bg-transparent px-12 py-3 font-normal outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    placeholder="dd/mm/yyyy"
                       id={id} name={name}
                    data-class="flatpickr-right"
                       {...register(name, {required: "This field is required"})}
                />

                <div className="pointer-events-none absolute inset-0 left-4 flex items-center">
                    <Icons id="calendar" className="fill-current" />
                </div>
            </div>
        </div>
    );
}

export default DatePicker;
