import React from 'react'

const Checkbox = ( { label }: { label: string } ) => {


    const [value, setValue] = React.useState( false )

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = ( event ) => {
        setValue( event.currentTarget.checked )
    }

    return (
        <label className={`p-[1rem] transition-all border-2 ${value ? 'border-[#8D2]' : 'border-[#F70]'} `}>

            <input checked={value} type="checkbox" onChange={handleChange} />
            {/* ou */}
            <input checked={value} type="checkbox" onChange={( { currentTarget } ) => setValue( currentTarget.checked )} />
            
            {label}
        </label>
    )
}

export default Checkbox