import { FC } from "react";
import Footer from "./footer";
import Header from "./header";

const Layout: FC = (props) => {
    return (
        <div>
            <Header />
            <main>
                {props.children}
            </main>
            <Footer />
        </div>
    );
}

export default Layout;