import LinkedIn from "../assets/linkedin-logo.png";

const Contact = () => {
    return (
        <section className="standard-section">
            <p>Say <a href="mailto:hello@sabina.is?Subject=Hey" target="_top">hello@sabina.is</a> (Well, write, I suppose, since it'll be an email.)</p>
            <p>Or perhaps you're more <a href="https://www.linkedin.com/in/sabinapatawaran/"><img style={{ width: `1rem`, height: `1rem` }} src={LinkedIn} alt="LinkedIn logo"/>clined to social media.</a></p>
        </section>
    );
};

export default Contact;