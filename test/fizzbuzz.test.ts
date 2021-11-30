const fizzBuzz = (input: number): string => {
  if(input % 3 === 0 && input % 5 === 0 ) return 'fizzbuzz'
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
    const response = fizzBuzz(15)
    expect(response).toBe("fizzbuzz")
  })
});

describe('Listed fizz buzz', () => {
  it('should return a list of fizz and buzzes given a list of numbers', () => {
    const response = fizzBuzz([1,2,3,4,5,6,7,8])
    expect(response).toBe(['1','2','fizz','4','buzz','fizz','7','8'])
  })
})