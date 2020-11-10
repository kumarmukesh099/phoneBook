import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ContactContext from '../../context/Contact/contactContext';

const ContactItem = ({ contact }) => {
    const contactContext = useContext(ContactContext);
    const { id, name, email, phone, type } = contact;
    const {deleteContact , currentContact , clearContact} = contactContext;

    console.log("====contact=======>",contactContext)
    const onDelete = ()=>{
        deleteContact(id);
        clearContact();
    }

    return (
        <div className="card bg-light">
            <h3 className="text-primary text-left" >
                {name} {' '} <span style={{float:'right'}} className={'badge ' + (type === 'professional' ? 'badge-success' : 'badge-primary')}>{type}</span>
            </h3>
            <ul className="list">
                {email && (<li>
                    <i className="fas fa-phone" /> {email}
                </li>)}
            </ul>
            <ul className="list">
                {phone && (<li>
                    <i className="fas fa-phone" /> {phone}
                </li>)}
            </ul>
            <p>
                <button className="btn btn-dark btn-sm" onClick={()=>currentContact(contact)}>Edit </button>
                <button className="btn btn-danger btn-sm" onClick={onDelete}>Delete </button>
            </p>
        </div>
    )
}

ContactItem.propTypes = {
    contact: PropTypes.object.isRequired
}

export default ContactItem
