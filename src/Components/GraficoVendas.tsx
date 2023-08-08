import { IVenda } from '../Context/DataContext'
import { LineChart, XAxis, Tooltip, CartesianGrid, Line, YAxis, ResponsiveContainer, Legend } from 'recharts'


type VendaDia = {
    data: string;
    pago: number;
    processando: number;
    falha: number
}

const transformData = ( data: IVenda[] ): VendaDia[] => {

    const dias = data.reduce( ( acc: { [key: string]: VendaDia }, item ) => {

        const dia = item.data.split( " " )[0];

        if ( !acc[dia] ) {

            acc[dia] = {
                data: dia,
                pago: 0,
                falha: 0,
                processando: 0
            }

        }

        acc[dia][item.status] += item.preco;
        return acc

    }, {} );


    return Object.values( dias ).map( dia => ( { ...dia, data: dia.data.substring( 5 ) } ) )
}

const GraficoVendas = ( { data }: { data: IVenda[] } ) => {

    //biblioteca | npm i recharts

    const transformedData = transformData( data );



    return (
        <ResponsiveContainer height={400} width="99%">

            <LineChart
                width={400}
                height={400}
                data={transformedData}
            >
                <YAxis />
                <XAxis dataKey="data" />
                <Tooltip />
                <Legend />
                <CartesianGrid stroke='#f5f5f5' />
                <Line type="monotone" dataKey="pago" stroke="#A36AF9" strokeWidth={3} />
                <Line type="monotone" dataKey="processando" stroke="#FBCB21" strokeWidth={3} />
                <Line type="monotone" dataKey="falha" stroke="#000000" strokeWidth={3} />
            </LineChart>
        </ResponsiveContainer>
    )
}








export default GraficoVendas