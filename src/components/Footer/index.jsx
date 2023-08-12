import "./Footer.css";
import logo from "../../../public/icons/logo.svg";

export default function Footer() {
  return (
    <>
      <footer>
        <img src={logo} alt="Logo SVG" />
        <section className="data-page">
          <span className="ubication">
            <i class="fa-solid fa-location-dot"></i>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              tempor, ipsum nec tincidunt aliquam, diam purus ullamcorper elit,
              eu tincidunt justo ligula sit amet sem. Sed in eros ac arcu
              posuere aliquam. Suspendisse ac risus vel nulla cursus dignissim.
            </p>
          </span>
          <span className="contact">
            <span>
              <i class="fa-solid fa-phone"></i>
              <p>+54 9 351 590 2816</p>
            </span>

            <span>
              <i class="fa-solid fa-envelope"></i>
              <p>eze.soruco93@gmail.com</p>
            </span>
          </span>
          <span className="contact">
            <a>About Us</a>
            <a>Jobs</a>
            <a>Press</a>
            <a>Blog</a>
          </span>
          <span className="contact">
            <a>Contact Us</a>
            <a>Terms</a>
            <a>Provacy</a>
          </span>
          <span>
            <a>
              <i class="fa-brands fa-facebook"></i>
            </a>
            <a>
              <i class="fa-brands fa-twitter"></i>
            </a>
            <a>
              <i class="fa-brands fa-instagram"></i>
            </a>
          </span>
        </section>
      </footer>
    </>
  );
}
