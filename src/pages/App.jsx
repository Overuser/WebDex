import { 
  Route, 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider 
} from "react-router-dom";
import RootLayout from "./RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={ <RootLayout /> } >
      <Route index element={ <div>Hello world</div> } ></Route>
    </Route>
  )
)

const App = () => {
  
  return (
    <RouterProvider router={ router } />
  );
};

export default App;
