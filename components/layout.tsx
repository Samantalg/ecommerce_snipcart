import { FC } from "react";
import Footer from "./footer";
import Header from "./header";

const Layout: FC = (props) => {
    return (
        <div>
            <Header />
            {props.children}
            <Footer />
        </div>
    );
}

export default Layout;