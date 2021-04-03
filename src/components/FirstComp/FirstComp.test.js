import React from "react"
import { render } from "@testing-library/react"
import FirstComp from "./FirstComp"

describe("<FirstComp/>", () => {
  
    it("should render component", () => {
      render(<FirstComp/>)
    })
})