/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    /**
    initiate an empty stack, interate token
    1. if is nunmber, push into stack, 
    2. if is operater, pop 2 num a2 and a1 from stack and do the mathematical operation, and push result back to stack; 
    3. then go on iterate, go back to step 1
     */
    const operaters = ['+', '-', '*', '/'];
    const stack = [];

    for (const operand of tokens) {
        if (operaters.includes(operand)) {
            const n2 = Number(stack.pop());
            const n1 = Number(stack.pop());
            let opRes;
            switch (operand) {
                case '+':
                    opRes = n1 + n2;
                    break;
                case '-':
                    opRes = n1 - n2;
                    break;
                case '*':
                    opRes = n1 * n2;
                    break;
                case '/':
                    opRes = Math.trunc(n1 / n2);
                    break;                    
            }
            stack.push(opRes); // result will be used later so push it into stack
        } else { // is numner, store it and will be used later
            stack.push(operand);
        }
    }
    return stack[0];
};