import React, { Fragment, useContext } from 'react';
import ContactContext from '../../context/Contact/contactContext';
import ContactItem from './ContactItem';

const Contact = () => {
    const contactContext = useContext(ContactContext); //initialise the context
    const { contacts } = contactContext;
    console.log("===========>", contacts)
    return (
        <Fragment>
            {contacts.map(contact => (
                <ContactItem key={contact.id} contact={contact}/>

            ))

            }

        </Fragment>
    )
}

export default Contact
