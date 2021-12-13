import './contact.css'
import Phone from '../../image/phone.png'
import Email from '../../image/email.png'
import Address from '../../image/address.png'

const Contact = () => {

    
    return (
        <div className='c'>
            <div className="c-bg"> </div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Let's discuss your project</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={Phone} alt="" className="c-icon" />
                            +91 7800870056
                        </div>
                        <div className="c-info-item">
                            <img src={Email} alt="" className="c-icon" />
                            avihon1999@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img src={Address} alt="" className="c-icon" />
                            Rao Ganj, Kalpi
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>What’s your story?</b> Get in touch. Always available for
                        freelancing if the right project comes along. me.
                    </p>
                    <form >
                        <input type="text" placeholder='Name' name='user_name' />
                        <input type="text" placeholder='Subject' name='user_subject' />
                        <input type="text" placeholder='Email' name='user_email' />
                        <textarea  rows="5" placeholder='message' name='message'></textarea>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
