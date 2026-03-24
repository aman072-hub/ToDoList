import { CheckSquare } from "lucide-react";
import SearchBar from "./SearchBar";
import DarkTheme from "./DarkTheme";

const NavBar = ({ search, setSearch }) => {
  return (
    <>
      <div
        className="flex justify-between items-center px-10 py-4 
    bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 
    shadow-xl backdrop-blur-md border-b border-white/20"
      >
        {/* Logo / Title */}
        <div className="flex items-center w-2/3 gap-3">
          <div className="bg-white/20 p-2 rounded-xl backdrop-blur-md">
            <CheckSquare size={26} className="text-yellow-300" />
          </div>

          <h1 className="text-white text-3xl font-extrabold tracking-wide">
            TaskFlow<span className="text-yellow-300">.</span>
          </h1>
        </div>

        <SearchBar search={search} setSearch={setSearch} />
        <div>
          <DarkTheme />
        </div>
      </div>
    </>
  );
};

export default NavBar;
