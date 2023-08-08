import React from 'react'
import Input from './input'

const Exercise_01 = () => {


    const [data, setData] = React.useState( '' )

    return (
        <div>
            <p>Início da viagem: {data}</p>
            <Input id="email" label="Email" type='email' />
            <Input value={data} onChange={e => setData( e.currentTarget.value )} id="data" label="Data" type='date' />
        </div>
    )
}

export default Exercise_01