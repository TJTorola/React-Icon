const click         = selector => document.querySelector(selector).click();

const getDimensions = () => document.querySelector('span.ff0.fgc3').innerHTML.split('×').map(str => parseFloat(str));
const hasNext       = () => !document.querySelector('button.next').className.split(' ').includes('ng-hide');
const next          = () => click('.icon-next');

const switchCanvas  = () => click('.icon-canvas');
const alignCenter   = () => click('.icon-align-center');
const increaseWidth = () => click('.icon-icw');
const decreaseWidth = () => click('.icon-dcw');

const switchScale   = () => click('.icon-scale');
const fit           = () => click('.icon-fit-to-canvas');
const scaleDown     = () => click('.icon-scale-down');
const scaleUp       = () => click('.icon-scale-down');

const setWidth = () => {
	const dimensions = getDimensions(),
	      target = dimensions[1];

	let width = dimensions[0];

	switchCanvas();
	while (width <= target) {
		increaseWidth();
		width = getDimensions()[0];
	}

	while (width > target + .25) {
		decreaseWidth();
		width = getDimensions()[0];
	}

	alignCenter();
}

const setScale = () => {
	switchScale();
	fit();
	scaleDown();
}

const set = () => {
	setWidth();
	setScale();
}

const nextSet = () => {
	next();
	set();
}


const run = time => {
	let interval;

	const round = () => {
		if (hasNext()) {
			nextSet();
		} else {
			clearInterval(interval);
		}
	}

	interval = setInterval(round, time);
}
