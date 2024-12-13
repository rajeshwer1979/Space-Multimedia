//static
var Model = (function(){
	
	var instance;
	
	function Singletion(){
		this.userlist = null;
		this.userdetails = null;
		this.test = 10;
	}
	
	
	return {
		getInstance:function(){
			if(instance == null){
				instance = new Singletion();
			}
			return instance;
		}
		
	}
})();