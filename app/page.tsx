import UploadDropzone from "@/components/dropzone";
import Upload from "@/components/upload";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";

const HomePage = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div>
      <h1 className="text-4xl mb-5">Home Page</h1>
      {!session ? (
        <Link href="/api/auth/signin" className="px-3 py-2 bg-black text-white">
          Signin
        </Link>
      ) : (
        <>
          <p>Hello {session.user?.name}</p>
          <br />
          <Upload />
          <Link href="/api/auth/signout" className="px-3 py-2 bg-black text-white">
            Sign out
          </Link>
        </>
      )}
    </div>
  );
};

export default HomePage;
