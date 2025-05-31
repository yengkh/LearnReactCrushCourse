import logo from "../assets/7.jpg";
import Button from "./Button";

const NavBar = () => {
  const navItem: string[] = ["Home", "Jobs", "Add Jobs"];
  return (
    <nav className="bg-blue-500 text-white px-20 py-5 flex gap-10 items-center border-b">
      <img
        src={logo}
        alt="my image logo"
        className="w-14 h-14 rounded cursor-pointer"
        loading="lazy"
      />
      <section>
        <ul className="flex items-center gap-5">
          {navItem.map((item: string, index: number) => (
            <li key={index} className={` ${index === 0 ? "bg-gray-900" : ""} `}>
              <Button title={item} />
            </li>
          ))}
        </ul>
      </section>
    </nav>
  );
};

export default NavBar;
