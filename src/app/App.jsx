import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./RootLayout";
import Home from "./pages/home/index";
import { TeamBuilder } from "./pages/team_builder/Layout";
import { Builder } from "./pages/team_builder/team_builder_pages/builder";
import { Teams } from "./pages/team_builder/team_builder_pages/teams";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import './styles/index.scss';
import { PokemonProvider } from "./Provider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient()

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
    <QueryClientProvider client={queryClient} >
      <PokemonProvider>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
      </PokemonProvider>
    </QueryClientProvider>
  );
};

export default App;