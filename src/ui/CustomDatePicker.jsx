
import Flatpickr from "react-flatpickr";

const styles = "w-full rounded border border-stroke bg-gray py-3 px-12 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
function CustomInput  ({id, value, defaultValue, inputRef, ...props }) {

    return <input id={id} className={styles}  {...props} defaultValue={defaultValue} ref={inputRef} />;


}

 function CustomDatePicker({id}) {
    return (
        <Flatpickr
            defaultValue="dd/mm/yyyy"
            options={{
                mode: 'single',
                dateFormat: 'M j, Y',
                prevArrow:
                    '<svg class="fill-current" width="7" height="11" viewBox="0 0 7 11"> <path d="M5.4 10.8l1.4-1.4-4-4 4-4L5.4 0 0 5.4z" /></svg>',
                nextArrow:
                    '<svg class="fill-current" width="7" height="11" viewBox="0 0 7 11"> <path d="M1.4 10.8L0 9.4l4-4-4-4L1.4 0l5.4 5.4z" /></svg>',
            }}
            render={
                ({defaultValue, value, ...props}, ref) => {
                    return <CustomInput id={id} defaultValue={defaultValue} inputRef={ref} />
                }
            }
        />
    )
}

export default CustomDatePicker;