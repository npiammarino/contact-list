import ContactList from '../components/contact/ContactList'

const Dashboard= ({contacts, user}) => {

  return(
    <>
      {contacts ?
      (
        <div>
          <ContactList contacts={contacts}/>
        </div>
      ) : (user?
        (
          <div>
            <h2>Start adding contacts</h2>
          </div>
        ) : (
          <div>
            <h2>Login or register to begin</h2>
          </div>
        )
      )}
    </>
  )

}

export default Dashboard
