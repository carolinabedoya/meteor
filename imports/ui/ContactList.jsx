import React from "react";
import { ContactCollection } from "../api/ContactCollection";
import { useTracker} from "meteor/react-meteor-data";

export const ContactList = () => {
    const contacts = useTracker(() => {
        return ContactCollection.find({}).fetch();
    }); 
    return (
      <>
        <h3>Contact List</h3>
        {contacts.map(contact => (
            <li key = {contact.name}>{contact.name} - {contact.email}</li>
        ))}
      </>
    )
}