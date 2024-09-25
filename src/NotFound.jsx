import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container m-auto p-4 dark:text-slate-100 transition-colors">
      <h1 className="text-2xl font-bold mb-2">Page Not Found</h1>
      <p className="mb-4">The page you are looking for does not exist.</p>
      <Link
        to="/"
        className="bg-white py-2 px-4 inline-block mb-8 rounded hover:scale-105 transition-all dark:bg-slate-700 dark:text-slate-100"
      >
        &larr; Home
      </Link>
    </div>
  );
}

export default NotFound;
