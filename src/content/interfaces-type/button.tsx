import React from 'react'

const Button = ( { children }: React.PropsWithChildren ) => {

    const handleClick = ( event: React.MouseEvent ) => {
        console.log( event.pageX );
    }

    // Ou
    
    const handleClick2: React.MouseEventHandler = ( event: React.MouseEvent ) => {
        console.log( event.pageX );
    }

    return (
        <button onClick={handleClick}>
            {children}
        </button>
    )
}

export default Button