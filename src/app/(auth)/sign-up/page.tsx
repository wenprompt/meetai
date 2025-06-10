import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { SignUpView } from "@/modules/auth/ui/views/sign-up-view";
import { auth } from "@/lib/auth";

const Page = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  // if session already exist, convert to boolean and redirect to home page
  if (!!session) {
    redirect("/");
  }

  return <SignUpView />;
};

export default Page;
