import React from 'react';
import ContactCard from "@/app/components/ContactCard";
import styles from './contact.module.css'
import ContactForm from "@/app/components/ContactForm";

const Contact = () => {
    return (
        <>
            <div className={styles.container}>
            <h2> Contact Page</h2>
            <ContactCard />

                <section className={styles.contact_section}>
                    <h2> We'd love to hear <span> from you </span></h2>

                    <ContactForm />
                </section>
            </div>

            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.552467388228!2d77.48811837518602!3d28.46290427575785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc1e055d148a1%3A0x9f5207f7f0bc8f63!2sNoida%20Institute%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1688489323477!5m2!1sen!2sin"
                width={1510} height={450} style={{border:0}} allowFullScreen="" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>

        </>
    );
};

export default Contact;