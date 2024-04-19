import { BrowserRouter, Routes, Route, Outlet, useNavigate, useLocation, NavLink } from "react-router-dom";
import './styles/teste.css'
import { Children } from "react";

const paginaInicial = () => <NavLink title="Página Inicial" />;
const bemEstar = () => <NavLink title="Bem-Estar" />;
const qualidadeDeVida = () => <NavLink title="Qualidade de Vida" />;

const duration = 1200;
const colorStart = '#8f44fd';
const colorEnd = '#ffffff';

const Link = ({ to, Children }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleClicked = () => {
        const bubbles = document.getElementById('bubbles')
    };

    bubbles?.classList.add("show")

    setTimeout(() => navigate(to), 1000)

    setTimeout(() => {
        bubbles?.classList.remove("show")
        bubbles?.classList.add("hide")
    }, 1200)

    setTimeout(() => bubbles?.classList.remove("hide"), 2400)
}

return(
    <a onClick={handleClicked}>
        {Children}
    </a>
)
