$('.part').hover (
	function() {
		$('.description-graph').html($(this).attr('description-data'));
		$('.description-graph').fadeIn();
	},
	function() {
		$('.description-graph').fadeOut(50);
	}
)

$('.part1').hover (
	function() {
		$('.description1-graph').html($(this).attr('description1-data'));
		$('.description1-graph').fadeIn();
	},
	function() {
		$('.description1-graph').fadeOut(50);
	}
)

$('.part2').hover (
	function() {
		$('.description2-graph').html($(this).attr('description2-data'));
		$('.description2-graph').fadeIn();
	},
	function() {
		$('.description2-graph').fadeOut(50);
	}
)

$('.part3').hover (
	function() {
		$('.description3-graph').html($(this).attr('description3-data'));
		$('.description3-graph').fadeIn();
	},
	function() {
		$('.description3-graph').fadeOut(50);
	}
)

$('.part4').hover (
	function() {
		$('.description4-graph').html($(this).attr('description4-data'));
		$('.description4-graph').fadeIn();
	},
	function() {
		$('.description4-graph').fadeOut(50);
	}
)