import Header from "./header";
import Content from "./content";
import Navbar from "./navbar";
import Footer from "./footer";

function Baitap1() {
    return (
        <div>
            <Header />
            <div style={{display: "flex"}}>
                <Navbar />
                <Content />
            </div>
            <Footer />
        </div>
    )
}

export default Baitap1;