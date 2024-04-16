import Icons from "../Icons.jsx";

function SpinnerMin({label}) {
    return (
        <div className="m-1.5 flex items-center">
            <Icons id="spinner" className="animate-spin w-4 h-4 fill-current shrink-0" viewBox="0 0 16 16"/>
                <span className="ml-2">{label} </span>
        </div>
    );
}

export default SpinnerMin;