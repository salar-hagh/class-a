import   { memo } from "react";

function Test() {
  console.log("TEST");

  return <div>Test</div>;
}

export default memo(Test);
