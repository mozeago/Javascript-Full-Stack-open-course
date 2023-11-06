function Hello(props) {
    console.log(props)
    return (
        <div>
            <p>
                Hello {props.name}, you are {props.age}
            </p>
        </div>
    )
}