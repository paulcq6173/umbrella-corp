import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="w-screen">
      <p>We're sorry, but the page that you requested not exist.</p>
      <Link to="/">Back</Link>
    </div>
  );
};

export default NotFoundPage;
