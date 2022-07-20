import Row from "./style/Row";
import images from "../assets";
import CircleImage from "./CircleImage";
import RegularText from "./style/RegularText";

const MessengerUser = ({active=false}) => {
    return(
        <Row style={{
            margin:'10px 0',
            justifyContent:'space-between', 
            alignItems: 'center'
        }}>
            <Row>
            <CircleImage image={images.demoUser} />
            <RegularText style={{fontWeight:'bold'}}>Random Name</RegularText>
            </Row>
            
            <div style={{
                height: 10,
                width: 10,
                borderRadius: 5,
                backgroundColor: active ? 'green' : '#ffffff2a'
            }}>

            </div>
        </Row>
    )
}

export default MessengerUser;