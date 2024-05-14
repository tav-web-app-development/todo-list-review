import { useMemo } from "react";
import React from "react";

function ComputeIntensive({ count }) {
  function expensiveCalculation() {
    const now = performance.now();
    while (performance.now() - now < 2000) {
      //spin()
    }
  }

  expensiveCalculation();
  return <h4>Compute Intensive Component {count[0]}</h4>;
}

export default React.memo(ComputeIntensive);
