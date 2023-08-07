import React from 'react'
import { useUI } from './ui-context'

const Content = () => {

    const { dark } = useUI()

    return (
        <div>
            <h1>{dark ? 'dark' : 'light'}</h1>
        </div>
    )
}

export default Content