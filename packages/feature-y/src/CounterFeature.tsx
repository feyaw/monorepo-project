import * as React from "react";
import { Button, Card } from "@acme/ui-components";

export const CounterFeature: React.FC = () => {
  const [count, setCount] = React.useState(0);
  return (
    <Card title="Counter Feature Y">
      <p>Count: {count}</p>
      <div style={{ display: "flex", gap: 8 }}>
        <Button onClick={() => setCount((c) => c + 1)}>Increase</Button>
        <Button onClick={() => setCount((c) => Math.max(0, c - 1))}>Decrease</Button>
        <Button onClick={() => setCount(0)}>Reset</Button>
      </div>
    </Card>
  );
};
