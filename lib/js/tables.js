// Tables
function centurionTables() {
  $('.striped-table').each(function(){
		//$('tbody tr:odd', this).addClass("odd");
		$('tbody tr:even', this).addClass("even");
	});

	//@TODO: rewrite into a more useful and streamlined function without jQuery
	$('table').wrap('<div class="ctn-table-wrapper"><div class="ctn-responsive-table"></div></div>');
}
centurionTables();