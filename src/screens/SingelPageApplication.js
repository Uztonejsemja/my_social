import {BrowserRouter, Routes, Route} from "react-router-dom"
import Header from "../components/Header"
import PageHolder from "./SubScreens/PageHolder"
import Spacer from "../components/Spacer"

const SinglePageApplication = () => {
    return(
        <BrowserRouter>
            <div style={{
            backgroundColor: 'black',
            minHeight: '100vh'
        }}>
            <Header />
            <Spacer height={20} />
            <PageHolder />
        </div>
        </BrowserRouter>
    )
}

export default SinglePageApplication;