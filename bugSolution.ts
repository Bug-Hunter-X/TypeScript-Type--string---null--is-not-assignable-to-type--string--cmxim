function greet(name: string | null): string {
  if (name === null) {
    return "Hello, world!";
  } else {
    return `Hello, ${name}!`;
  }
}

//Alternative Solution using optional chaining
function greet2(name: string | null): string {
  return `Hello, ${name ?? 'world'}!`;
}