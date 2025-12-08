const Contact = () => {
    return (
        <div className="contact-section">
            <h2 className="section-title">Contact Us</h2>
            <p className="section-subtitle">We’d love to hear from you. Get in touch!</p>
            <form className="contact-form">
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <textarea placeholder="Your Message" required></textarea>
                <button type="submit" class="btn">Send Message</button>
            </form>
        </div>
    )
}
export default Contact