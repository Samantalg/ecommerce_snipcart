import { AppWrapper } from '../context/state'
import '../i18n' // needs to be bundled

function Application({ Component, pageProps }) {
    return (
        <AppWrapper>
            <Component {...pageProps} />
        </AppWrapper>
    )
}

export default Application