import logo from './logo.svg';
import './App.css';
import Blog from './conponent/Blog';
import Header from './conponent/Header';
import BlogItem from './conponent/BlogItem';


function App() {
  const appjsClick=(text)=>{
    console.log('Click in App.js: ',text)
  }
  return (
    <div className="App">
      <Header appjsClick={appjsClick} />
   
    </div>
  );
}

export default App;
