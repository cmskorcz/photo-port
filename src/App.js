import React, { useState } from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';
import './index.css'

function App() {
  const [categories] = useState([
    {
        name: 'commercial',
        description: 'Photos of grocery stores, food trucks, and other commerical projects'
    },
    {
        name: 'portraits', 
        description: 'Portraits of people in my life'
    },
    {
        name: 'food',
        description: 'Delicious delicacies'
    },
    {
        name: 'landscape',
        description: 'Fields, farmhouses, waterfalls, and beauty of nature'
    }
])

const [currentCategory, setCurrentCategory] = useState(categories[0])

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <main>
        <Gallery currentCategory={currentCategory}></Gallery>
        <ContactForm></ContactForm>
        <About></About>
      </main>
    </div>
  );
}

export default App;
