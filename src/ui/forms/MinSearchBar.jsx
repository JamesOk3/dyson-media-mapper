import Icons from "../Icons.jsx";
import {errorStyles, styles} from "./FormInputs.jsx";
import {useForm} from "react-hook-form";

function MinSearchBar() {
    const {register, handleSubmit, formState} = useForm();
    const {errors} = formState;

    function onSubmit(data) {
        console.log(data);
    }

    return (
        // <form className="sticky mb-7">
        <form onSubmit={handleSubmit(onSubmit)}  className="relative">
            <input type="text" id="search" name="search" placeholder="Search by name..."
                   className={`${errors.name ? errorStyles : ''} ${styles}`}
                   {...register("name", {required: "This field is required"})}
            />
            <button type="submit" className="absolute top-1/2 right-4 -translate-y-1/2">
                <Icons id="search-icon" />
            </button>
        </form>
    );
}

export default MinSearchBar;