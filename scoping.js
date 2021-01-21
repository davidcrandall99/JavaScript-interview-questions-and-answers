var varnumb = 1;
let letnumb = 1;
const constnumb = 1;
const constobj = [1, 2, 3];

(function(){
    varnumb = 2; //references parent scope, unless the variable is redefined within the scope.
    
    letnumb = 3 //ok, defined in parent scope, just ass before
    
    //let varnumb = 5 //references current scope, will cause error due to the same-scope call to the variable prior to defining.
    
    //constnumb = 3; // not ok, already defined and a constant. If defined with a 'const' prefixed within this scope, it will work, but it will not change the value of the first const
    
    constobj.push(4); //ok, because we are not redefining it, we are simply pushing data to it
})();

console.log(`
varnumb = ${varnumb}
letnumb = ${letnumb}
constnumb = ${constnumb}
constnumb = ${constobj}
`)