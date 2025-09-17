import * as React from "react";
import { Button, Card, Input } from "@acme/ui-components";

export const TodoFeature: React.FC = () => {
  const [items, setItems] = React.useState<string[]>([]);
  const [text, setText] = React.useState("");

  function add() {
    if (!text.trim()) return;
    setItems([text.trim(), ...items]);
    setText("");
  }

  return (
    <Card title="Todo Feature Y">
      <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
        <Input placeholder="New task" value={text} onChange={(e) => setText(e.target.value)} />
        <Button onClick={add}>Add</Button>
      </div>
      <ul>
        {items.map((t, i) => (
          <li key={i}>• {t}</li>
        ))}
      </ul>
    </Card>
  );
};
