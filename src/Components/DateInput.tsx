import React from 'react'

type IDateInputs = React.ComponentProps<'input'> & {
    label: string,


}


const DateInput = ( { label, id, ...rest }: IDateInputs ) => {

    return (
        <div className=''>
            <label className='block shadow-sm shadow-origamid-2/20 mb-origamid-s font-semibold text-[1rem] text-origamid-2 py-origamid-s px-[0.75rem] bg-origamid-4 rounded-md' htmlFor={id}>{label}</label>
            <input className='border-none shadow-sm shadow-origamid-2/20 font-mono text-[1rem] text-origamid-2 py-origamid-s px-[0.75rem] bg-origamid-4 rounded-md' id={id} name={id} type="date" {...rest} />
        </div>
    )
}

export default DateInput