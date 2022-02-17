import React from 'react'
import Categories from '../../components/Categories/Categories'
import Announcement from '../../components/NavBar/Announcement'
import NavBar from '../../components/NavBar/NavBar'
import Slider from '../../components/Slider/Slider'
import Products from '../../components/Products/Products'
import NewsLetter from '../../components/NewsLetter/NewsLetter'
import Footer from '../../components/Footer/Footer'
const HomePage = () => {
  return (
    <div>
      <Announcement/>
      <NavBar />
      <Slider/>
      <Categories/>
      <Products/>
      <NewsLetter/>
      <Footer/>
    </div>
  )
}

export default HomePage
