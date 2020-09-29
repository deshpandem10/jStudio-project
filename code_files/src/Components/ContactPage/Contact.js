import React from 'react';
import styled from 'styled-components';

import './Contact.css';

export class Contact extends React.Component {

    render() {
        return (
            <div style={{marginTop: "5%"}}>
                <div className="row contactUs-page">
                    <div className="col-sm-12">
                        <h2>DO YOU HAVE QUESTIONS?</h2>
                    </div>
                </div>
                <div className="row contactUs-page">
                    <div className="col-sm-12">
                        <h4>Feel free to contact us!</h4>
                    </div>
                </div>

                <div className="row" style={{marginTop: "5em"}}>
                    <div className="col-sm-3"></div>
                    <div className="col-sm-6">
                        <form id="contact-form">
                            <div className="row form-group">
                                <label htmlFor="name" className="col-sm-3 contactForm-label">Name </label>
                                <div className="col-sm-7">
                                    <input type="text" id="name" className="form-control" />
                                </div>                
                            </div>
                            <div className="row form-group">
                                <label htmlFor="emailAddress" className="col-sm-3 contactForm-label">Email Address </label>
                                <div className="col-sm-7">
                                    <input type="text" id="emailAddress" className="form-control" />
                                </div>
                            </div>
                            <div className="row form-group">
                                <label htmlFor="message" className="col-sm-3 contactForm-label">Message </label>
                                <div className="col-sm-7">
                                    <textarea id="message" className="form-control" rows="3"></textarea>
                                </div> 
                            </div>
                            <br/>
                            <div className="row form-group">
                                <div className="col-sm-3"></div>
                                <div className="col-sm-3">
                                    <button className="btn btn-secondary" id="reset-form" type="reset">Cancel</button>                 
                                </div>
                                <div className="col-sm-3">
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
