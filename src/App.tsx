import { useState } from 'react'
import './App.css'
import LineComponent from './business/line/component/LineComponent'
import ProductList from './business/product/api/ProductList'
import Footer from './page/Footer';

function App() {
  const [selectedLine, setSelectedLine] = useState('')

  return (
    <>
     <LineComponent
       selectedLine={selectedLine}
       onSelectLine={setSelectedLine}
     />
     <ProductList selectedLine={selectedLine} />
     <Footer/>
    </>
  );

}

export default App
