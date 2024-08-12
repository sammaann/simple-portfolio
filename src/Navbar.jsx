const Navbar = () => {
  const navList = ["Home", "Skill", "Project", "About Me", "Contact"];
  return (
    <nav className="flex justify-center">
      <ul className="flex justify-center space-x-8 mt-7 mb-10 border-purple-900 border-2 w-2/5 rounded-full py-2 ">
        {navList.map((item, index) => (
          <li className="text-white hover:text-gray-700" key={index}>
            {" "}
            {item}{" "}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
