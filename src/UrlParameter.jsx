import { useParams, useLocation } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const qurey = new URLSearchParams(search);
  console.log(qurey);
  return (
    <div>
      <h1>UrlParameter</h1>
      <p>{id}</p>
      <p>{qurey.get("name")}</p>
    </div>
  );
};
