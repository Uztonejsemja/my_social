const CircleImage = ({image}) => {
    return(
        <img src={image} alt="imagename" style={{
            height: 40,
            width: 40,
            borderRadius: 22,
            marginRight: 20,
            border: '2px solid gray'
        }} />
    )
}

export default CircleImage;