//console.log('\'Allo \'Allo!');

 $(document).ready(function(){

    



        var start = '<div class="boxbox2 center outlinecolor"><div class="row" id="itemtodo2"><div class="col-xs-2"><button type="button" id="buttoncircle" class="buttonsize boxcolor no-outline buttons"><i class="fa fa-circle-thin circle buttonstyle"></i></button></div><div class="col-xs-10 hovertext boxcolor box-style3"><div class="col-xs-10" id="todotext"><p class="left text2 textfont" id="todolist">';

        var finish = '</p></div><div class="col-xs-2"> <button type="button" id="buttonexit" class="update buttonsize no-outline"><i class="material-icons">clear</i></button></div></div></div><div class="row"></div></div></div>';

   
      var entityMap = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': '&quot;',
      "'": '&#39;',
      "/": '&#x2F;'
      };

      function escapeHtml(string) {
      return String(string).replace(/[&<>"'\/]/g, function (s) {
      return entityMap[s];
      });
      }

		
	


       	$('input').keypress(function(e) {

       	var textinput = $('#todoinput').val();
       	var textlength = $('#todoinput').val().length;
        var text = escapeHtml(textinput);

     
      
        if(e.which == 13) {

        	if ($.trim(text).length >= 3) {

        		 $('#itemtodo').prepend(start + text + finish);

        		$('#todoinput').val('');

        	}

        	else {

        		alert('Todo input must be >= 3 characters. Not inlcuding spaces.');
        	}
    	}	
    	});

        $('#itemtodo').on('click','#buttonexit', function(e){ //user click on remove text
        $(this).parents('div').eq(3).remove();
      })
    
  
        $('body').on('click', '.buttonstyle', function() {
        $(this).toggleClass("fa-circle-thin fa-check-circle-o");
        });


     });