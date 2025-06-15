"use client";

import { useTRPC } from "@/trpc/client";
import { useQuery } from "@tanstack/react-query";

const HomeView = () => {
  const trpc = useTRPC();

  const { data } = useQuery(trpc.hello.queryOptions({ text: "wang" }));
  return (
    <div className="flex flex-col p-4 gap-4">
      <p>{data?.greeting}</p>
    </div>
  );
};

export default HomeView;
