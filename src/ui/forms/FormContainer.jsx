
function FormContainer({children}) {
    return (
        <div className="p-7 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            {children}
        </div>
    );
}

export default FormContainer;