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
    <div>
      <div className=" flex items-center block justify-center h-[550px] mt-6  ">
        <div className="  grid gap-20 w-[484]  grid-cols-2    h-[500px]  ">
          <div>
            <p>Login</p>
            <form
              className="  w-full flex justify-center items-center flex-wrap grid grid-cols-1 "
              onSubmit={handleSubmit}
            >
              {/* <!-- Email input --> */}

              <div className="mb-6 ">
                <p>Email Address *</p>
                <input
                  type="email"
                  id="email"
                  className="w-[500px] h-[42px] border-solid border-black border-2   p-2.5 "
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                />
              </div>

              {/* <!-- Password input --> */}
              <div className="mb-6">
                <p>Password *</p>
                <input
                  type="password"
                  id="password"
                  className="w-[500px] h-[42px]  border-solid border-black border-2   p-2.5"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required
                />
              </div>

              {/* <!-- Submit button --> */}
              <button
                type="submit"
                className="w-[500px] h-[42px] bg-[#255893] rounded text-white "
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                Sign in
              </button>
            </form>
          </div>

          <div>
            {" "}
            <h2>Register</h2>
            <form
              className="  w-full flex justify-center items-center flex-wrap grid grid-cols-2 grid-cols-[265px] "
              onSubmit={handleSubmit}
            >
              {/* <!-- First Name input --> */}

              <div className="mb-6">
                <p>First Name *</p>
                <input
                  type="email"
                  id="email"
                  className="w-[235px] h-[42px]  border-solid border-black border-2   p-2.5 "
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                />
              </div>
              {/* <!-- Last Name input --> */}
              <div className="mb-6">
                <p>Last Name *</p>
                <input
                  type="email"
                  id="email"
                  className="w-[235px] h-[42px]  border-solid border-black border-2   p-2.5 "
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                />
              </div>
              {/* <!-- Email input --> */}
              <div className="mb-6 col-end-3 col-span-2  ">
                <p>Email Address *</p>
                <input
                  type="email"
                  id="email"
                  className="w-[500px] h-[42px]  border-solid border-black border-2  p-2.5 "
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                />
              </div>

              {/* <!-- Password input --> */}
              <div className="mb-6 col-end-3 col-span-2 ">
                <p>Password *</p>
                <input
                  type="password"
                  id="password"
                  className="w-[500px] h-[42px]  border-solid border-black border-2  p-2.5"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required
                />
              </div>

              {/* <!-- Submit button --> */}
              <button
                type="submit"
                className="w-[500px] h-[42px] bg-[#255893] rounded text-white  "
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
