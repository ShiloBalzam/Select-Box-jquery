active select box step by step:

option 1 ---

1. go to your page and replace  all <select> with <div class='selectBox'>
                    <input type="hidden" value="" class="price_values"/>
                    <span class='selected'></span>
                    <span class='selectArrow'>&#9660;</span>
                    <ul class="selectOptions">
                        <li class="selectOption select" data-value="value 1">Option 1</li>
                        <li class="selectOption" data-value="value 2">Option 2</li>
                        <li class="selectOption" data-value="value 3">Option 3</li>
                    </ul>
                    
                    place the "select" class on the selected one you want
                  
2.add the css and jquery-1.11.0.min files to the <head> tag

3.add selectBox.js the the end of the page (after </body> tag)

option 2 ---

1. do not change any of your code just simply do 2 and 3 in 'option 1' and add quick_selectBox.js to end of page
