$('.part').hover (
	function() {
		$('.description').html($(this).attr('description-data'));
		$('.description').fadeIn();
	},
	function() {
		$('.description').fadeOut(50);
	}
)

$('.part1').hover (
	function() {
		$('.description1').html($(this).attr('description1-data'));
		$('.description1').fadeIn();
	},
	function() {
		$('.description1').fadeOut(50);
	}
)

$('.part2').hover (
	function() {
		$('.description2').html($(this).attr('description2-data'));
		$('.description2').fadeIn();
	},
	function() {
		$('.description2').fadeOut(50);
	}
)

$('.part3').hover (
	function() {
		$('.description3').html($(this).attr('description3-data'));
		$('.description3').fadeIn();
	},
	function() {
		$('.description3').fadeOut(50);
	}
)

$('.part4').hover (
	function() {
		$('.description4').html($(this).attr('description4-data'));
		$('.description4').fadeIn();
	},
	function() {
		$('.description4').fadeOut(50);
	}
)