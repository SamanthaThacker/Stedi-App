import hello from "../utils/hello.js";

it("Should say Sam",()=>{
    const helloString =hello();
    console.log(helloString);

    expect(helloString).toBe("Sam");

})