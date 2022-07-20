import Row from "./style/Row"
import RegularText from "./style/RegularText"
import images from "../assets"

const EventsHolder = () => {
    return(
        <div style={{
            backgroundColor: '#1a1c20',
            borderRadius: 10,
            padding: '10px 20px',

        }}>
            <Row style={{
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <RegularText style={{
                    fontSize: 18,
                    fontWeight: 'bold'
                }}>Events</RegularText>
                <img alt="menuImage" style={{
                    height: 30,
                    width: 30,
                }} src={images.menu} />
            </Row>

            <div style={{
                padding: 10,
                overflow: 'hidden',
                height: 200,
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
            }}>
                <img style={{
                    opacity: 0.5,
                    zIndex: 1,
                    height: 200,
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    left: 0,
                    bottom: 0
                    }} src={images.event} alt="eventImage" />
                <RegularText style={{
                    zIndex: 5,
                    fontSize: 16,
                    fontWeight: 700
                }}>Video game toasting</RegularText>

                <RegularText style={{
                    zIndex: 5,
                }}>This is a cool event where people go</RegularText>
            </div>
        </div>
    )
}

export default EventsHolder;