import React from 'react'
import useFetch from './use-fetch';



type ProdutoProps = {
    id: string;
    nome: string;
    preco: number;
    quantidade: number;
    descricao: string;
    international: boolean;
}
const FetchCustomHook = () => {


    const [id, setId] = React.useState( "p001" )
    const produtos = useFetch<ProdutoProps[]>( "https://data.origamid.dev/produtos/", {
        cache: "force-cache"
    } )
    const produto = useFetch<ProdutoProps>( `https://data.origamid.dev/produtos/${id}`, {
        cache: "force-cache"
    } )

    return (
        <div className='flex w-full gap-6'>
            <div>
                {produtos?.data?.map( ( produto ) => (
                    <div key={produto.id}>
                        <button onClick={() => setId( produto.id )} className='w-[200px] rounded-sm uppercase font-bold'>{produto.nome}</button>
                    </div>
                ) )}
            </div>
            <div>
                {produto.data && (
                    <ul>
                        <li>id: {produto.data.id}</li>
                        <li>nome: {produto.data.nome}</li>
                        <li>quantidade: {produto.data.quantidade}</li>
                        <li>preço: {produto.data.preco}</li>
                        <li>descrição: {produto.data.descricao}</li>
                    </ul>
                )}
            </div>
        </div>
    )
}

export default FetchCustomHook