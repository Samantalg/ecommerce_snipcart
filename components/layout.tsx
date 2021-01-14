import { FC } from 'react'
import Footer from './footer'
import Header from './header'
import '../styless.scss'

const Layout: FC = (props) => {
    return (
        <div className="layout">
            <Header />
            <main>
                {props.children}
            </main>
            <Footer />
        </div>
    );
}

export default Layout