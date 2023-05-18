import React from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../../models/contact.class'

const ContactComponent = ({contact}) => {
    return (
    <div>
        <h5>Nombre: { contact.name } { contact.surname }</h5>
        <h5>Email: { contact.email }</h5>
        <h5>This contact is: { contact.connected ? 'Contacto En Línea':'Contacto No Disponible'  }</h5>
    </div>
    );
}

ContactComponent.propTypes = {
    task: PropTypes.instanceOf(Contact)
}

export default ContactComponent

