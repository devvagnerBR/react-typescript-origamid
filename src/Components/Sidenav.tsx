import fintech from '../Assets/fintech.svg'
import resumo from '../Assets/icons/resumo.svg'
import vendas from '../Assets/icons/vendas.svg'
import webhooks from '../Assets/icons/webhooks.svg'
import configuracoes from '../Assets/icons/configuracoes.svg'
import contato from '../Assets/icons/contato.svg'
import sair from '../Assets/icons/sair.svg'
import FintechSVG from '../Assets/FintechSVG'
import { NavLink } from "react-router-dom"


const Sidenav = () => {
    return (
        <nav className='sidenav_ box_ bg-origamid-3'>
            <FintechSVG title='Fintech Logo' />
            <ul className=''>
                <li>
                    <span>
                        <img className='max-md:w-0' src={resumo} alt="" />
                    </span>
                    <NavLink to="/">Resumo</NavLink>
                </li>
                <li>
                    <span>
                        <img  src={vendas} alt="" />
                    </span>

                    <NavLink to="/vendas">Vendas</NavLink>
                </li>
                <li>
                    <span>
                        <img src={webhooks} alt="" />
                    </span>
                    <a href=''>Webhooks</a>
                </li>
                <li>
                    <span>
                        <img src={configuracoes} alt="" />
                    </span>
                    <a href=''>Configurações</a>
                </li>
                <li>
                    <span>
                        <img src={contato} alt="" />
                    </span>
                    <a href=''>Contato</a>
                </li>
                <li>
                    <span>
                        <img src={sair} alt="" />
                    </span>
                    <a href=''>Sair</a>
                </li>

            </ul>

        </nav>
    )
}

export default Sidenav