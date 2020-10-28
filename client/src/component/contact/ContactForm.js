import React, { useState, useContext } from 'react'
import ContactContext from '../../context/Contact/contactContext';


const ContactForm = () => {
    const contactContext = useContext(ContactContext);
    const [contact, setContact] = useState({
        name: '',
        email: '',
        phone: '',
        type: 'personal'
    })
    const { name, email, phone, type } = contact;

    const onChange = (e) => setContact({ ...contact, [e.target.name]: [e.target.value] })
    //...contact get the current object and e.target.name i.e. key take it from form name and set the value

    const onSubmit = (e) => {
        e.preventDefault();
        contactContext.addContact(contact);
        setContact({
            name: '',
            email: '',
            phone: '',
            type: ''
        })
    }

    return (
        <form onSubmit={onSubmit}>
            <h2 className="text-primary">Add Contact</h2>
            <input type="text" placeholder="name" name="name" value={name} onChange={onChange} />
            <input type="text" placeholder="email" name="email" value={email} onChange={onChange} />
            <input type="text" placeholder="phone" name="phone" value={phone} onChange={onChange} />
            <h5>Contact Type</h5>
            <input type="radio" name="type" value="personal"  onChange={onChange} />{' '}Personal   {'   '}
            <input type="radio" name="type" value="professional" onChange={onChange} />{' '}Professional
            <div>
                <input type="submit" className="btn btn-primary btn-block" />
            </div>
        </form>
    )
}

export default ContactForm
