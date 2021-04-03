import React from "react"
import { render, screen } from "@testing-library/react"
import ItWorks from "./ItWorks"

describe("<ItWorks/>", () => {
  
    it("should render component", () => {
      render(<ItWorks/>)
    })

    it("should render title in component", () => {
        render(<ItWorks/>)
        expect(screen.getByText("It works!")).toBeDefined()
    })
})