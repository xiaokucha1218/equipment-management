import { BrowserRouter,Route} from "react-router-dom";
import './App.css';
import routers from "./router/index";
import Header from '../src/pages/header/header';

function App() {
  return (
    <>
    <Header/>
    <BrowserRouter>
    {
        routers.map(router=>{
            return (
                <Route
                    key={router.path}
                    path={router.path}
                    component = { router.component }
                ></Route>
            )
        })
    }
    </BrowserRouter>
    </>
  );
}

export default App;
