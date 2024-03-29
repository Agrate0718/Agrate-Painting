import { Link } from "react-router-dom";
type NavBarProps = {
  currentUser: any;
  handleLogout: any;
};

export default function NavBar({ currentUser, handleLogout }: NavBarProps) {
  const loggedIn = () => {
    return (
      <div className="hidden lg:flex gap-0 absolute opacity-0 lg:gap-3 lg:relative lg:opacity-100">
        {/* if the user is logged in... */}
        <Link
          to="/courses/new"
          className="hover:text-bloom-sage focus:text-bloom-olive"
        >
          Create New Course
        </Link>
        {" | "}

        <Link
          to={`/users/${currentUser.id}/cart`}
          className="hover:text-bloom-sage focus:text-bloom-olive"
        >
          View Cart
        </Link>
        {" | "}

        <Link
          to={`/users/${currentUser.id}`}
          className="hover:text-bloom-sage focus:text-bloom-olive"
        >
          Profile
        </Link>
        {" | "}

        <Link to="/" className="hover:text-bloom-sage focus:text-bloom-olive">
          <span onClick={handleLogout}>Logout</span>
        </Link>
      </div>
    );
  };

  const loggedOut = () => {
    return <div>Logged out </div>;
  };
  return (
    <div>
      <nav className=" fixed w-full z-50 top-0 left-0 bg-black border-gray-200 px-2 sm:px-4 py-2.5  dark:bg-gray-900">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <Link to={"/"} className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-grey-500 text-white hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700">
              Agrate Painting
            </span>
          </Link>
          <div className="flex md:order-2">
            <Link to={"/cart"}>
              {/* <p className="text-white">Cart</p> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40px"
                height="40px"
                viewBox="0 -1.02 19.036 19.036"
              >
                <path
                  id="Path_11"
                  data-name="Path 11"
                  d="M379.806,829.36c-.678,1.556-1.213,2.66-2.709,2.66h-8.128a2.664,2.664,0,0,1-2.71-2.66l-.316-5.346v-1.722l-2.911-2.589.7-.708,3.158,2.755h.049v2.264h15.125Zm-12.849-4.382.292,4.382a1.874,1.874,0,0,0,1.72,1.633H377.1c.9,0,1.24-.72,1.626-1.633l1.93-4.382Zm2.017,1.013h8.949v1h-8.949ZM375.952,829h-6.978v-1h6.978Zm-7.478,4a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,368.474,833Zm-.531,1.969h1V834h-1ZM376.474,833a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,376.474,833Zm-.531,1.969h1V834h-1Z"
                  transform="translate(-363.032 -818.995)"
                  fill="white"
                />
              </svg>
              (1)
            </Link>

            {/* <button
              type="button"
              data-collapse-toggle="navbar-search"
              aria-controls="navbar-search"
              aria-expanded="false"
              className="md:hidden text-grey-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Search</span>
            </button> */}
            {/* <div className="relative hidden md:block">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-grey-500"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Search icon</span>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-grey-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
              />
            </div>
            <button
              data-collapse-toggle="navbar-search"
              type="button"
              className="inline-flex items-center p-2 text-sm text-grey-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-search"
              aria-expanded="false"
            >
              <span className="sr-only ">Open menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button> */}
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-search"
          >
            <div className="relative mt-3 md:hidden">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-grey-500"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-green-500 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-grey-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
              />
            </div>
            <ul className="flex flex-col  p-4 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 ">
              <li>
                <Link
                  to={"/Login"}
                  className="block py-2 pl-3 pr-4 text-white  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-grey-500"
                  aria-current="page"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to={"/AllArt"}
                  className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-grey-500 dark:hover:bg-gray-700 dark:hover:text-grey-500 md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  AllArt
                </Link>
              </li>
              <li>
                <Link
                  to={"/About"}
                  className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-grey-500 dark:hover:bg-gray-700 dark:hover:text-grey-500 md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* {currentUser ? loggedIn() : loggedOut()} */}
      </nav>
    </div>
  );
}
