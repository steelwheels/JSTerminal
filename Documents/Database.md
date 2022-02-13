# Database access

## Contacts
The [Contacts](https://github.com/steelwheels/KiwiScript/blob/master/KiwiLibrary/Document/Class/Contacts.md)  built-in class supports database access for contacts (known as AddressBook).
This is a sample script to access contact information:
````
  // "db" is the interface to control contact database
  db: AddressBook {
  }
  email: LabeledBox {
    title: String "Postal addresses"
    addresses: ValueView {
      init: Init %{
      %}
      _value: String Listner(index: top.index) %{
        // The data base is read when the "index" value is updated
        let record = top.db.record(top.index) ;
        if(record != null){
          // Get postal address information from record
          let addrs = record.postalAddresses ;
          self.value = addrs ;
        } else {
          console.error("No record\n") ;
        }
      %}
  }
}
````
Fore more precise, see the manual page: [Contacts](https://github.com/steelwheels/KiwiScript/blob/master/KiwiLibrary/Document/Class/Contacts.md) 
and [sample script](https://github.com/steelwheels/JSTerminal/blob/master/Resource/Sample/contact1.jspkg).

# References
* [User's manual](https://github.com/steelwheels/JSTerminal/blob/master/Documents/UsersManual.md): The main document for the user. This document is refered by it.
