import {Routes, Route} from 'react-router-dom';
import routesConfig from "@routes/routesConfig";


import Header from "@components/Header/Header";

//import cn from 'classnames';
import s from './App.module.css';


const App = () => {

  return (
      <div className={s.wrapper}>
          <Header />
              <Routes>
                  {routesConfig.map((route, i) => (
                          <Route key={i}
                                 path={route.path}
                                 element={route.component}
                          />))
                      }
              </Routes>

      </div>
     
  )
}

export default App;
