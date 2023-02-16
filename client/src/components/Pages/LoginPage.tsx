import axios from "axios";
import { useState } from "react";
import jwt_decode from "jwt-decode";

type LoginPageProps = {
  currentUser: any;
  setCurrentUser: any;
};

export default function LoginPage({
  currentUser,
  setCurrentUser,
}: LoginPageProps) {
  // state for the controlled form
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      // post fortm data to the backend
      const reqBody = {
        email,
        password,
      };
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/api-v1/users/login`,
        reqBody
      );

      // save the token in localstorage
      const { token } = response.data;
      localStorage.setItem("jwt", token);

      // decode the token
      const decoded = jwt_decode(token);

      // set the user in App's state to be the decoded token
      setCurrentUser(decoded);
    } catch (err: any) {
      console.warn(err);
      if (err.response) {
        setMsg(err.response.data.msg);
      }
    }
  };
  return (
    <div className="flex  items-center justify-center my-20">
      <div className="  grid gap-5 w-10/12  grid-cols-2   place-items-center">
        <section className="h-screen">
          <div className="container px-6 py-12 h-full">
            <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
              <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0"></div>

              <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
                <form onSubmit={handleSubmit}>
                  <p>Login:</p>
                  <br></br>

                  {/* <!-- Email input --> */}
                  <div className="mb-6 ">
                    <input
                      type="email"
                      id="email"
                      className=""
                      placeholder="Email address"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      required
                    />
                  </div>

                  {/* <!-- Password input --> */}
                  <div className="mb-6">
                    <input
                      type="password"
                      id="password"
                      className=""
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                      required
                    />
                  </div>

                  {/* <!-- Submit button --> */}
                  <button
                    type="submit"
                    className="bg-red-500 rounded"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    Sign in
                  </button>

                  {/* <div
									className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
								>
									<p className="text-center font-semibold mx-4 mb-0">OR</p>
								</div> */}
                </form>
              </div>
            </div>
          </div>
        </section>
        <div className="bg-green-500 grid gap-5 grid-cols-2 ">
          <div> Register----Column two.one</div>
          <div>Column two.two</div>
          <div className="grid row-span-2">
            CHickenAppleewuvfbhuelgbuieghoie4jgoijhgijrsh;jrsihojrhoirdjhoijsrhoiSauce
          </div>
        </div>
      </div>
    </div>
  );
}
