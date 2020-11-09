const add= (a,b)=>a+b;

test("should add two numbers",()=>{
    const result=add(3,4);
    expect(result).toBe(7);
});

const generateGreeting=(name="Annoymous")=>`Hello ${name}`;

test("Greeting",()=>{
    const greeting=generateGreeting("allen");
    expect(greeting).toBe(`Hello allen`);
})

test("Greeting Annoymous",()=>{
    const greeting=generateGreeting();
    expect(greeting).toBe("Hello Annoymous");
})