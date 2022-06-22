let arr = ['{', '(', '[', '[', ')', '}']

// check to see if open and close together (a match)

let newArr = []
for (let i = 0 ; i < arr.length ; i ++){
    if ( arr[i] == '(' || arr[i] == '{' || arr[i] == '['  ) { // newArr = [{, (, [, ]
        newArr.push(arr[i])
    }else (arr[i] == ')' || arr[i] == '}' || arr[i] == ')'){
        if (arr[i] == ')')
    }
}