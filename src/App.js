import "./App.css";
import { Header, About, Contact, Footer } from "./containers";
import { Navbar } from "./components";

function App() {
    return (
        <div className="bg-gray-200">
            <div>
                <Navbar />
                <Header />
            </div>
            <div>
                <About />
                <Contact />
                <Footer />
            </div>
        </div>
    );
}

export default App;
