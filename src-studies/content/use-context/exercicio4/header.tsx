import React from 'react'
import { useUser } from './exercise-context'

const Header = () => {



    const { data } = useUser();







    if ( !data ) return null
    return (
        <div>Header: {data.nome}</div>
    )
}

export default Header