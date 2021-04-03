import React, { useState, useContext , useEffect } from 'react'
import ContactContext from '../../context/Contact/contactContext';
import { SET_CURRENT } from '../../context/types';


const ContactForm = () => {
    const contactContext = useContext(ContactContext);
    const [contact, setContact] = useState({
        name: '',
        email: '',
        phone: '',
        type: 'personal'
    })
    const { name, email, phone, type } = contact;
    const {addContact , current , clearContact , updateContact ,clearCurrent} = contactContext;

    useEffect(()=>{
        if(current != null){
            console.log("not null",contact)
            setContact(current)
        }
        else{
            setContact({
                name: '',
                email: '',
                phone: '',
                type: ''
            })
        }
    }, [contactContext,current])


    const onChange = (e) => setContact({ ...contact, [e.target.name]: e.target.value })
    //...contact get the current object and e.target.name i.e. key take it from form name and set the value

    const onSubmit = (e) => {
        e.preventDefault();
        if(current=== null){
            addContact(contact);
        }
        else{
            updateContact(contact);
            clearCurrent();
        }
        setContact({
            name: '',
            email: '',
            phone: '',
            type: ''
        })
    }

    return (
        <form onSubmit={onSubmit}>
            <h2 className="text-primary">{current ? 'Edit Contact' : 'Add Contact'}</h2>
            <input type="text" placeholder="name" name="name" value={name} onChange={onChange} required />
            <input type="text" placeholder="email" name="email" value={email} onChange={onChange} required/>
            <input type="text" placeholder="phone" name="phone" value={phone} onChange={onChange} required/>
            <h5>Contact Type</h5>
            <input type="radio" name="type" value="personal"  onChange={onChange} />{' '}Personal   {'   '}
            <input type="radio" name="type" value="professional" onChange={onChange} />{' '}Professional
            <div>
                <input type="submit" value = {current ? 'Edit Contact' : 'Add Contact'} className="btn btn-primary btn-block" />
            </div>
            {current && <div>
                <button className="btn btn-light btn-block" onClick={()=>clearContact()}>Clear</button>
                </div>}
        </form>
    )
}

export default ContactForm
