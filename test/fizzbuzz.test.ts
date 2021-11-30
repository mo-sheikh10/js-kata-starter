const fizzBuzz = (input: number): string => {
  return input % 3 === 0 ? "fizz" : "buzz"
}


describe("Fizz Buzz", () => {
  it("Should print fizz if multiple of 3", () => {
    const response = fizzBuzz(3)
    expect(response).toBe("fizz")
  })

  it('Should print buzz if multiple of 5', () => {
    const response = fizzBuzz(5)
    expect(response).toBe("buzz")
  })
  it('Should print fizzbuzz if multiple of 3 and 5', () => {
    const response = fizzBuzz(5)
    expect(response).toBe("fizzbuzz")
  })
});