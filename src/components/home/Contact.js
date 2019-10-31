import React from 'react';
import Title from '../inc/Title';

const Contact = () => {
    return (
        <section className="contact py-5">
            <Title title="know more about us"/> 
            <div className="row">
                <div className="col-10 col-md-6 col-sm-8 mx-auto">
                    <form action="https://formspree.io/jingliuweb@gmail.com" method="POST">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" className="form-control" name="name" id="name" placeholder="Jane Doe" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" name="email" id="email" placeholder="example@gmail.com" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="subject">Subject</label>
                            <input type="text" className="form-control" name="subject" id="subject" placeholder="what are you interested in?" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea className="form-control" name="message" id="message" rows="8" placeholder="what do you want to tell us?"></textarea>
                        </div>

                        <div className="form-group">
                            <button className="btn btn-yellow btn-block text-uppercase my-4 py-3">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;