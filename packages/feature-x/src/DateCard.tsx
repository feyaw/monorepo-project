import * as React from "react";
import { Card, Input } from "@acme/ui-components";
import { capitalize } from "@acme/utils";

export const DateCard: React.FC = () => {
  const [name, setName] = React.useState("");
  return (
    <Card title="Personalized Greeting">
      <Input placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
      <p style={{ marginTop: 8 }}>
        Hello {capitalize(name || "friend")}!
      </p>
    </Card>
  );
};
