import "./Main.css";
import Intro from "./Intro";
import Characteristics from "./Characteristics";
import Comments from "./Comments";
import ContactUs from "./ContactUs";

export default function Main() {
  return (
    <>
      <main>
        <Intro></Intro>
        <Characteristics></Characteristics>
        <Comments></Comments>
        <ContactUs></ContactUs>
      </main>
    </>
  );
}
