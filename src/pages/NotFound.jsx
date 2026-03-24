import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center h-screen gap-8">
      <h1 className="text-red-700 font-bold text-4xl animate-pulse">
        404 Page Not Found
      </h1>

      <button
        onClick={() => navigate("/")}
        className="bg-red-600 text-white px-6 py-3 rounded-2xl hover:bg-red-700 transition"
      >
        Go To Home Page
      </button>
    </div>
  );
};

export default NotFound;
