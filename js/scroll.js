(function(doc) {
	let i = 0;
	const $counter = doc.getElementById('counter');
	window.onload = () => {
		window.addEventListener('scroll', (e) => {
			$counter.innerHTML = i++;
			// console.log(e.timeStamp);
			// i++;
		})
	}

	doc.getElementsByClassName('reset')[0].addEventListener('click', () => {
		$counter.innerHTML = 0;
		i = 0;
	})
})(document)