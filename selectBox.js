$(document).ready(function() {
				enableSelectBoxes();
			});
			
			function enableSelectBoxes(){
				$('div.selectBox').each(function(){
					$(this).children('span.selected').html($(this).children('ul.selectOptions').children('li.select').html());
					$(this).children('input.price_values').attr('value',$(this).children('ul.selectOptions').children('li.select').attr('data-value'));
					
					$(this).children('span.selected,span.selectArrow').mousedown(function(){
					if($(this).parent().children('ul.selectOptions').css('display') == 'none'){
							$(this).parent().children('ul.selectOptions').css('display','block');
						}else{
				$(this).parent().children('ul.selectOptions').css('display','none');
						}
						
					});
					
					$(this).find('li.selectOption').click(function(){
						$(this).parent().children('.not-select').attr('class', 'selectOption');
						$(this).addClass('select');
						$(this).parent().css('display','none');
                        $(this).parent().parent().children('input.price_values').attr('value',$(this).attr('data-value'));
						$(this).parent().siblings('span.selected').html($(this).html());
					});
				});				
			}//-->
			
			
			
			
			
			// ----   self edit
			
	$('.selectOption').mouseover(function(){
		$('.select').attr('class','selectOption not-select');
		$('.selectOption').removeAttr('id');
		$(this).attr('id','hover');
		
	});
	
	$('.selectBox .selected,.selectArrow').mousedown(function(){
		$('.selectBox .selectOption').removeAttr('id');
		
		if($(this).parent(this).is('#open')){
			
					}else{
			$('.selectBox').removeAttr('id');
			$(this).parent(this).attr('id', 'open');
			
			var selected = document.getElementsByClassName($(this).attr('class'));
			var selectOptions = document.getElementsByClassName('selectOptions');
			for(var i=0;i<selected.length;i++){
				if(selected[i].id != 'open'){
					selectOptions[i].style.display = 'none';
				}
			}
		}
		$('.not-select').attr('class','selectOption select');
			
			
		});
		
		
		
		
		$('html').click(function(e){
			if (!e) e = event;
			if(e.target.id != 'open'&&
			   e.target.className != 'selectBox'&&
			   e.target.className != 'selected'&&
			   e.target.className != 'selectArrow'&&
			   e.target.className != 'selectOption select'){
				$('.selectOptions').css('display', 'none');
				$('.not-select').attr('class','selectOption select');
				$('.selectBox').removeAttr('id');
			}
		});
