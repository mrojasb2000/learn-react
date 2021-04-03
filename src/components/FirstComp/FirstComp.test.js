import React from "react"
import { render, screen } from "@testing-library/react"
import FirstComp from "./FirstComp"

describe("<FirstComp/>", () => {
  
    it("should render component", () => {
      render(<FirstComp/>)
    })

    it("should render subtitle in component", () => {
        render(<FirstComp/>)
        expect(screen.getByText("This is first component II")).toBeDefined()
    })
})