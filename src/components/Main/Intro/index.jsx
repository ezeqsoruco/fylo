import "./Intro.css";
import img_intro from "../../../../public/images/illustration-intro.png";

export default function Intro() {
  return (
    <>
      <section className="intro">
        <img className="intro-img" src={img_intro} />
        <section className="intro-txt">
          <h1>All your files in one secure locations, accesible anywhere</h1>
          <br />
          <p>
            Fylo stores all your most important files in one secure location.
            Access them wherever you need, share and collaborate with friends
            family, and co-workers.
          </p>
          <button>
            <strong>Get Started</strong>
          </button>
        </section>
      </section>
    </>
  );
}
