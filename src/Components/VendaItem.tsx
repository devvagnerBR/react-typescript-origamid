import { NavLink } from 'react-router-dom'
import { IVenda } from '../Context/DataContext'

const VendaItem = ( { venda }: { venda: IVenda } ) => {






    return (
        <div className='venda box_'>
            <NavLink to={`/vendas/${venda.id}`} className='font-mono'>{venda.id}</NavLink>
            <div>{venda.nome}</div>
            <div>{venda.preco.toLocaleString( 'pt-BR', { style: 'currency', currency: "BRL" } )}</div>
        </div>
    )
}

export default VendaItem