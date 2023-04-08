import { trpc } from "../utils/trpc";

export function NestedComponent() {
  const greeting = trpc.greeting.useQuery(
    { name: "tRPC user" },
    { retry: false }
  );
  return <div> TEST Q{greeting.data?.text}</div>;
}
