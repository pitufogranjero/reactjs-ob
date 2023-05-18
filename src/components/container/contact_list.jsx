import React from 'react';
import { Contact } from '../../models/contact.class';
import ContactComponent from '../pure/contact';

function ContactListComponent(props) {

    const defaultContact = new Contact('John','Doe','johndoe@terra.es', false,);
    const secondContact = new Contact('Puri','Garcia','purigarcia@terra.es', true,);

    const changeState = (id) => {
        console.log('TODO: Cambiar estado de una tarea')
    }

    return (
    <div>
        <div>
            <h1>Your Data:</h1>
        </div>
        {/* TODO aplicar un for/map para renderizar una lista */}
        <ContactComponent contact={defaultContact}></ContactComponent>
        <ContactComponent contact={secondContact}></ContactComponent>
    </div>
    )
}


export default ContactListComponent
