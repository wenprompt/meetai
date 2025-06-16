import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { getQueryClient, trpc } from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { auth } from "@/lib/auth";

import { AgentsListHeader } from "@/modules/agents/ui/components/list-header";
import {
  AgentsView,
  AgentsViewLoading,
  AgentsViewError,
} from "@/modules/agents/ui/views/agents-view";

const Page = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  // will be redirected to sign-in page before HomeView renders
  if (!session) {
    redirect("/sign-in");
  }
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(trpc.agents.getMany.queryOptions());
  return (
    <>
      <AgentsListHeader />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Suspense fallback={<AgentsViewLoading />}>
          <ErrorBoundary fallback={<AgentsViewError />}>
            <AgentsView />
          </ErrorBoundary>
        </Suspense>
      </HydrationBoundary>
    </>
  );
};

export default Page;
