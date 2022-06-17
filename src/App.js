import logo from './logo.svg';
import { Container, Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import Menu from './components/MenuComponent';
import { DISHES } from './shared/dishes';

function App() {
          
  return (
    
    <div>
     <Navbar dark color='primary'>
       <div className="container">
         <NavbarBrand href='/'>Restorant con fusion </NavbarBrand>
       </div>
     </Navbar>
     <Menu dishes={DISHES} />

    </div>
  );
}

export default App;
