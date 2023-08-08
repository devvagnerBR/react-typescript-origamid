import React from 'react'
import { useUI } from './ui-context'

const Header = () => {


    const { dark, setDark } = useUI()


    return (
        <header>
            <button onClick={() => setDark( ( state ) => !state )}>TEMA</button>
        </header>
    )


}

export default Header