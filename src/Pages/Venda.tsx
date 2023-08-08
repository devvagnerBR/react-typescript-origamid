import { useParams } from 'react-router-dom'
import useFetch from '../Hooks/useFetch';
import { IVenda } from '../Context/DataContext';
import Loading from '../Components/Loading';




type VendaSemData = Omit<IVenda, 'data'>

const Venda = () => {


    const { id } = useParams();
    const { data, loading } = useFetch<VendaSemData>( `https://data.origamid.dev/vendas/${id}` )


    if ( loading ) return <Loading />
    if ( data === null ) return null
    return (
        <div>
            <div className='box_ mb-4'>ID: {data.id}</div>
            <div className='box_ mb-4'>Nome: {data.nome}</div>
            <div className='box_ mb-4'>Preço: {data.preco.toLocaleString( "pt-BR", { style: "currency", currency: "BRL" } )}</div>
            <div className='box_ mb-4'>Status: {data.status}</div>
            <div className='box_ mb-4'>Pagamento: {data.pagamento}</div>
        </div>
    )
}

export default Venda