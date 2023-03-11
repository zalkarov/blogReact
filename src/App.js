
import './App.css';
import Header from './components/Header/Header';
import Hello from './components/Hello/Hello';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <div className="App">
     <Header />
      <Hello name="zalkar" age="17" />
      <Hello name="arsen" age="25" />
      <Hello name="kenan" age="23" />
      <Footer />
    </div>
  );
}

export default App;
