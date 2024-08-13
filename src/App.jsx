import './App.css'
import OfertaEspecial from './components/OfertaEspecial/OfertaEspecial'
import NovasColecoes from './components/NovasColecoes/NovasColecoes'
import Rodape from './components/Footer/Rodape'
import Carrossel from './components/Carrosel/Carrosel'
import ProductListing from './components/ProductListing/ProductListing'
import Header from './components/Header/Header'

export default function App() {

  return (
    <>
      <Header />
      <Carrossel />
      <NovasColecoes/>
      <ProductListing tamanho={8} />
      <OfertaEspecial />
      <Rodape />
    </>
  )
}
