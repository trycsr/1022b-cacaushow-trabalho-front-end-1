import { Link } from "react-router-dom";

export default function Header() {
    return (
        <>
            <header>
                <h1>
                    <Link to="/">CacauShow</Link>
                    </h1>
                <nav>
                    <ul>
                        <Link to={"/cadastro-chocolate"}> Chocolates </Link>
                        <Link to={"/lista-cliente"}> Clientes </Link>
                        <Link to={"/lista-estoque"}> Estoque </Link>
                        <Link to={"/lista-pagamento"}> Pagamento </Link>
                        <Link to={"/lista-promocoes"}> Promoções </Link>
                    </ul>
                </nav>
            </header>
        </>
    )
}