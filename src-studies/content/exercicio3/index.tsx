import React from 'react'
import Input from './input'
import axios from 'axios'


type SaleProps = {

    id: string;
    nome: string;
    preco: number;
    status: string;
    pagamento: number | null;
    data: Date

}

const Exercise_03 = () => {

    const [start, setStart] = React.useState( '' )
    const [end, setEnd] = React.useState( '' )
    const [data, setData] = React.useState<null | SaleProps[]>( null )

    const BASE_URL = "https://data.origamid.dev/vendas"

    React.useEffect( () => {

        const getSales = async () => {

            if ( start !== "" && end !== "" ) {

                const response = await axios.get( `${BASE_URL}/?inicio=${start}&final=${end}` )
                setData( response.data )

            }
        }

        getSales()

    }, [start, end] )

    return (
        <div>

            <Input label='Início' id='start' value={start} type='date' setState={setStart} />
            <Input label='Fim' id='end' value={end} type='date' setState={setEnd} />

            <div className='overflow-y-scroll h-[70vh] flex flex-col gap-2 p-4'>

                {data !== null && data.map( ( sale ) => (
                    <div key={sale.id} className='flex text-sm border  shadow-sm pl-2'>
                        <p>{sale.nome} : {sale.status} </p>
                    </div>
                ) )}
            </div>
        </div>
    )
}

export default Exercise_03