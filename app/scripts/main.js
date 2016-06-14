//console.log('\'Allo \'Allo!');

 $(document).ready(function(){

        /*$("#buttonexit").click(function(){
          $("#itemtodo").remove();
          });
		*/



        var start = '<div class="boxbox2 center outlinecolor"><div class="row" id="itemtodo2"><div class="col-xs-2"><button type="button" id="buttoncircle" class="buttonsize boxcolor no-outline"><i class="fa fa-circle-thin circle"></i></button></div><div class="col-xs-10 hovertext boxcolor box-style3"><div class="col-xs-10" id="todotext"><p class="left text2 textfont" id="todolist">';

        var finish = '</p></div><div class="col-xs-2"> <button type="button" id="buttonexit" class="update buttonsize no-outline"><i class="material-icons">clear</i></button></div></div></div><div class="row"></div></div></div>';

        var button = '<i id="bc" class="fa fa-dot-circle-o"></i>';

       	var buttons = '<i id="buttoncircle" class="fa fa-circle-thin"></i>';

      // $("input").keypress(function(e) {
        //if(e.which == 13) {
        //$("#itemtodo").clone().appendTo("#itemtodo2");
        //}
        //}); 

		
	


       	$("input").keypress(function(e) {

       		



       	var textinput = $("#todoinput").val();

       	var textlength = $("#todoinput").val().length;



      
        if(e.which == 13) {

        	if (textlength >= 3 && $.trim(textinput).length >= 3) {

        		 $("#itemtodo").prepend(start + textinput + finish);

        		$("#todoinput").val("");

        	}

        	else {

        		alert("Todo input must be >= 3 characters. Not inlcuding spaces.");
        	}
       
    	}	
    	});

    



       	$("#buttoned").click(function(){
        $("#buttoncircle").replaceWith(button);


        

       	});

       	$("#buttoned").click(function(){
        $("#bc").replaceWith(buttons);
       	});




        
    	$("#itemtodo").on('click','#buttonexit', function(e){ //user click on remove text
        $("#itemtodo2").remove();
    	})







     

     });