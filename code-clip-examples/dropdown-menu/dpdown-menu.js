var $ = function(id){
	return document.getElementById(id);
};

var $dropdownBtn = $('btn'),
	$dropdownMenu = $('dropdown-collapse'),
	$contaniner = $('contaniner');

$dropdownBtn.addEventListener('click', (e) => {
	if(e.target){
		$dropdownMenu.classList.toggle('in');
	}
	e.stopPropagation();
})
$dropdownMenu.addEventListener('click', (e) => {
	if(e.currentTarget){
		e.currentTarget.classList.remove('in');
	}
	e.stopPropagation();
})
$contaniner.addEventListener('click', (e) => {
	var re = $dropdownMenu.className;
	if(!/in/.test(re)) return;
	$dropdownMenu.classList.remove('in');
})