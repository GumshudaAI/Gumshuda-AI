import Navbar from "../../components/Navbar/Navbar";
import "./Law.scss";

export default function Law() {
  return (
    <div className="root">
      <Navbar />
      <div className="law-main">
        <h2>CHILDREN RELATED LAW</h2>
        <div className="content">
          <h2>
            <a href="https://drive.google.com/file/d/161__9ppZYgSWnVtLUzwU-D8_NNSbKuKr/view">Final SOP Missing Child</a>
          </h2>
          <h2>
            <a href="https://drive.google.com/file/d/1Wk0d3QlPX6Od3keoNcAM0NRcbWwdY3r2/view">POSCO Amedment Bill</a>
          </h2>
          <h2>
            <a href="https://drive.google.com/file/d/1Wk0d3QlPX6Od3keoNcAM0NRcbWwdY3r2/view">POSCO ACT 2012</a>
          </h2>
          <h2>
            <a href="https://drive.google.com/file/d/1mweZy6XHFktC9Bn_mBmKrvJWsNX_BZUx/view">JJ Rules 2016</a>
          </h2>
          <h2>
            <a href="https://drive.google.com/file/d/1Zn7UCHYC7zcnU6Qy-QuIQp38Q43Ocgq4/view">JJ Act 2015</a>
          </h2>
        </div>
      </div>
    </div>
  );
}
