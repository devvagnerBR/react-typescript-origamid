import React from 'react'
import { useData } from '../Context/DataContext';


const nomeMes = ( n: number ) => {

    const date = new Date();
    date.setMonth( date.getMonth() + n );
    return new Intl.DateTimeFormat( 'pt-BR', { month: "long" } ).format( date );
}

const formatDate = ( date: Date ) => {

    const dd = String( date.getDate() ).padStart( 2, "0" );
    const mm = String( date.getMonth() + 1 ).padStart( 2, "0" );
    const yyyy = date.getFullYear();
    return `${yyyy}-${mm}-${dd}`;

}

const MesBtn = ( { n }: { n: number } ) => {


    const { setInicio, setFinal } = useData()

    const setMes = ( n: number ) => {

        const date = new Date();
        date.setMonth( date.getMonth() + n );

        const firstDay = new Date( date.getFullYear(), date.getMonth(), 1 );
        const lastDay = new Date( date.getFullYear(), date.getMonth() +1, 0 ) // dia anterior após o último dia do mês;

        setInicio( formatDate( firstDay ) );
        setFinal( formatDate( lastDay ) );

    }

    return (
        <button
            onClick={() => setMes( n )}
            className='py-origamid-normal px-origamid-s bg-origamid-3 rounded-md text-origamid-2 font-semibold capitalize shadow-sm shadow-origamid-1/30'>
            {nomeMes( n )}
        </button>
    )
}

export default MesBtn