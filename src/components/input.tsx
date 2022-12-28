import type { InputHTMLAttributes } from "react"

interface InputProps extends InputHTMLAttributes<InputProps>{
    placeholder: string
    
}

export function Input(props: InputProps) {
    return (
        <input type={props.type} placeholder={props.placeholder}
            className='bg-bgInput text-white p-2 rounded-lg placeholder:text-black font-semibold w-64'
        />
    )
}