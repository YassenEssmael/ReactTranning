import logo from './logo.svg';
import { Container, Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import Menu from './components/MenuComponent';

function App() {
  return (
    <div>
     <Navbar dark color='primary'>
       <div className="container">
         <NavbarBrand href='/'>Restorant con fusion </NavbarBrand>
       </div>
     </Navbar>
     <Menu />

    </div>
  );
}

export default App;
