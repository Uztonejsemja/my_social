import MenuItem from "./MenuItem"
import HeaderSearch from "./HeaderSearch"
import images from "../assets"

const Header = () => {
    return(
        <header style={{
            margin: '0px 50px',
            padding: '20px 20px',
            borderBottom: '1px solid #ffffff2a',
            backgroundColor: 'black',
            display: 'flex',
            flexDirection: 'row',
            alignItems:'center',
            justifyContent: 'space-between'
        }}>
            <h1 style={{
                margin: 0,
                color:"white",
                fontSize: 30,
                fontWeight: 'bold'
            }}>My Social</h1>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignContent: 'center'
            }}>
                <div>
                    <MenuItem link="/" image={images.home} />
                    <MenuItem link="/video" image={images.play} />
                    <MenuItem link="/game" image={images.controller} />
                    <MenuItem link="/group-chat" image={images.group} />
                    <MenuItem link="/faq" image={images.question} />
                </div>
                <HeaderSearch />
            </div>
                
            
        </header>
    )
}

export default Header;