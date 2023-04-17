import '../../style/contact/contactPage.css'
import { Fragment } from 'react'
// import Man from '../../images/man.jpg';

export function ContactPage(){
    return( 
        <Fragment>
            <div className="contact-structure">
                <div className="contact">
                    <h1 className="contact-title"> Kontaktné informácie </h1>
                    <div className="name">Marek Orihel</div>
                    <div className="contact-info">
                        <div className="email-info">
                            <strong>Email:</strong>
                            <div>+421 9843 43430</div>
                        </div>
                        <div className="phone-info">
                            <strong>Mobilný telefón:</strong>
                            <div>blabla@gmail.com</div>
                        </div>
                    </div>
                </div>
                <img className='photo' alt="Fotka" />
            </div>
        </Fragment>
    )
}