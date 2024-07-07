import {Footer, Navbar} from "../../components/index.js";
import {Outlet} from "react-router-dom";


function App() {
  return (
    <div>
      <Navbar/>

      <div className={"font-poppins mx-auto mt-10 mb-20"}>
        <Outlet/>
      </div>

      <Footer/>
    </div>
  );
}

export default App;