// import React from "react";
// import styles from "./Quote.module.css";

// export default function Quote() {
//     return (
//         <div className={styles.quote}>
//             <div className={styles['inside-wrapper']}>
//                 <form className={styles.form}>
//                     <input type='email' className={styles.input} />
//                     <input type='email' className={styles.input} />
//                     <textarea className={styles.textarea} />
//                     <button className={styles.submit} >Submit</button>
//                 </form>
//             </div>
//         </div>
//     );
// }

'use client'

import React, { useState } from 'react';
import styles from './Quote.module.css';

const PlumberQuoteForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        description: '',
        urgency: 'normal'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        // e.preventDefault();
        // console.log('Form submitted:', formData);
        // alert('Quote request submitted successfully!');
        // Add logic to handle form submission (e.g., API call)
    };

    return (
        <div className={styles["wrapper"]}>
            <div className={styles["quote-form-container"]}>
                <h2>Get A Quote</h2>
                <form onSubmit={handleSubmit} className={styles["quote-form"]}>
                    <label>

                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder='Name'
                            required
                        />
                    </label>

                    <label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder='Email'
                            required
                        />
                    </label>

                    <label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder='Phone'
                            required
                        />
                    </label>

                    <label>
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            placeholder='Address'
                            required
                        />
                    </label>

                    <label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            placeholder='Problem Description'
                            required
                        />
                    </label>

                    <label>
                        <select
                            name="urgency"
                            value={formData.urgency}
                            onChange={handleChange}
                        >
                            <option value="urgent">Urgent</option>
                            <option value="Not Urgent">Not Urgent</option>
                        </select>
                    </label>
                    <div className={styles['submit-wrapper']}>
                        <button type="submit" className={styles["submit-button"]}>Submit Request</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PlumberQuoteForm;