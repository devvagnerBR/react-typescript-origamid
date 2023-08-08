import React from 'react'
import Button from './button';

const Exercise_02 = () => {

    const [total, setTotal] = React.useState( 0 );

    return (
        <div>
            <p>Total: {total}</p>
            <Button total={total} setTotal={setTotal} />
        </div>
    )
}

export default Exercise_02