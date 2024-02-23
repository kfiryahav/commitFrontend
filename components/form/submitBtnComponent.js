function SubmitBtn(props) {
    return (
        <>
            <button type="submit" className={props.style}>{props.children}</button>
        </>
    )
}

export default SubmitBtn;