import Image from "next/image";
import { useSession } from "next-auth/react";
import SignIn from "./auth/signin";
import SignOut from "./auth/signout";
import DarkModeSwitch from "./dark-mode-switch";

const Header = () => {
  const { data: session } = useSession();
  return (
    <header
      className={`flex flex-row justify-between items-center w-full px-4 py-4 bg-web-dark`}
    >
      {/* Logo */}
      <Image
        src="/logo.png"
        alt="Otaku Land Logo"
        width={400}
        height={104}
        className={"rounded-lg border-1"}
      />
      {/* Login and Dark Mode Button */}
      <div className={`flex flex-row justify-between items-center space-x-3`}>
        <DarkModeSwitch />
        {!session ? <SignIn /> : <SignOut user={session.user} />}
      </div>
    </header>
  );
};

export default Header;
