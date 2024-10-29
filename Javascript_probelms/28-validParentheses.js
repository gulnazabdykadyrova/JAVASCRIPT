// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
 
    var isValid = function(s) {
        const expectedBr=[];
        for(let i=0; i<=s.length;i++) {
            if(s[i]==="(") {
                expectedBr.push(")")
                console.log(expectedBr)
            } else if(s[i]==="{") {
                expectedBr.push("}")
            } else if(s[i]==="[") {
                expectedBr.push("]")
    
            } else if(expectedBr.pop() !== s[i]) {
                return false
            }
        }
        return !(expectedBr.length>0)
        
    };

console.log(isValid("[]{}()"))