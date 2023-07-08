import Header from './components/header/index.tsx'
import CardsContainer from './components/cardscontainer/index.tsx';
import SideBar from './components/sidebar/index.tsx'


function App() {
  return (
    <div>
      <Header />
      <CardsContainer />
      <section id='rodape'>
        <p>Desenvolvido por Lucas Rodrigues</p>
      </section>
      
    </div>
  )
}

export default App;
