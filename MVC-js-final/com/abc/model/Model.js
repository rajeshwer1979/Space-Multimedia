//static
var Model = (function(){
	
	var instance;
	
	function Singletion(){
		this.userlist = null;
		this.userdetails = null;
		this.customers = null;
		this.customerdetails = null;
		this.controller = null;
		
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