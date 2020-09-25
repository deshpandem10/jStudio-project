import React from 'react';
import styled from 'styled-components';

import './Contact.css';

export class Contact extends React.Component {

    render() {
        return (
            <div style={{marginTop: "5%"}}>
                <div className="row contactUs-page">
                    <h2>DO YOU HAVE QUESTIONS?</h2>
                </div>
                <div className="row contactUs-page">
                    <h4>Feel free to contact us!</h4>
                </div>

                <div className="row" style={{marginTop: "5em"}}>
                    <div className="col-sm-6"></div>
                    <div className="col-sm-6">
                        <form id="contact-form">
                            <div className="row form-group">
                                <label htmlFor="name" className="col-sm-4 contactForm-label">Name </label>
                                <input type="text" id="name" className="col-sm-8 form-control" />
                            </div>
                            <div className="row form-group">
                                <label htmlFor="emailAddress" className="col-sm-4 contactForm-label">Email Address </label>
                                <input type="text" id="emailAddress" className="col-sm-8 form-control" />
                            </div>
                            <div className="row form-group">
                                <label htmlFor="message" className="col-sm-4 contactForm-label">Message </label>
                                <textarea id="message" className="col-sm-8 form-control" rows="3"></textarea>
                            </div>
                            <br/>
                            <div className="row form-group">
                                <div className="col-sm-4"></div>
                                <div className="col-sm-4">
                                    <button className="btn btn-secondary" id="reset-form" type="reset">Cancel</button>                 
                                </div>
                                <div className="col-sm-4">
                                    <button className="btn btn-primary" id="submit-form" type="submit">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>



                
            </div>
        )
    }
}
