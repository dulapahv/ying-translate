import { Header, About, Contact, Footer } from './containers';
import { Navbar } from './components';

function App() {
  return (
    <div className='bg-gray-100'>
      <Navbar />
      <Header />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
