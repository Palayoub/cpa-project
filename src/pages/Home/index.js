import "./index.css"
import Header from "../../components/Header";
import Content from "../../components/Content";
import Footer from "../../components/Footer";
function Home() {
    return (
        <div className={"page-container"}>
            <Header />
            <Content />
            <Footer />
        </div>
    );
}

export default Home;
