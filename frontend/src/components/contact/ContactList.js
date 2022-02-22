import Contact from './Contact'

const ContactList= ({contacts}) => {

  return(
    <div id="contact-list">
      <ol id="contacts">
        {contacts.forEach((contact) => {
          <Contact contact={contact} />
        })}
      </ol>
    </div>
  )
}

export default ContactList
