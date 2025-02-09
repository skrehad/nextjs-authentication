import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);
  // console.log(session);
  return (
    <div>
      {session?.user && (
        <div>
          <h1 className="text-4xl text-center mt-10">
            Welcome {session?.user?.name}
          </h1>
          <h1 className="text-4xl text-center mt-10">
            Logged-in user email: {session?.user?.email}
          </h1>
          <Image
            src={session?.user?.image as string}
            width={200}
            height={200}
            alt="user image"
            className=" mx-auto rounded-full mt-5"
          />
        </div>
      )}
    </div>
  );
};

export default DashboardPage;
