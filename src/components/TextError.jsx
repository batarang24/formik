const TextError=(props)=>{
    const divstyle={
        color:'red'
    }
    return (
        <div style={divstyle}>
            {props.children}
        </div>
    )
}

export default TextError