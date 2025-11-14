
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer'
import Register from './pages/Register'
import Loginn from './pages/Loginn'
import Input from './pages/Input'
import Contact from './pages/Contact'
import RecipeList from './pages/RecipeList'
import RecipeDetail from './pages/RecipeDetail'
import EditRecipe from './pages/EditRecipe'
import SearchFood from './pages/SearchFood'





function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Loginn />} />
        <Route path='/register' element={<Register />} />
        <Route path='/input' element={<Input />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/list' element={<RecipeList />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        <Route path="/edit/:id" element={<EditRecipe />} />
        <Route path="/search" element={<SearchFood />} />


      </Routes>
      <Footer />
    </>
  )
}

export default App
