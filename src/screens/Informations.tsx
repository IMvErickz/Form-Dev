import { useState } from "react"
import { Link } from "react-router-dom"
import { Snake } from "../assets/snake"
import { Button } from "../components/button"
import { Header } from "../components/header"
import { api } from "../lib/axios"

interface InfoProps{
    Nome: String
    Sobrenome: String
    Idade: String
}

export function Informations() {

    const [info, setInfo] = useState<InfoProps[]>([])
    console.log(info)

    const getInformation = api.get('/getInformation')
        .then(function (response) {
            setInfo(response.data.getPerson)
    })

    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center bg-bgBack gap-y-3">
            <header className="w-full flex flex-col items-center justify-center">
                <Header
                srcImg={<Snake/>}
                textTittle="Informações"
                />
                
                <Link to='/'><Button
                buttonTittle="Próxima anterior"
                /></Link>
            </header>

            <div className="w-full flex flex-col items-center justify-center">
                <ul id="ul" className="gap-y-8">
                    {info.map(infos => {
                        return (
                            <li className="text-white text-2xl" id="li"
                            >
                                Nome: {infos.Nome} <br/>
                                Sobrenome: {infos.Sobrenome} <br/>
                                Idade: {infos.Idade}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}