import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-container">
        <h1>
          Contact Me<label Style="float:right;">&#9993;</label>
        </h1>
        <hr />
        <form className="contact-div">
          <h2>Let's Talk</h2>
          <input Style="color:white;" type="text" placeholder="Name" required />
          <div></div>
          <input Style="color:white;" type="text" placeholder="Email" required />
          <br />
          <br />
          <textarea Style="color:white;" placeholder="How can I help you..." required></textarea>
          <br />
          <br />
          <button className="button" type="submit" value="submit">
            Send Message
          </button>
        </form>
        <h1>
          <label Style="padding-left:15%;">&#128231;</label>
          <label Style="float:right;padding-right:15%;">&#128241;</label>
        </h1>
        <h3>
          <label Style="padding-left:14%;">E-mail</label>
          <label Style="float:right;padding-right:12%;">Send Message</label>
        </h3>
      </div>
    </div>
  );
};

export default Contact;
