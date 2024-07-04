import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const Layout = () => {
    return (
        <div>
            <div className="lg:fixed w-full">
                <Navbar></Navbar>
            </div>
            <div className="bg-cover" style={{
                backgroundImage: "url(https://i.postimg.cc/9f4CBTYs/dark-black-background-design-with-stripes-1017-38064.avif)",
            }}>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Layout;