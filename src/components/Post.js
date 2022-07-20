import CircleImage from "./CircleImage"
import images from "../assets"
import RegularText from "./style/RegularText"
import Spacer from "./Spacer"
import Row from "./style/Row"


const Post = ({body, userId}) => {
    return(
        <div style={{
            marginBottom: 10,
            borderRadius: 10,
            backgroundColor: '#1a1c20',
        }}>
            <Row style={{
                padding: "10px 20px",
                justifyContent: 'space-between'
            }}>
                <Row>
                    <CircleImage image={images.demoUser} />
                    <div>
                        <RegularText style={{
                            margin: 0,
                            fontWeight: 500,
                            fontSize: 16
                        }}>{userId}</RegularText>
                        <RegularText style={{fontSize: 12}}>18 minutes ago..</RegularText>
                        <Spacer height={10} />
                        <RegularText>{body}</RegularText>
                    </div>
                </Row>
                <img alt="userMenu" src={images.menu} style={{
                    height: 30,
                    width: 30
                }} />
            </Row>
            {/* <Spacer height={10} />
            <img alt="postImage" src={images.demoUser} style={{
                height: 500,
                width: '100%',
            }} /> */}
        </div>
    )
}

export default Post;