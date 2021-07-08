import React from 'react';

function Footer(props) {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">             
                    <div className="col text-right">
                        <a role="button" className="btn btn-link" href="tel:+12345678910"><i className="fa fa-phone" /> 1-234-567-8910</a><br />
                        <a role="button" className="btn btn-link" href="mailto:contactus@jjpromotions.com"><i className="fa fa-envelope-o" /> contactus@jjpromotions.com</a><br />
                        <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram" /></a>{' '}
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/"><i className="fa fa-facebook" /></a>{' '}
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter" /></a>{' '}
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube" /></a> 
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;