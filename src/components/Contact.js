//src/components/Contact.js

const Contact = () => (
    <section>
    <h2>Contact Info</h2>

    <div>
      <i className="fa-brands fa-linkedin"></i>
      <a 
        href="https://www.linkedin.com/in/sinconor-mabelane-1525a4281" 
        target="_blank" 
        rel="noopener noreferrer" 
        title="Go to my LinkedIn Profile"
      >
        LinkedIn
      </a>
    </div>

    <br />

    <div>
      <i className="fa-solid fa-envelope"></i>
      <a 
        href="mailto:sinconormabelane@gmail.com" 
        target="_blank" 
        rel="noopener noreferrer" 
        title="Go to my email"
      >
        Email
      </a>
    </div>
  </section>
);

export default Contact;