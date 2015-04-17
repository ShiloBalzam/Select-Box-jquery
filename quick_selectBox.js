selectBox = document.getElementsByTagName('select');
		last_i=0;
	  var selectBoxLength =  selectBox.length;
	   for(var i=0;i<selectBoxLength;i++){
		   selectBox = document.getElementsByTagName('select');
		   if(i+1 == selectBoxLength && selectBox.length == 1){
			   i= 0;
			   last_i=1;
		   }
		   var option = selectBox[i].childNodes;
		   
		    
		   if(option[1].value != option[1].innerHTML){
			   option_text=1;
		   }
		   for(var j=1 ,option_value=[];j<option.length;j=j+2){ 
				option_value.push(''+option[j].value.trim()+''); 
		   }//end for option_value
		   if(option_text){
			  for(var j=1 ,option_text=[];j<option.length;j=j+2){ 
				option_text.push(''+option[j].innerHTML.trim()+''); 
			  }//end for option_text
		   }
		  
		   ul = document.createElement("ul");
		   ul.className = 'selectOptions';
		   
		 
		   for(var j=0;j<option_value.length;j++){
			   var li = document.createElement("li");
			   li.className = 'selectOption';
			   if(selectBox[i].selectedIndex == j){
				   li.className = 'selectOption select';
			   }
			   li.setAttribute('data-value',option_value[j]);
			   if(option_text){
			   		li.innerHTML = option_text[j];
			   }else{
					li.innerHTML = option_value[j];   
			   }
			   ul.appendChild(li);
			   
		   }
		   var output = document.createElement("div");
		   output.className  = 'selectBox';
		   var input = document.createElement("input");
		   input.setAttribute('type','hidden');
		   input.setAttribute('name',selectBox[i].getAttribute("name"));
		   input.className = 'price_values';
		   output.appendChild(input);
		   
		   var selected = document.createElement("span");
		   selected.className = 'selected';
		   output.appendChild(selected);
		   var selectArrow = document.createElement("span");
		   selectArrow.className = 'selectArrow';
		   selectArrow.innerHTML = '&#9660;';
		   output.appendChild(selectArrow);
		   output.appendChild(ul);

		   selectBox[i].parentNode.replaceChild(output, selectBox[i]);
		   if(last_i == 1){
			   i = selectBoxLength-1;
		   }
		   delete option_text;
	   }// end for selectBox
	   
	   
	   
