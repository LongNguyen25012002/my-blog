import {DefaultLayout} from './layout';
import {Routes, Route} from 'react-router-dom';
import { publicRoutes } from './router';

function App() {
  return (
    <div className="App">
      <Routes>
          {
            publicRoutes.map((route,index) => {
              const Page = route.component
              return <Route key={index} path={route.path}
                 element={<DefaultLayout><Page/></DefaultLayout>}>
                </Route>  
            })
          }
      </Routes>
    </div>
  );
}

export default App;
