 /*editor start here*/


try{
    
    CKEDITOR.replace( 'editorr', {
        customConfig: '/ckeditor_settings/config.js',
    });
	CKEDITOR.editorConfig = function( config )
    {
		extraPlugins: 'placeholder',
        config.height = '150px';
		
    };
	
    
}
catch(e){
    console.log(e);
}

 /*editor end here*/
/*
$('#main-menu-navigation > li').map(function (index, item) {
	let current_text = $(item).find('a').attr('href').trim();
	if ($(item).hasClass('has-sub')) {
		$(item).find('ul > li').map(function (inner_index, inner_item) {
			let current_text_inner = $(inner_item).find('a').attr('href').trim();
			if (window.location.href.indexOf(current_text_inner) > -1) {
				$(inner_item).toggleClass('active');
				$(item).toggleClass('active');
			}
		});

	} else {
		if (window.location.href.indexOf(current_text) > -1)
			$(item).toggleClass('active');
	}

});
*/


$( document ).ready(function() {
	
	//var elem = document.querySelector('.switchery');
	//var init = new Switchery(elem);


//var switchery = new Switchery(elem, { color: '#faab43', secondaryColor: '#fC73d0', jackColor: '#fcf45e', jackSecondaryColor: '#c8ff77' });


	//var switchery = new Switchery(elem, {  color: '#7c8bc7', jackColor: '#9decff' });
	//$('#checkboxSwitch').checkboxpicker();
     $(".dataTables_filter input").attr("placeholder", "Search");

});



/*custom accordian show hide start here*/

const handleIcon = (icon, classToRemove, classToAdd) => {
			icon.classList.remove(classToRemove);
			icon.classList.add(classToAdd);								
}

const handleHint = (hint, classToRemove, classToAdd) => {
			classToRemove.length ? hint.classList.remove(classToRemove) : null;
			classToAdd.length ? hint.classList.add(classToAdd) : null;								
}

const registerDivClick = (divId, iconId, hintId) => {
	let div = document.getElementById(divId);
	div.onclick= function () {
		let icon = document.getElementById(iconId);
		let hint = document.getElementById(hintId);
		setTimeout(() => {
			if(div.classList.value.includes("collapsed"))
			{
			handleIcon(icon, 'fa-angle-down', 'fa-angle-right');
			handleHint(hint, '', 'd-none');
		}
			else
		{
			handleIcon(icon, 'fa-angle-right','fa-angle-down')		
			handleHint(hint, 'd-none', '')			
		}
	}, 100)	
}
}

try {
	registerDivClick("friendly-bet-accordian-div", "icon-friendly-bet", "hint-friendly-bet");
	registerDivClick("pool-bet-accordian-div", "icon-pool-bet", "hint-pool-bet");
	registerDivClick("third-accordian-div", "icon-third", "hint-pool-bet");
}
catch(e) {
	console.log(e)
}



/*custom accordian end hide start here*/


/*modal click change start here*/

$(function () {

	$('#cont').on('click', function () {
		$('.modal-1').modal('hide');
		$('.modal-2').modal('show');
	});
	$('#count-2').on('click', function () {
		$('.modal-2').modal('hide');
		$('.modal-3').modal('show');
	});
	
	$('#error').on('click', function () {
		$('.edit-instructor-modal').modal('hide');
		$('.error-modal').modal('show');
	}); 
	$('#unblock-msg').on('click', function () {
		$('.unblock-instructor-modal').modal('hide');
		$('.confirm-unblock-modal').modal('show');
	}); 
	$('#block-msg').on('click', function () {
		$('.block-instructor-modal').modal('hide');
		$('.confirm-block-modal').modal('show');
	}); 
	$('#block-user').on('click', function () {
		$('.block-user-modal').modal('hide');
		$('.confirm-block-user-modal').modal('show');
	}); 
	
	$('#delete-feed').on('click', function () {
		$('.feedback-modal').modal('hide');
		$('.confirm-feedback-modal').modal('show');
	}); 

	$('#delete-user').on('click', function () {
		$('.user-listing-modal').modal('hide');
		$('.confirm-user-listing-modal').modal('show');
	}); 

	$('#unblock-user').on('click', function () {
		$('.unblock-user-modal').modal('hide');
		$('.confirm-unblock-user-modal').modal('show');
	});
	
	/**** Pasword Visible***/
	$( ".enter-icon" ).click(function() {
		$(this).toggleClass("fa-eye fa-eye-slash");
	  var input = $(".enter-input");
	  if (input.attr("type") === "password") {
		 input.attr("type", "text");
	   } else {
		 input.attr("type", "password");
	   }
	  });
	/**** Pasword Visible***/
});



  

/*modal click change end here*/



/*date picker start here*/


$('#timepicker-1').timepicker({
	uiLibrary: 'bootstrap4'
});
$('#timepicker-2').timepicker({
	uiLibrary: 'bootstrap4'
});

$('#timepicker-3').timepicker({
	uiLibrary: 'bootstrap4'
});
$('#timepicker-4').timepicker({
	uiLibrary: 'bootstrap4'
});
$('#timepicker-5').timepicker({
	uiLibrary: 'bootstrap4'
});



$('#datepicker-1').datepicker({
	uiLibrary: 'bootstrap4'
});
$('#datepicker-2').datepicker({
	uiLibrary: 'bootstrap4'
});
$('#datepicker-3').datepicker({
	uiLibrary: 'bootstrap4'
});

 $('#datepicker-4').datepicker({
            uiLibrary: 'bootstrap4'
});

/*
 $('#datepicker-5').datepicker({
            uiLibrary: 'bootstrap4'
});

 $('#datepicker-6').datepicker({
            uiLibrary: 'bootstrap4'
});

 $('#datepicker-7').datepicker({
            uiLibrary: 'bootstrap4'
});
$('#datepicker-8').datepicker({
            uiLibrary: 'bootstrap4'
});
$('#datepicker-9').datepicker({
            uiLibrary: 'bootstrap4'
});
$('#datepicker-10').datepicker({
            uiLibrary: 'bootstrap4'
});

 $('#datepicker-11').datepicker({
            uiLibrary: 'bootstrap4'
});

 $('#datepicker-12').datepicker({
            uiLibrary: 'bootstrap4'
});
$('#datepicker-13').datepicker({
            uiLibrary: 'bootstrap4'
});

 $('#datepicker-14').datepicker({
            uiLibrary: 'bootstrap4'
});

 $('#datepicker-15').datepicker({
            uiLibrary: 'bootstrap4'
});

 $('#datepicker-16').datepicker({
            uiLibrary: 'bootstrap4'
});

 $('#datepicker-17').datepicker({
            uiLibrary: 'bootstrap4'
}); 
$('#datepicker-18').datepicker({
            uiLibrary: 'bootstrap4'
});

 $('#datepicker-19').datepicker({
            uiLibrary: 'bootstrap4'
});*/
/*date picker end here*/
