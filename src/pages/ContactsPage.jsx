import { isEmpty } from "lodash";
import { useEffect, useState } from "react"
import { useParams } from "react-router";

export const ContactsPage = () => {
    const [contactos, setContactos] = useState([])
    const [inputNameValue, setInputNameValue] = useState("")
    const [inputEmailValue, setInputEmailValue] = useState("")
    const [inputPhoneValue, setInputPhoneValue] = useState("")
    const [inputAddressValue, setInputAddressValue] = useState("")
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
                setInputNameValue("")
                setInputEmailValue("")
                setInputPhoneValue("")
                setInputAddressValue("")
                setContactos((contactos) => [...contactos, response])
            })
    }

    const addContacts = () => {
        const emailRegex = new RegExp("^[\\w\\-\\.]+@([\\w\\-]+\\.)+[\\w\\-]{2,4}$");
        const phoneRegex = /^[0-9]+$/
        if (!emailRegex.test(inputEmailValue)) {
            alert("invalid email input");
            return;
        }

        if (!phoneRegex.test(inputPhoneValue)) {
            alert("Phone number must contain only digits.");
            return;
        }

        if (
            inputNameValue.trim() === "" ||
            inputEmailValue.trim() === "" ||
            inputPhoneValue.trim() === "" ||
            inputAddressValue.trim() === ""
        ) {
            alert("All fields are required.");
            return;
        }
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
            <table className="tableWrapper">
                <thead>
                    <tr>
                        <th key={1}>Name</th>
                        <th key={2}>Phone Number</th>
                        <th key={3}>E-mail</th>
                        <th key={4}>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {isEmpty(contactos) ? (
                        <tr>
                            <td colSpan="4" className="noContacts">
                                No contacts added
                            </td>
                        </tr>
                    ) : (
                        contactos.map((contacto) => {
                            return (
                                    <tr key={contacto.id}>
                                        <td>{contacto.name}</td>
                                        <td>{contacto.phone}</td>
                                        <td>{contacto.email}</td>
                                        <td>{contacto.address}</td>
                                    </tr>
                            )
                        })
                    )}
                </tbody>
            </table>
            <hr />

            <div className="cajaInputContact">
                <h1>Add new Contact</h1>
                <h4>
                    <input className="border rounded" type="text" value={inputNameValue} onChange={(e) => setInputNameValue(e.target.value)} placeholder="Full name" />
                </h4>
                <h4>
                    <input className="border rounded" type="text" value={inputPhoneValue} onChange={(e) => setInputPhoneValue(e.target.value)} placeholder="Phone number" />
                </h4>
                <h4>
                    <input className="border rounded" type="text" value={inputEmailValue} onChange={(e) => setInputEmailValue(e.target.value)} placeholder="E-mail" />
                </h4>
                <h4>
                    <input className="border rounded" type="text" value={inputAddressValue} onChange={(e) => setInputAddressValue(e.target.value)} placeholder="Address" />
                </h4>
                <button className="contactBtn border-2 rounded" onClick={(e) => addContacts(e.target.value)}>Save</button>
            </div>
        </>
    )
}