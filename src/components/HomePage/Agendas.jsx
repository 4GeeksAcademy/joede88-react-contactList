import { useEffect } from "react"
import { useState } from "react"


export const Agendas = () => {
    const [agendas, setAgendas] = useState([])

    const fetchAgendas = () => {
        fetch(`https://playground.4geeks.com/contact/agendas?offset=0&limit=100`,
            { method: "GET" }
        )
            .then((res) => res.json())
            .then((response) =>
                setAgendas(response.agendas)
            )
    }

    useEffect(() => {
        fetchAgendas()
    }, [])

    return (
        <>
            <div className="text-center justify-content-center">
                {agendas.map((person) => {
                    return (
                        <div className="m-1 border border-3 rounder fw-bold" key={person.id}>{person.slug}</div>
                    )
                })}
            </div>
        </>
    )
}