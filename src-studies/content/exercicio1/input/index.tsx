import React from 'react'

type InputProps = React.ComponentProps<'input'> & {
    label: string,
    id: string,
}

const Input = ( { label, id, ...props }: InputProps ) => {
    return (
        <div className='mb-[1rem]'>
            <label className='flex flex-col' htmlFor={id}>
                {label}
            </label>
            <input name={id} id={id} {...props} />
        </div>
    )
}

export default Input