import { Link } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <>
      <div className="NotFoundPage">404 Not found</div>
      <Link to="/">Home from Link</Link>
      <a href="/">Home from A</a>
    </>
  );
};

export default NotFoundPage;
