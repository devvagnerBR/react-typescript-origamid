import React from 'react';

type ButtonProps = {

    total: number,
    setTotal: React.Dispatch<React.SetStateAction<number>>
    //setState espera receber o mesmo tipo do valor inicial
    
}




const Button = ( { total, setTotal }: ButtonProps ) => {



    return (
        <button onClick={() => setTotal( ( t ) => t + 1 )}>Incrementar {total}</button>
    );
};

export default Button;
