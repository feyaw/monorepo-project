import * as React from "react";
import { Button, Card } from "@acme/ui-components";
import { formatDate } from "@acme/utils";

export const HelloFeature: React.FC = () => {
  const [clicked, setClicked] = React.useState(false);
  return (
    <Card title="Hello Feature X">
      <p>Today is {formatDate(new Date())}</p>
      <Button onClick={() => setClicked(!clicked)}>
        {clicked ? "Clicked!" : "Click Me"}
      </Button>
    </Card>
  );
};
