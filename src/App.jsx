import './App.css';
import Post from './components/Post';

function App() {
  return (
    <>
     <Post author="Shira Krauss" content="This is my very first React application!" />
    <Post author="Alex Smith" content="Learning how to use Props is quite interesting." />
    <Post author="David Miller" content="Don't forget the importance of Component Reuse." />
    </>
     
    
  );
}

export default App;