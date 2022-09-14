import './App.css';
import NavBar from './components/NavBar';
import ItemDetailContainer from './containers/ItemDetailContainer';
// import ItemListContainer from './containers/ItemListContainer';

function App() {

  return (
    <>
      <NavBar/>
      {/* <div className="App">
      <ItemListContainer greeting={"Bienvenidos al Ecommerce"} />
      </div> */}
      <ItemDetailContainer />
    </>
  );
}

export default App;
