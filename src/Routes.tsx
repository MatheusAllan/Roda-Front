import {
  Routes as WrapperRoutes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Login from "./pages/login";
import Cadastro from "./pages/cadastro";
import AllUsers from "./pages/allusers";
import Postpage from "./pages/postpage";

export default function Routes() {
  return (
    <BrowserRouter>
      <WrapperRoutes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/allusers" element={<AllUsers />} />
        <Route path="/postpage" element={<Postpage />} />
      </WrapperRoutes>
    </BrowserRouter>
  );
}
