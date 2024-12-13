(function(){
	window.P = window.Plugin = {
		get:function(k){
			return document.getElementById(k);
		},
		test:function(){
			alert("ok");
		}
		
	};
})();