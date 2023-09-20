import logo from './logo.svg';
import './App.css';
import Usuario from './componentes/Usuario';
//el nombre del componente App lleva letra mayuscula
function App() {
  return (

    //este componente se declara con una clase: className=""
    <div className="App">

      <Usuario color="red" nombre="Fani" cargo="Desarrolladora Web" conoceme="Cv de Fani" imagen={require('./componentes/img/fani.jpeg')} />
      <Usuario nombre="Cristian" cargo="Electromecanico" conoceme="Cv de Cristian" imagen={require('./componentes/img/cris.jpeg')} />
      <Usuario nombre="Emma" cargo="Programadora" conoceme="Cv de Emma" imagen={require('./componentes/img/emma.jpeg')} />


    </div>
  );
}

export default App;
