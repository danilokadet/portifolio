import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Sobre from './pages/Sobre/Sobre';
import Projetos from './pages/Projetos/Projetos';
import Contatos from './pages/Contatos/Contatos';
import Page404 from "./pages/Page404/Page404";
import PaginaBase from './pages/PaginaBase/PaginaBase';

function AppRoutes() {
    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaBase />}>
                    <Route index element={<Home />}></Route>
                    <Route path="/sobre" element={<Sobre />}></Route>
                    <Route path="/projetos" element={<Projetos />}></Route>
                    <Route path="/contatos" element={<Contatos />}></Route>
                    <Route path="*" element={<Page404 />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes