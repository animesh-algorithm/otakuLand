import { signOut } from "next-auth/react";
import Image from "next/image";
import { FC } from "react";

interface Props {
  user: any;
}

const SignOut: FC<Props> = ({ user }) => {
  const hanleLogout = () => {
    signOut();
  };
  return (
    <Image
      src={user.image}
      alt={user.name}
      width={50}
      height={50}
      className="rounded-full cursor-pointer"
      onClick={hanleLogout}
    />
  );
};

export default SignOut;
