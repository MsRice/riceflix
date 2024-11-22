import './App.css';
import Banner from './componets/Banner';
import Category from './componets/Category';
import Nav from './componets/Nav';

function App() {

  return (
    <>
    <Nav />
    <main className='section__wrapper'>

      <Banner />
      <Category  />
      <div>Category</div>
      <div>Category</div>

    </main>
    </>
  )
}

export default App;
