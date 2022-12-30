import { Snake } from "../assets/snake";
import { Button } from "../components/button";
import { Header } from "../components/header";
import { Input } from "../components/input";
import { Link } from 'react-router-dom'
import { FormEvent, useState } from "react";
import { number } from "zod";
import { api } from '../lib/axios'


export function Home() {

    const [name, setName] = useState('')
    const [lasName, setlastName] = useState('')
    const [age, setAge] = useState('')
    

    async function createPerson(event: FormEvent) {
        event.preventDefault()

        try {
            const response = await api.post('/registerData', {
            Nome: name,
            Sobrenome: lasName,
            Idade: age
            })
            

        } catch (error) {
            throw error
       }

    }

    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center bg-bgBack gap-y-3">
            <header className="w-full flex flex-col items-center justify-center">
                <Header
                srcImg={<Snake/>}
                textTittle="FormDev"
                />
                
                <Link to='/informations'><Button
                buttonTittle="Próxima página"
                
                /></Link>
            </header>

            <div className=" w-full flex flex-col items-center justify-center gap-y-4">
                <form onSubmit={createPerson} className=" w-full flex flex-col items-center justify-center gap-y-4">

                    <input type="text" placeholder="Nome" onChange={event => setName(event.target.value)}
                    className='bg-bgInput text-white p-2 rounded-lg placeholder:text-black font-semibold w-64'
                    />

                    <input type="text" placeholder="Sobrenome" onChange={event => setlastName(event.target.value)}
                    className='bg-bgInput text-white p-2 rounded-lg placeholder:text-black font-semibold w-64'
                    />

                    <input type="text" placeholder="Idade" onChange={event => setAge(event.target.value)}
                    className='bg-bgInput text-white p-2 rounded-lg placeholder:text-black font-semibold w-64'
                    />
                    
                <Button
                buttonTittle="Enviar Informações"
                />
                </form>
            </div>
        </div>
    )
}