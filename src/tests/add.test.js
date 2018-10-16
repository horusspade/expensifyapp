const add = (a, b) => a + b;
const generateGreeting = (name) => `Hello ${name}`;


test('Get User Name', () => {
    const result = generateGreeting("Spade");
    expect(result).toBe(`Hello Spade`);
});


//test('should add 2 numbers', () => {
//    const result = add(3, 4);
//    expect(result).toBe(7);
//});