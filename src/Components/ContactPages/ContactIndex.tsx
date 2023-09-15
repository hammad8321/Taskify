

import React from 'react'

function ContactIndex() {
let id = '6'

console.log(id);
  return (
    <div>



    </div>
  )
}

export default ContactIndex


// import React, { Component } from "react";
// import Header from "../../Layout/Header";
// import AddRandomContact from "./AddRandomContact";
// import RemoveAllContact from "./RemoveAllContact";
// import AddContact from "./AddContact";
// import FavouriteContacts from "./FavouriteContacts";
// import GeneralContacts from "./GeneralContacts";
// import Footer from "../../Layout/Footer";

// interface Contact {
//   id: number;
//   name: string;
//   phone: string;
//   email: string;
//   isFavorite: boolean;
// }

// interface State {
//   contactList: Contact[];
//   selectedContact?: Contact;
//   isUpdating: boolean;
// }

// class ContactIndex extends Component<{}, State> {
//   constructor(props: {}) {
//     super(props);
//     this.state = {
//       contactList: [
//         {
//           id: 1,
//           name: "NAME A",
//           phone: "0123-333",
//           email: "namea@mail.com",
//           isFavorite: false,
//         },
//         {
//           id: 2,
//           name: "NAME B",
//           phone: "0222-333",
//           email: "nameb@mail.com",
//           isFavorite: false,
//         },
//         {
//           id: 3,
//           name: "NAME C",
//           phone: "03332-333",
//           email: "namec@mail.com",
//           isFavorite: true,
//         },
//       ],
//       selectedContact: undefined,
//       isUpdating: false,
//     };
//   }

//   handleAddContact = (newContact: Contact) => {
//     if (newContact.name === "") {
//       return { status: "failure", msg: "Please Enter a valid Name" };
//     } else if (newContact.phone === "") {
//       return { status: "failure", msg: "Please Enter a valid Phone Number" };
//     }

//     const duplicateRecord = this.state.contactList.filter(
//       (x) => x.name === newContact.name && x.phone === newContact.phone
//     );
//     if (duplicateRecord.length > 0) {
//       return { status: "failure", msg: "Duplicate Record" };
//     } else {
//       const newFinalContact: Contact = {
//         ...newContact,
//         id: this.state.contactList[this.state.contactList.length - 1].id + 1,
//         isFavorite: false,
//       };
//       this.setState((prevState) => {
//         return {
//           contactList: prevState.contactList.concat([newFinalContact]),
//         };
//       });
//       return { status: "success", msg: "Contact was added successfully" };
//     }
//   };

//   handleUpdateContact = (updatedContact: Contact) => {
//     if (updatedContact.name === "") {
//       return { status: "failure", msg: "Please Enter a valid Name" };
//     } else if (updatedContact.phone === "") {
//       return { status: "failure", msg: "Please Enter a valid Phone Number" };
//     }

//     this.setState((prevState) => {
//       return {
//         contactList: prevState.contactList.map((obj) =>
//           obj.id === updatedContact.id
//             ? {
//                 ...obj,
//                 name: updatedContact.name,
//                 email: updatedContact.email,
//                 phone: updatedContact.phone,
//               }
//             : obj
//         ),
//         isUpdating: false,
//         selectedContact: undefined,
//       };
//     });
//     return { status: "success", msg: "Contact was updated successfully" };
//   };

//   handleCancelUpdateContact = () => {
//     this.setState({
//       selectedContact: undefined,
//       isUpdating: false,
//     });
//     return { status: "success", msg: "Contact was updated successfully" };
//   };

//   handleToggleFavorite = (contact: Contact) => {
//     this.setState((prevState) => {
//       return {
//         contactList: prevState.contactList.map((obj) =>
//           obj.id === contact.id ? { ...obj, isFavorite: !obj.isFavorite } : obj
//         ),
//       };
//     });
//   };

//   handleDeleteContact = (contactId: number) => {
//     this.setState((prevState) => {
//       return {
//         contactList: prevState.contactList.filter((obj) => obj.id !== contactId),
//       };
//     });
//   };

//   handleAddRandomContact = (newContact: Contact) => {
//     const newFinalContact: Contact = {
//       ...newContact,
//       id: this.state.contactList[this.state.contactList.length - 1].id + 1,
//       isFavorite: false,
//     };
//     this.setState((prevState) => {
//       return {
//         contactList: prevState.contactList.concat([newFinalContact]),
//       };
//     });
//   };

//   handleRemoveAllContact = () => {
//     this.setState({
//       contactList: [],
//     });
//   };

//   handleUpdateClick = (contact: Contact) => {
//     this.setState({
//       selectedContact: contact,
//       isUpdating: true,
//     });
//   };

//   render() {
//     return (
//       <div>
//         <Header />
//         <div className="container" style={{ minHeight: "85vh" }}>
//           <div className="row py-3">
//             <div className="col-4 offset-2 row">
//               <AddRandomContact
//                 handleAddRandomContact={this.handleAddRandomContact}
//               />
//             </div>
//             <div className="col-4 row">
//               <RemoveAllContact
//                 handleRemoveAllContact={this.handleRemoveAllContact}
//               />
//             </div>

//             <div className="row py-2">
//               <div className="col-8 offset-2 row">
//                 <AddContact
//                   handleAddContact={this.handleAddContact}
//                   isUpdating={this.state.isUpdating}
//                   selectedContact={this.state.selectedContact}
//                   handleCancelUpdateContact={this.handleCancelUpdateContact}
//                   handleUpdateContact={this.handleUpdateContact}
//                 />
//               </div>
//             </div>

//             <div className="row py-2">
//               <div className="col-8 offset-2 row">
//                 <FavouriteContacts
//                   contacts={this.state.contactList.filter(
//                     (u) => u.isFavorite
//                   )}
//                   favoriteClick={this.handleToggleFavorite}
//                   deleteContact={this.handleDeleteContact}
//                   updateClick={this.handleUpdateClick}
//                 />
//               </div>
//             </div>

//             <div className="row py-2">
//               <div className="col-8 offset-2 row">
//                 <GeneralContacts
//                   contacts={this.state.contactList.filter(
//                     (a) => !a.isFavorite
//                   )}
//                   favoriteClick={this.handleToggleFavorite}
//                   deleteContact={this.handleDeleteContact}
//                   updateClick={this.handleUpdateClick}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//         <Footer />
//       </div>
//     );
//   }
// }

// export default ContactIndex;
