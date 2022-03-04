import Contact from './Contact'

const ContactList= ({contacts}) => {

  return(
    <div id="contact-list">
      <ul id="contacts">
        {contacts.map(contact => (
          <li key={contact._id}>
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ContactList
