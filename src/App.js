import logo from './logo.svg';
import './App.css';
import Blog from './conponent/Blog';
import BlogItem from './conponent/BlogItem';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>My name is Iskemder</h1>
        <Blog/>
      </header>
    </div>
  );
}

export default App;
