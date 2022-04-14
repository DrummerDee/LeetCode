let re = /[W_]
let noPunc= s.toLowerCase().replace(/[^A-Za-z]+/g,'');
let newStr = noPunc.split('').reverse().join('');
    if(newStr === s){
        return true
    }else{
        return false
    }
    console.log(newStr);
};