function GetExample(){
    var height = 1;
   
    this.getValue = function(){
        return height;
    };
   
    this.setValue = function(val){
        height = val;
    };
}






// we can wrie like this also
/*
function GetExample(){
    var height = 1;  //private  
   
//private Method
var x = function(){ }
// or
function x (){}


//public Method (this and prototype have) 
   this.setValue = function(val){
        height = val;
    };
}
*/