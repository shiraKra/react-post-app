
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter,Routes, Route } from 'react-router';
import Posts from './components/Posts'
import Home from './components/Home'
import PostList from './components/PostList'
import Post from './components/Post'
import NewPost from './components/NewPost'

function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/posts' element={<Posts/>}>
     <Route index  element={<PostList/>}/>
     <Route path='new' element={<NewPost />}/>
     <Route path=':postid' element={<Post/>}/>
     
    </Route>
  </Routes>
  </BrowserRouter>
  );
}

export default App