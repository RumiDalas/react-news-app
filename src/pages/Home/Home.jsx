import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Header from "../Shared/Navbar/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import RightSidenav from "../Shared/RightSideNav/RightSidenav";
import BreakingNews from "./BreakingNews";

const Home = () => {
    return (
        <div>
        <Header></Header>
        <BreakingNews></BreakingNews>
        <Navbar></Navbar>
        <h2 className="text-3xl ">This is home</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="border">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="md:col-span-2 border">
                    <h2 className="text-4xl">News coming soon...</h2>
                </div>
                <div className="border">
                    <RightSidenav></RightSidenav>
                </div>
            </div>
            
        </div>
    );
};

export default Home;