import React from 'react'
import Button from './button';



const user = () => {

    return {
        name: "André",
        job: "Designer",
    }
}

type User = {
    name: string;
    job: string;
}

const States = () => {

    const [data, setData] = React.useState<null | User>( null );
    const [total, setTotal] = React.useState( 0 )
    React.useEffect( () => {
        setTimeout( () => [
            setData( user() )
        ], 1000 )

    }, [] )

    return (
        <div>
            <div>
                <p>Total: {total}</p>
                <Button incrementar={setTotal} />
            </div>
            <p>{data?.name}: {data?.job}</p>
        </div>
    )
}

export default States