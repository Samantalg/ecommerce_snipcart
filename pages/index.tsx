import Layout from '../components/layout'
import Link from 'next/link'

const Index = () => {
    return (
        <div className="app">
            <Layout>
                <main className="main">
                    <h1 className="title">Aquarium</h1>
                    <img src="static/aquarium.jpg" alt="Aquarium" className="image" />
                    <Link href="/products">{ }
                        <h2>Go to the store</h2>
                    </Link>
                </main>
            </Layout>
        </div>
    )
}

export default Index