// sem notação do children
type ButtonProps = {
    size?: string
    children?: React.ReactNode,
    onClick?: () => void
}

// com notação do children
type ButtonProps2 = React.PropsWithChildren<{
    size?: string
    onClick?: () => void
}>

// pode receber qualquer propriedade do tipo button
type ButtonProps3 = React.ComponentProps<'button'> & {
    size?: string
}

const Button: React.FC<ButtonProps3> = ( { size, children = "BOTÃO", ...props } ) => {

    return (
        <button
            {...props}
            style={{ fontSize: size }}>
            {children}
        </button>
    )
}

export default Button