import React, { Fragment, useContext, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group'; //like styling
import ContactContext from '../../context/Contact/contactContext';
import ContactItem from './ContactItem';
import Spinner from '../layout/Spinner';

const Contact = ()=>{
    const contactContext = useContext(ContactContext); //initialise the context
    const { contacts, filtered , getContacts , loading } = contactContext;

    useEffect(()=>{
        getContacts();
        //eslinit-disable-next-line
    },[])
    
    if (contacts && contacts.length === 0 && !loading) {
        return <h4>
            Please add a contact
            </h4>
    }
    return (
        <Fragment>
            {contacts != null &&  !loading ? (<TransitionGroup>
                {
                    filtered !== null ? filtered.map(contact => (
                        <CSSTransition key={contact._id} timeout={5000} classNames="item">
                    <ContactItem contact={contact} />
                    </CSSTransition>
                    )) : contacts.map(contact => (
                        <CSSTransition key={contact._id} timeout={5000} classNames="item">
                            <ContactItem contact={contact} />
                        </CSSTransition>
                    ))}
            </TransitionGroup>) : <Spinner />}
        </Fragment>
    )
}

export default Contact
