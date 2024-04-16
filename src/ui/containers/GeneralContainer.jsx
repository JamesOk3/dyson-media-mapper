
function GeneralContainer({children, className}) {
    const styles = `p-7 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark ${className ? className : ''}`


    return (
        <div className={styles}>
            {children}
        </div>
    );
}

export default GeneralContainer;