import { Link, useLocation, useParams } from "react-router-dom";

export const Page2 = () => {
  return (
    <div>
      <h1>Page2</h1>
      {/* <Link to='/page2/detailA'>detailA</Link>
      <br />
      <Link to='/page2/detailB'>detailB</Link> */}
      <Link to="page2/999">URL parameter</Link>
      <br />
      <Link to="page2/999?name=hogehoge">qurey</Link>
    </div>
  );
};
