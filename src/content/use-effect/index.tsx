import React from 'react'

const Effect = () => {


    React.useEffect( () => {

        console.log( "montou" )
        return () => {
            console.log( "desmontou" )
        }

    }, [] )

    // ou


    const useEffectCallback = () => {

        console.log( "montou" );

        return () => {
            console.log( "desmontou" );

        }

    }

    React.useEffect( useEffectCallback, [] )


    return (
        <div>Effect</div>
    )
}

export default Effect