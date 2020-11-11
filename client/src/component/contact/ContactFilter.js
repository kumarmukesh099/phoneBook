import React, { useContext , useRef ,useEffect } from 'react';
import contactContext from '../../context/Contact/contactContext';
const ContactFilter = () => {
    const ContactContext = useContext(contactContext);
    const {filterContacts,clearFilters,filtered} = ContactContext
    const text = useRef('');

    useEffect(() => {
        if(filtered != "null"){
            text.current.value = '';
        }
    }, [])


    const onChange = (e)=>{
        if(text.current.value !== "null"){
            filterContacts(e.target.value)
        }
        else {
            clearFilters()
        }
    }
    return (
        <form>
            <input ref={text} type="text" placeholder="Filter Contacts..." onChange={onChange}></input>
        </form>
    )
}

export default ContactFilter
