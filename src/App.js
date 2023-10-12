import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Book from "./pages/Book";
import Data from "./pages/data";
import PlayersList from "./components/PlayersList";
import Guy from "./pages/guy";

import NavLayout from "./components/NavLayout";
import HelpLayout from "./components/HelpLayout";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<NavLayout />}>
      <Route index element={<Home />} />
      <Route path="resposive" element={<Data />} />
      <Route path="test" element={<Guy />} />
      <Route path="player" element={<PlayersList />} />
      <Route path="about" element={<About />} />
      <Route path="about/book" element={<Book />} />
      <Route path="*" element={<NotFound />} />
      <Route path="help" element={<HelpLayout />}>
      <Route path="FAQ" element={<FAQ />} />
      <Route path="contact" element={<Contact />} />
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
