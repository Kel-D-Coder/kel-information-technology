import '../Styles/Contact.css'
import LogoImg from '../Images/icons/favicon_io (1)/android-chrome-512x512.png'

const Contact = () => {
    return (
      <>
        <div className="contact-form">
          <form>
            <input type="text" required placeholder="Full Name..." />
            <input type="email" required placeholder="Email..." />
            <textarea
              cols="35"
              rows="15"
              placeholder="Your Message..."
            ></textarea>
            <button type="submit">Send</button>
          </form>

          <div className="logoImg">
            <img src={LogoImg} alt="" width={400} height={400} />
          </div>
        </div>

        <section className='Location'>
          <h1>
            Location:
          </h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.5106835445927!2d3.2709385748359647!3d6.456790523935302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8993bf5f95b3%3A0xef881404b5142616!2sGOMYCODE%20Festac!5e0!3m2!1sen!2sng!4v1692655760554!5m2!1sen!2sng"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="location"
          ></iframe>
        </section>
      </>
    );
}

export default Contact