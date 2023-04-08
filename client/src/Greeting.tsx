import { NestedComponent } from "./components/NestedComponent";
import { trpc } from "./utils/trpc";

let renderCount = 0;

export function Greeting() {
  renderCount++;
  const greeting = trpc.greeting.useQuery(
    { name: "tRPC user" },
    { retry: false }
  );

  if (greeting.isLoading) {
    return <>Loading... {renderCount}</>;
  }

  return (
    <div>
      <NestedComponent />
      {greeting.data?.text}
    </div>
  );
}
