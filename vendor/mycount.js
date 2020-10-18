
function count_info(first,last){
	this.first=first;
	this.last=last;
	this.valArray=[]
}

var countArray=[];
/* countArray[0]=new c_item(0,98);
 countArray[1]=new c_item(0,95);
 countArray[2]=new c_item(0,59);
 countArray[3]=new c_item(0,63);
 countArray[4]=new c_item(0,100);
*/


var element=$(".count");

for(i=0;i<element.length;i++){

	countArray[i]=new count_info(0,element.eq(i).text());
	//console.log(countArray[i]);

}

/*




var stop_handle=setInterval(count,50,countArray);

function count(count_array){



	for(i=0;i<element.length;i++){
    //console.log(count_array[i].first);

       if(  count_array[i].first <= count_array[i].last){
		
		  element.eq(i).text(countArray[i].first);
		  count_array[i].first=count_array[i].first+1;


		}

		//console.log(countArray);
		

	}
	//console.log("ok");

}

*/



//the main concept is when you use object's function inside
//settimeout and setinterval you can not use object property by this key word inside funtion of setinterval 
//or settimeout.
//you have to pass self object as argument if you want to use object property method as you
//normally use this.
//inside function of setinterval and settimeout.





function countup(){

  this.count=0;

  this.start1=function(self){//this function takes countup object
  	//and give this object setInterval handle and run its own funtion
  	//inside setInterval function and call the function a number of time
  	//is the value of the object target value; 

  	


  	self.time_obj=setInterval(
  		function(self){
  		
  		self.count=self.count+1;
  		console.log(self.count);
  		if(self.count==3){
  			self.stop(self);
  			//alert("ok")

  		}




  		},2000,self);





  };

  this.start2=function(){

  	self=this;
  	self.start1(self);

  };

  this.stop=function(self){
  	clearInterval(self.time_obj);
  	console.log(self.time_obj,"wafmk");
  	self.stat=false;
  };

  this.reset_and_start=function(self){
  
  	self.reset();
  	self.start1(self);

         
  



  };

  this.delay2=function(time){
  	self=this

  	setTimeout(self.reset_and_start,time,this);

  	//here we did not use reset beacuse it will reset instant
  	//when  

  };
  this.reset=function(){
  	this.count=0;
  	//clearInterval(this.time_obj);
  	console.log("reset")

  };




}

a1=new countup();


//a1.start2();
//a1.delay2(9000);


//************here is task
//whe call delay method will detroy previous time-handle
//and reset count=0 then call 


//setTimeout(a1.fun,9000)


function slice_num(num1,num2,n){

	this.num1=num1;
	this.num2=num2;
	this.n=n;
	this.param;

	this.numArray=[];
	this.fun_slice=function(){
		this.param=Math.abs(this.num1-this.num2)/(this.n-1);
		for(i=0;i<n;i=i+1){

			this.numArray[i]=parseInt(this.num1+(this.param*i));





		}
			};

	this.get_slice=function(){
		console.log(this.numArray);

	};

	this.squize_chk=function(){
		var diff=(Math.abs(this.num1-this.num2)+1);

		if(this.n<=diff){
			return true;
		}else{
			
			return false;
		}

	};









		








}


x1=new slice_num(0,30,30);
x1.fun_slice();
x1.get_slice();

//console.log(x1.squize_chk());


function element_array(element){
  this.element=$(cls);
  this.element_array=[];
  this.get=function(){
    for(i=0;i<element.length;i=i+1){
      var target=this.element.eq(i).text();
      this.element[i]=new count_info(0,target,this.get_slice)


    }








  };

  this.get_slice=function(num1,num2,n){

    var s1=new slice_num(num1,num2,n);
    s1.fun_slice();
    return s1.get_slice();

  };








}


