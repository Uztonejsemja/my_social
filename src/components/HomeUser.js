import images from "../assets";
import StyledGrayCard from "./style/StyledGreyCard";
import CircleImage from "./CircleImage";

const HomeUser = () => {
    return(
        <StyledGrayCard style={{
            display: 'flex',
            alignItems: 'center'
        }}>
            <CircleImage image={images.demoUser} />
            <p style={{
                color: 'white',
                fontSize: 18,
                fontWeight: 'bold'
            }}>Username</p>
        </StyledGrayCard>
    )
}

export default HomeUser;