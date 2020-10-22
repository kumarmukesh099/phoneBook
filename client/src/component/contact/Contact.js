import React , {Fragment , useContext} from 'react';
import ContactContext from '../../context/Contact/contactContext';

const Contact = () => {
    const contactContext = useContext(ContactContext); //initialise the context
    const {contacts} = contactContext;
    console.log("===========>",contacts)
    return (
        <Fragment>
            {contacts.map(contact =>  <h3>{contact.name}</h3>
        )
            
            }
            
        </Fragment>
    )
}

export default Contact
