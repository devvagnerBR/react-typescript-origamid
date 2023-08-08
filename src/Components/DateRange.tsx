import React from 'react'
import DateInput from './DateInput'
import { useData } from '../Context/DataContext'

const DateRange = () => {


    const {
        inicio,
        setInicio,
        final,
        setFinal } = useData()

        

    return (
        <form
            className='box_ flex_'
            onSubmit={( e ) => e.preventDefault()}>
            <DateInput
                label='Início'
                id="inicio"
                value={inicio}
                onChange={( { currentTarget } ) => setInicio( currentTarget.value )}
            />
            <DateInput
                label='Fim'
                id="final"
                value={final}
                onChange={( { currentTarget } ) => setFinal( currentTarget.value )}
            />
        </form>
    )
}

export default DateRange