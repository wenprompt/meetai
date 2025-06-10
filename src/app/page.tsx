import HomeView from "@/modules/home/ui/views/home-view";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const Page = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  // will be redirected to sign-in page before HomeView renders
  if (!session) {
    redirect("/sign-in");
  }

  return (
    <div className="flex flex-col p-4 gap-4">
      <HomeView />
    </div>
  );
};

export default Page;
