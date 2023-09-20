import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./RootLayout";
import Home from "./home";
import { TeamBuilder } from "./team_builder/Layout";
import { Builder } from "./team_builder/team_builder_pages/builder";
import { Teams } from "./team_builder/team_builder_pages/teams";

import './page_styles/index.scss';
import { PokemonProvider } from "./Provider";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={ <RootLayout /> }>
      <Route index element={ <Home /> }/>
      <Route path="teambuilder" element={ <TeamBuilder /> } >
        <Route index element={ <Teams /> }/>
        <Route path="builder" element={ <Builder /> } />
      </Route>
    </Route>
  )
);

const App = () => {
  return (
    <PokemonProvider>
      <RouterProvider router={router} />
    </PokemonProvider>
  );
};

export default App;