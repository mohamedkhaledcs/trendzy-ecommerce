function Contact() {
  return (
    <section id="contact" className="contact py-5 bg-white">
      <div className="container text-center">
        <h2 className="mb-4">Get in Touch</h2>
        <form className="mx-auto" style={{ maxWidth: "600px" }}>
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Your Name" required />
          </div>
          <div className="mb-3">
            <input type="email" className="form-control" placeholder="Your Email" required />
          </div>
          <div className="mb-3">
            <textarea className="form-control" rows="5" placeholder="Your Message" required></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
