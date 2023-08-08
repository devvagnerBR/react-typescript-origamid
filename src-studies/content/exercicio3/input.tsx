import React from 'react'


type InputProps = React.ComponentProps<'input'> & {
    label: string,
    setState: React.Dispatch<React.SetStateAction<string>>

}

const Input = ( { label, id, setState,  ...props }: InputProps ) => {

    return (
        <div className='pb-4 w-screen p-4 max-w-[600px]'>
            <label htmlFor={id}>{label}</label>
            <input id={id} type="text" name='id' onChange={( { currentTarget } ) => setState( currentTarget.value )} {...props} />
        </div>
    )
}

export default Input