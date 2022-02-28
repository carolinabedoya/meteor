import React from "react";
import { ContactCollection } from "../api/ContactCollection";


export const ContactForm = () => {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [imageURL, setImageURL] = React.useState("");

    const saveContact = () => {
        ContactCollection.insert({name, email, imageURL});
        setName("");
        setEmail("");
        setImageURL("");

    }

    return (
        <form>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text"
                    value={name}
                    onChange= {(e) => setName(e.target.value)}
                    id="name"/>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                    id="email" />
            </div>
            <div>
                <label htmlFor="imageURL">Image URL</label>
                <input type="text"
                    id="imageURL" 
                    value={imageURL} 
                    onChange={(e) => setImageURL(e.target.value)}
                 />
            </div>
            <div>
                <button type="button" onClick={saveContact}>Save Contact</button>
            </div>
        </form>
    )
}
