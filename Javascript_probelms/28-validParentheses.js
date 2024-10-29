
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