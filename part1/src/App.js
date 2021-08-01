import './App.css';
import Mensaje from "./Mensaje";
import Description from './Descripcion';

function App() {
  return (
    <div className="App">
      <Mensaje color="tomato" message="Estamos trabajando en un curso de React"/>
      <Mensaje color="green" message="Otro mensaje"/>
      <Mensaje color="turquoise" message="Un último mensaje"/>
      <Description />
    </div>
  );
}

export default App;
