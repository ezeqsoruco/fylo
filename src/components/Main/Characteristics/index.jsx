import "./Characteristics.css";
import imgPc from "../../../../public/icons/icon-access-anywhere.svg";
import imgSec from "../../../../public/icons/icon-security.svg";
import imgTime from "../../../../public/icons/icon-collaboration.svg";
import imgStore from "../../../../public/icons/icon-any-file.svg";

export default function Characteristics() {
  return (
    <>
      <section className="charact">
        <section>
          <div>
            <img src={imgPc} />
            <h3>Access your files, anywhere</h3>
            <p>
              The ability to use smartphone, tablet, or computer to access your
              account means your files follow you averywhere.
            </p>
          </div>
          <div>
            <img src={imgSec} />
            <h3>Security you can trust</h3>
            <p>
              2-factor authentication and user-controlled encryption are just a
              couple of the security features we allow to help secure your
              files.
            </p>
          </div>
        </section>
        <section>
          <div>
            <img src={imgTime} />
            <h3>Real-time collaboration</h3>
            <p>
              Securely share files and folders with friends, family and
              collegues for live collaboration. No email attachments required.
            </p>
          </div>
          <div>
            <img src={imgStore} />
            <h3>Store any type of file</h3>
            <p>
              Whether you're sharing holidays photos or work documents, Fylo has
              you covered allowing for all the types to be securely stored and
              shared.
            </p>
          </div>
        </section>
      </section>
    </>
  );
}
