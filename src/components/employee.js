function Employee(props) {
    return (
        <>
            <h2>Employee {props.name}</h2>
            <h3>{props.role ? props.role : <h2>NO ROLE</h2>}</h3>
        </>
    )

}
export default Employee;