import React from 'react';
import Useform from './Useform';
import validate from './Validateinfo';

const Contact = () => {
    const {handleChange, data,handleSubmit, errors } = Useform(validate);

    return (
        <>
        <div className="formm">
            <div className="contact_header">
            <h1>Contact Us</h1>
            </div>
            <div className="formm_details">
            <form className="form_details" onSubmit={handleSubmit}>
                <div className="info">
                <label htmlFor="form" className="label_info">Name</label>
                <input className="form_input" type="text" name="username" value={data.username} onChange={handleChange} placeholder="Enter your Name" />
                {errors.username && <p>{errors.username}</p>}
                </div>
                <div className="info">
                <label htmlFor="form" className="label_info">Number</label>
                <input className="form_input" type="number" name="number" value={data.number} onChange={handleChange} placeholder="Enter your Mobile Number"/>
                {errors.number && <p>{errors.number}</p>}
                </div>
                <div className="info">
                <label htmlFor="form" className="label_info">E-Mail</label>
                <input className="form_input" type="email" name="email" value={data.email} onChange={handleChange} placeholder="Enter your E-Mail" />
                {errors.email && <p>{errors.email}</p>}
                </div>
                <div className="info">
                <label htmlFor="form" className="label_info">Message</label>
                <textarea className="form_input" type="text" name="message" cols="10" rows="4"  value={data.message} onChange={handleChange} placeholder="Elaborate your concern" />
                </div>
                <div className="btnn">
                <button className="btn" type="submit">Submit</button>
                </div>
            </form>
            </div>
        </div>
        </>
    )
}

export default Contact;
