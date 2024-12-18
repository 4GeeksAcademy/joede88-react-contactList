import { useEffect, useState } from "react"
import { useParams } from "react-router";

export const ContactsPage = () => {
    const [contactos, setContactos] = useState([])
    const [inputNameValue, setInputNameValue] = useState([])
    const [inputEmailValue, setInputEmailValue] = useState([])
    const [inputPhoneValue, setInputPhoneValue] = useState([])
    const [inputAddressValue, setInputAddressValue] = useState([])
    let { slug } = useParams();

    let contactData = {
        "name": `${inputNameValue}`,
        "phone": `${inputPhoneValue}`,
        "email": `${inputEmailValue}`,
        "address": `${inputAddressValue}`
    }

    const postContacts = (nombre) => {
        fetch(`https://playground.4geeks.com/contact/agendas/${nombre}/contacts`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(contactData)
        })
            .then((res) => res.json())
            .then((response) => {
                console.log(response)
                setInputNameValue("")
                setInputEmailValue("")
                setInputPhoneValue("")
                setInputAddressValue("")
                setContactos((contactos) => [...contactos, response])
            })
    }

    const addContacts = () => {
        postContacts(slug)
    }

    const getContactos = (nombre) => {
        fetch(`https://playground.4geeks.com/contact/agendas/${nombre}/contacts`, {
            method: "GET"
        })
            .then((res) => res.json())
            .then((response) => {
                setContactos(response.contacts)
            })
    }

    useEffect(() => {
        getContactos(slug)
    }, [slug])

    return (
        <>
            <div>
                {contactos.map((contacto) => {
                    return (<>
                        <div key={contacto.id}>
                            <h4 key={contacto.name}>Name: {contacto.name}</h4>
                            <h4 key={contacto.phone}>Phone Number: {contacto.phone}</h4>
                            <h4 key={contacto.email}>E-mail: {contacto.email}</h4>
                            <h4 key={contacto.address}>Address: {contacto.address}</h4><hr />
                        </div>
                    </>
                    )
                })}
            </div><hr />
            <div>
                <h1>Add new Contact</h1>
                <h4>
                    <input type="text" value={inputNameValue} onChange={(e) => setInputNameValue(e.target.value)} placeholder="Full name" />
                </h4>
                <h4>
                    <input type="text" value={inputEmailValue} onChange={(e) => setInputEmailValue(e.target.value)} placeholder="E-mail" />
                </h4>
                <h4>
                    <input type="text" value={inputPhoneValue} onChange={(e) => setInputPhoneValue(e.target.value)} placeholder="Phone number" />
                </h4>
                <h4>
                    <input type="text" value={inputAddressValue} onChange={(e) => setInputAddressValue(e.target.value)} placeholder="Address" />
                </h4>
                <button onClick={(e) => addContacts(e.target.value)}>Save</button>
            </div>
        </>
    )
}