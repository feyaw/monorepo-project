import * as React from "react";

import { HelloFeature } from "@acme/feature-x";
import { CounterFeature } from "@acme/feature-y";


export default function App() {
  return (
    <div style={ maxWidth: 720, margin: "32px auto", display: "grid", gap: 16 }>
      <h1 style={ marginTop: 0 }>system-a</h1>
      
<HelloFeature />
<CounterFeature />

    </div>
  );
}
