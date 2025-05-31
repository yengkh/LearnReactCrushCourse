import { useState } from "react";
import logo from "../assets/7.jpg";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const toggleNavItem = (index: number) => setCurrentIndex(index);

  const navItem: { path: string; title: string }[] = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/jobs",
      title: "Jobs",
    },
    {
      path: "/add-jobs",
      title: "Add Jobs",
    },
  ];
  return (
    <nav className="bg-blue-500 text-white px-20 py-5 flex gap-10 items-center border-b">
      <img
        src={logo}
        alt="my image logo"
        className="w-10 h-10 rounded-full cursor-pointer"
        loading="lazy"
      />
      <section>
        <ul className="flex items-center gap-2">
          {navItem.map(
            (item: { path: string; title: string }, index: number) => (
              <li
                key={index}
                className={` ${
                  currentIndex === index
                    ? "bg-gray-900"
                    : "hover:bg-gray-50 hover:text-gray-700 transition-all duration-300 ease-in"
                } px-4 py-1 rounded`}
              >
                <Link to={item.path} onClick={() => toggleNavItem(index)}>
                  {item.title}
                </Link>
              </li>
            )
          )}
        </ul>
      </section>
    </nav>
  );
};

export default NavBar;
