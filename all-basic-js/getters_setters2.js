var person = { 
   firstName:'jhony',
   lastName: 'Smith',
   get fullName(){
					return this.firstName + ' ' + this.lastName;
   }, 
    set fullName (name){
          var words = name.toString().split(' ');
            this.firstName = words[0] || '';
            this.lastName = words[1]|| '';

       }  
    
  }
