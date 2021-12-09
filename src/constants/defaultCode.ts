
interface Code {
  [key: string]: string;
}

const defaultCode: Code =  {
  javascript: `
    // Paste or write your code here
    
    const fibnacci = (n) => {
      if (n < 2) return n
      return fib(n - 1) + fib(n - 2);
    }

    console.log(fibnacci(10));
  
  `,
  java: `
    java
  `
}

export default defaultCode