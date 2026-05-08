import { useSearchParams } from 'react-router-dom'
import './App.css'
import LineComponent from './business/line/component/LineComponent'
import ProductList from './business/product/api/ProductList'
import Footer from './page/Footer';

function App() {
  const [searchParams, setSearchParams] = useSearchParams()
  const selectedLine = searchParams.get('line') ?? ''

  const setSelectedLine = (line: string) => {
    if (line.trim() === '') {
      setSearchParams({})
      return
    }

    setSearchParams({ line })
  }

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
