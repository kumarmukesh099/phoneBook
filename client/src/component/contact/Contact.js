import React, { Fragment, useContext } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group'; //like styling
import ContactContext from '../../context/Contact/contactContext';
import ContactItem from './ContactItem';

const Contact = ()=>{
    const contactContext = useContext(ContactContext); //initialise the context
    const { contacts, filtered } = contactContext;
    
    if (contacts.length === 0) {
        return <h4>
            Please add a contact
            </h4>
    }
    return (
        <Fragment>
            <TransitionGroup>
                {
                    filtered !== null ? filtered.map(contact => (
                        <CSSTransition key={contact.id} timeout={5000} classNames="item">
                    <ContactItem contact={contact} />
                    </CSSTransition>
                    )) : contacts.map(contact => (
                        <CSSTransition key={contact.id} timeout={5000} classNames="item">
                            <ContactItem contact={contact} />
                        </CSSTransition>
                    ))}
            </TransitionGroup>
        </Fragment>
    )
}

export default Contact
