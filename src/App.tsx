import NavBar from "components/header";
import "./App.css";
import { BrowserRouter, Routes as Switch, Route, NavLink } from "react-router-dom";

const Element  = () =>{
  return  <>Hello world</>
}
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar title="WP-CART" />
        <div className="mt-5">
         
            <div className="container-fluid">
              <div className="d-flex flex-row">
              <Switch>
                  <Route path="/"  element={Element} />
                </Switch>
              </div>
            </div>
         
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
