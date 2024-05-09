import React from 'react';
import '../css/contact.css';

const Contact = () => {
    return (
    <div className='form_container'>
        <div className='header_contact'>
            <h1> Contact Us </h1>
        </div>
        <div className='contact_message'>
        <p> Thanks for reaching out. Please state your name, order number if you have one and the reason for your email to avoid delays in response. <br />
        Please allow up to 72 hours to get a reply. Customer Service hours are Monday-Saturday 10am-5pm EST. Closed on Sundays. <br />
        Please Note: We do not process orders on weekends or holidays. </p>
        </div>
        <div className='contact_form'>
        <form>
            <div className="row">
                <div className="col-25">
                    <label>
                     Name:
                     </label>
                </div>
                <div className="col-75">
                    <input type="text" name="name" />
                </div>
            </div>

            <div className="row">
                <div className="col-25">
                    <label>
                     Email:
                     </label>
                </div>
                <div className="col-75">
                    <input type="text" name="email" />
                </div>
            </div>

            <div className="row">
                <div className="col-25">
                    <label>
                     Message:
                     </label>
                </div>
                <div className="col-75">
                    <input type="text" name="message" style={{height:"200px"}} />
                </div>
            </div>
            <br />
            <div class="row">
                <input type="submit" value="Send" />
            </div>
        </form>
        </div>
    </div>
    )
} ;

export default Contact;