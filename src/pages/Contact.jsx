const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Get In Touch</h1>
        <p>
          We are here to answer any questions you might have. We look forward to
          hearing from you.
        </p>
      </div>
      <div className="contact-content">
        <div className="contact-info">
          <form className="contact-fm">
            <label htmlFor="firstName" className="form-label">
              First Name:
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              placeholder="Jane"
            />
            <label htmlFor="lastName" className="form-label">
              Last Name:
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              placeholder="Doe"
            />
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="jane.doe@example.com"
            />
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              required
              placeholder="Your message here..."
              rows="5"
            />
            <button type="submit" className="contact-btn">Send Message</button>
          </form>
        </div>
        <div className="contact-info">
          <div className="contact-details">
            <h3>Contact Information</h3>
            <p>
              123 Main Street
              <br />
              Anytown, ST 12345
            </p>
            <p>Email: info@example.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
