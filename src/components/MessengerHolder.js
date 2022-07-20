import StyledGrayCard from "./style/StyledGreyCard"
import Row from "./style/Row"
import RegularText from "./style/RegularText"
import MessengerUser from "./MessengerUser"

const MessengerHolder = () => {
    return(
        <StyledGrayCard>
            <Row style={{justifyContent: 'space-between'}}>
                <RegularText>Messenger</RegularText>
                <RegularText style={{
                    color: '#1878F0'
                }}>All</RegularText>
            </Row>
            <MessengerUser active />
            <MessengerUser active />
            <MessengerUser />
            <MessengerUser />
        </StyledGrayCard>
    )
}

export default MessengerHolder