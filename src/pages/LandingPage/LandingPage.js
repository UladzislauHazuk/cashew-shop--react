import Category from "../../components/Category/Category";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import MobileStore from "../../components/MobileStore/MobileStore";
import Preview from "../../components/Preview/Preview";

function LandingPage() {
    return (
        <>
            <Header></Header>
            <Preview></Preview>
            <Category></Category>
            <MobileStore></MobileStore>
            <Footer></Footer>
        </>
    )
}

export default LandingPage;