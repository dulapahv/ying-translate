import { Header, About, Contact, FAQ, Footer } from './containers';
import { Navbar } from './components';

function App() {
  return (
    <div className='bg-gray-100'>
      <Navbar />
      <Header />
      <About />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
