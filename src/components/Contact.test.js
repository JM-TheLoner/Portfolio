import Contact from "./Contact";
import { render } from "@testing-library/react"

describe(Contact, ()=>{

    it("dark mode active as default", ()=>{
        const {getByTestId} = render(<Contact/>)
        const working = getByTestId("darkness").className
        expect(working).toBe("dContact")
    })

})