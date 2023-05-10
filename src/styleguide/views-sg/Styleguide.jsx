import Nav from "../Nav";
import "./styleguide.scss";
import Buttons from "../../components/button/Buttons";

export default function Styleguide() {
  return (
    <>
      <div className="section">
        <h1>soy un h1</h1>
        <h2>soy un h2</h2>
        <h3>soy un h3</h3>
        <h4>soy un h4</h4>
        <h5>soy un h5</h5>
        <h6>soy un h6</h6>
      </div>

      <div className="section">
        <h3>Variable Colors</h3>
        <div className="color__circle lighter">
          <p>50</p>
          <p>#FDEDE7</p>
        </div>
        <div className="color__circle light">
          <p>100</p>
          <p>#FCDCCF</p>
        </div>
        <div className="color__circle regular">
          <p>200</p>
          <p>#F9B99F</p>
        </div>
        <div className="color__circle dark">
          <p>300</p>
          <p>#F7A787</p>
        </div>
          <div className="color__circle darker">
          <p>400</p>
          <p>#F6956F</p>
        </div>
          <div className="color__circle sdark">
          <p>500</p>
          <p>#F3733F</p>
        </div>
          <div className="color__circle ssdark">
          <p>600</p>
          <p>#F04F0F</p>
        </div>
      </div>
      <Nav />
      <Buttons />
    </>
  );
}
