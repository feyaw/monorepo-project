import * as React from "react";

import { DateCard } from "@acme/feature-x";
import { TodoFeature } from "@acme/feature-y";


export default function App() {
  return (
    <div style={ maxWidth: 720, margin: "32px auto", display: "grid", gap: 16 }>
      <h1 style={ marginTop: 0 }>system-b</h1>
      
<DateCard />
<TodoFeature />

    </div>
  );
}
