import logo from './logo.svg';
import './App.css';
import TaskListComponent from './components/container/task_list';
import ContactListComponent from './components/container/contact_list';
import Ejemplo1 from './hooks/Ejemplo1'
import Ejemplo2 from './hooks/Ejemplo2'
import MiComponenteConContexto from './hooks/Ejemplo3'
import Ejemplo4 from './hooks/Ejemplo4'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/*Ejemplo4 nombre='Martin'>*/}
        {/* Todo lo que hay aquí dentro est tratado como props.children */}
        {/*<h3>Contenido del prop.children</h3>*/}
        {/*</Ejemplo4><*/}
        {/* <MiComponenteConContexto></MiComponenteConContexto> */}
        {/* <Ejemplo2></Ejemplo2> */}
        {/* <Ejemplo1></Ejemplo1> */}
        {/* <ContactListComponent></ContactListComponent>   */}
        {/* </header> */}
        <TaskListComponent></TaskListComponent>      
    </div>
  );
}

export default App;
