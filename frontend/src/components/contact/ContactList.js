import Contact from './Contact'

const ContactList= ({contacts}) => {

  return(
    <div id="contact-list">
      <ul id="contacts">
        {contacts.map(contact => <li><Contact contact={contact} /></li>)}
      </ul>
    </div>
  )
}

export default ContactList
