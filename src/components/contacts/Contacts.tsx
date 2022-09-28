import React from 'react';
import './contacts.css';

const Contacts = () => {
  return (
    <section className="contacts" id="contacts">
      <h2 className="contacts-title">Contacts</h2>
      <p className="contacts-description">You can reach me with:</p>
      <ul className="contacts-list">
        <li className="contacts-list-item">
          <h3 className="contact-title">Telegram</h3>
          <a className="contact-link" href="https://t.me/andrew_karev">@andrew_karev</a>
        </li>
        <li className="contacts-list-item">
          <h3 className="contact-title">Email</h3>
          <a className="contact-link" href="mailto:an.carev4@gmail.com">an.carev4@gmail.com</a>
        </li>
      </ul>
    </section>
  );
};

export default Contacts;