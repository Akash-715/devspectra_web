import "../Styles/contact.css";

export default function Contact() {
  return (
    <section className="contact-page">
      <div className="contact-container">

        {/* LEFT FORM */}
        <div className="contact-form-box">
          <h2>Start your project</h2>

          <form>
            <label>Name</label>
            <input type="text" placeholder="Your full name" />

            <label>Email</label>
            <input type="email" placeholder="Your Email" />

            <label>Mobile Number</label>
            <input type="text" placeholder="Your Mobile Number" />

            <label>Budget</label>
            <select>
              <option>Select</option>
              <option>₹50,000 - ₹1,00,000</option>
              <option>₹1,00,000 - ₹3,00,000</option>
              <option>₹3,00,000+</option>
            </select>

            <label>Project brief</label>
            <textarea
              placeholder="Describe your project (goals, timeline)"
              rows="5"
            ></textarea>

            <button type="submit" className="contact-btn">
              Send request
            </button>
          </form>
        </div>

        {/* RIGHT INFO */}
        <div className="contact-info-box">
          <h3>Contact</h3>

          <p className="info-main">
            DevSpectra • Chennai, India
          </p>

          <div className="info-block">
            <h4>Phone</h4>
            <p>+91 96009 41222</p>
          </div>

          <div className="info-block">
            <h4>Email</h4>
            <p>connect@devspectra.in</p>
          </div>

          <div className="info-block">
            <h4>Services</h4>
            <p>Design • Development • Cloud</p>
          </div>
        </div>

      </div>
    </section>
  );
}
