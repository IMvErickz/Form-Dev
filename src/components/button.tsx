interface ButtonProps{
    buttonTittle: string
}

export function Button(props: ButtonProps) {
    return (
        <button
        className="bg-yellowForm p-2 text-2xl font-bold rounded-lg" type='submit'
        >{props.buttonTittle}</button>
    )
}