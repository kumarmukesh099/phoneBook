import React, { useContext , useEffect} from 'react';
import Contact from '../../contact/Contact';
import ContactForm from '../../contact/ContactForm';
import ContactFilter from '../../contact/ContactFilter';
import authContext from '../../../context/auth/authContext';

const Home = () => {
    const AuthContext = useContext(authContext);
    const {loadUser} = AuthContext;

    useEffect(() => {
        loadUser();
        //eslint-disable-next-line
    }, [])

    return (
        <div className="grid-2">
            <div>
                <ContactForm />
            </div>
            <div>
                <ContactFilter />
                <Contact />
            </div>
        </div>
    )
}

export default Home
