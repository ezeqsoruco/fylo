import "./Comments.css";
import img from "../../../../public/images/illustration-stay-productive.png";
import imgArrow from "../../../../public/icons/icon-arrow.svg";
import imgComilla from "../../../../public/images/bg-quotes.png";
import testimonials from "../../../data/testimonials.json";

export default function Comments() {
  return (
    <>
      <section className="comments">
        <section>
          <img src={img} />
        </section>
        <section>
          <p className="comments-title">
            <strong>Stay productive, wherever you are</strong>
          </p>
          <p>
            Never let location be an issue when accessing your files, Fylo has
            you covered for all of your file storage needs.
          </p>
          <p>
            Securely share files and folders with friends, famaly and colleagues
            for live collaboration. No email attachments required.
          </p>
          <a>
            <span>See how Fylo works </span>
            <img className="arrow" src={imgArrow} />
          </a>
        </section>
      </section>
      <section className="testimonials">
        <img className="cuotes" src={imgComilla} />
        <section className="opinion">
          <p>{testimonials[0].quote}</p>
          <span className="opinion-perfil">
            <img src={testimonials[0].image} />
            <span>
              <h6>{testimonials[0].name}</h6>
              <p>{testimonials[0].title}</p>
            </span>
          </span>
        </section>
        <section className="opinion">
          <p>{testimonials[1].quote}</p>
          <span className="opinion-perfil">
            <img src={testimonials[1].image} />
            <span>
              <h6>{testimonials[1].name}</h6>
              <p>{testimonials[1].title}</p>
            </span>
          </span>
        </section>
        <section className="opinion">
          <p>{testimonials[2].quote}</p>
          <span className="opinion-perfil">
            <img src={testimonials[2].image} />
            <span>
              <h6>{testimonials[2].name}</h6>
              <p>{testimonials[2].title}</p>
            </span>
          </span>
        </section>
      </section>
    </>
  );
}
