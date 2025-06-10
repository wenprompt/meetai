import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { SignInView } from "@/modules/auth/ui/views/sign-in-view";
import { auth } from "@/lib/auth";

const Page = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  // if session already exist, convert to boolean and redirect to home page
  if (!!session) {
    redirect("/");
  }

  return <SignInView />;
};

export default Page;
