import { BrowserRouter, Routes, Route } from "react-router-dom"

import './assets/styles.css'
import Home from "./pages/home";
import SinglePost from "./pages/singlePost";
import AddPost from "./pages/addPost";
import Header from "./components/header"
import Footer from "./components/footer";

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/single-post' element={<SinglePost />} />
        <Route path='/add-post' element={<AddPost />} />
        <Route path='*' element={<h2> Page not found 😭 </h2>} />
      </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App;
