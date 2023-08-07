import React from 'react'
import Button from './button'

const Props_ = () => {

    const [total, setTotal] = React.useState( 0 )

    const incrementar = () => {
        setTotal( ( total ) => total + 1 )
    }

    return (
        <div>
            <p>Total: {total}</p>
            <Button className='bg-violet-600 text-neutral-50 animate-bounce' onClick={incrementar} size="1.25rem">INCREMENTAR</Button>
            <Button size="1.50rem">DECREMENTAR</Button>
            <Button />
        </div>
    )

}

export default Props_