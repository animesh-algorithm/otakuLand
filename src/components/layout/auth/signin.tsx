import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";

const SignIn = () => {
  const handleLogin = () => {
    signIn("google", {
      callbackUrl: "/",
    });
  };
  return (
    <button
      className={`bg-white dark:bg-black text-black dark:text-white font-bold py-2 px-4 rounded hover:bg-gray-200 dark:hover:bg-gray-800 hover:text-black dark:hover:text-white
            `}
      onClick={handleLogin}
    >
      <FcGoogle
        className={`inline-block mr-2`}
        style={{ width: "1.2rem", height: "1.2rem" }}
      />
      Sign In
    </button>
  );
};

export default SignIn;
