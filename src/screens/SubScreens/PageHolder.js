import HomeUser from "../../components/HomeUser"
import MessengerHolder from "../../components/MessengerHolder"
import Spacer from "../../components/Spacer"
import EventsHolder from "../../components/EventsHolder"
import { Routes } from "react-router"
import { Route } from "react-router"
import PostSCreen from "./PostScreen"
import GameScreen from "./GameScreen"
import FAQScreen from "./FAQScreen"
import VideosScreen from "./VideosScreen"
import GroupChat from "./GroupChat"

const PageHolder = () => {
    return(
        <div style={{
            padding: 10,
            display: 'flex',
                 
            }}>
            {/* user info */}
            <div style={{
                width: '20%',

            }}>
                <HomeUser />
                <Spacer height={20} />
                <MessengerHolder />
            </div>
            {/* routing page */}
            <Spacer width={50} />
            <div style={{
                flex: 1
            }}>
                <Routes>
                    <Route path="/" element={<PostSCreen />} />
                    <Route path="/game" element={<GameScreen />} />
                    <Route path="/faq" element={<FAQScreen />} />
                    <Route path="/video" element={<VideosScreen />} />
                    <Route path="/group-chat" element={<GroupChat />} />
                </Routes>
            </div>
            <Spacer width={50} />
            {/* events */}
            <div style={{
                marginRight: 40,
                width: '25%'
            }}>
                <EventsHolder />
            </div>
        </div>
    )
}

export default PageHolder;