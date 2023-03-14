import "./App.css";
import { Header, About, Contact, Footer } from "./containers";
import { Navbar } from "./components";

function App() {
    return (
        <div className="bg-gray-100 space-y-10">
            <div>
                <Navbar />
                <Header />
            </div>
            <div className="space-y-10">
                <About />
                <Contact />
                <Footer />
            </div>
        </div>
    );
}

export default App;
