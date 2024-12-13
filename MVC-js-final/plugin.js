(function(){
	window.p = window.plugin = {
		
		
		//dom helper
		get:function(k){
			return document.getElementById(k);
		},
		//loadScript() starts 
		// will load script files dynamically
		//scriptArray should be a collection;
		
		
		loadScript:function(scriptArray,environment,callback){
			if(arguments.length != 3){
				throw new Error("please pass 3 parameters");
			}else{
				if(scriptArray instanceof Array){
					if(environment =="prod" || environment == "dev"){
						
					if(callback instanceof Function){
						//actual code
						var dev;
						
						if(environment == "prod"){
							dev = "";
						}else{
							dev = "?id="+new Date().getTime();
						}
						
						var counter=0;
						
						for(var i=0;i<scriptArray.length;i++){
						var s= scriptArray[i];
						var src = s.split(".").join("/")+".js"+dev;
						var script = document.createElement("script");
						script.src = src;
						document.getElementsByTagName("head")[0].appendChild(script);
						script.onload = function(){
							counter++;
							if(counter == scriptArray.length){
								callback();
							}
						}
						script.onerror = function(){
							throw new Error("could not load Script:"+src);
						}
						}
						
					}else{
						throw new Error("the third param should be Function");
					}
					}else{
						throw new Error("the second param should be String [prod/dev]");
					}
					
				}else{
					throw new Error("the first param should be Array");
				}
			}
			
			
		},
		//loadScript() ends
		
		//ajax start
		//param should be object
		//url,dataType,type,async,success,failure
		ajax:function(params){
			if(params instanceof Object){
				var url;
				var dataType="html";
				var type="GET";
				var async=true;
				var data;
				
				if(params.url == undefined){
					throw new Error("the url parameter is missing");
				}else{
					url = params.url;
					if(params.dataType != undefined){
						dataType = params.dataType;
					}
					if(params.type != undefined){
						type = params.type;
					}
					if(params.async != undefined){
						async = params.async;
					}
					
					var xhr = new XMLHttpRequest();
					xhr.open(type,url,async);
					
					if(params.data != undefined){
						data = params.data;
			 xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
					}
					
					if(params.data == undefined){
					xhr.send(null);
					}else{
						xhr.send(data);
					}
					
					xhr.onreadystatechange = function(){
						if(xhr.readyState == 4){
							if(xhr.status == 200){
								if(params.success != undefined){
				if(dataType == "xml"){
				params.success(xhr.responseXML);
				}else if(dataType == "json"){
				params.success(JSON.parse(xhr.responseText));
				}else{
				params.success(xhr.responseText);
			    }
									
								
								}
							}else{
								if(params.failure != undefined){
								params.failure();
								}
							}
						}
					}
					
					
				}
				
				
			}else{
				throw new Error("the parameter should be object");
			}
		},
		isDevice:function(){
		}
	
		
		};
})();