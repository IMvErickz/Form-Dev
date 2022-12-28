import { ReactElement } from "react"

interface HeaderProps{
    srcImg: ReactElement
    textTittle: string
}

export function Header(props: HeaderProps) {
    return (
        <div className=" flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center">
                {props.srcImg}
            </div>
            <h1 className="text-6xl text-white font-headerText">{props.textTittle}</h1>
        </div>
    )
}