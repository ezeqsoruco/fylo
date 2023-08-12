import "./ContactUs.css";

export default function ContactUs() {
  return (
    <>
      <section className="contact">
        <section>
          <h4>Get early access today</h4>
          <br />
          <p>
            It only takes a minute to sign up and our free starter trie is
            extremely generous. If you have any cuestions, our support team
            would be habbpy to help you.
          </p>
          <form>
            <input placeholder="email@example.com" />
            <button>
              <strong>Get Started For Free</strong>
            </button>
          </form>
        </section>
      </section>
    </>
  );
}
