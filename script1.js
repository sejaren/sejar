let itms = 6; // itemsPerPage
let stpg = 0; // startPage
let pltd = 4; // pageLinksToDisplay
let winw = window.innerWidth;

function optionsByWindowSize() {
	winw = window.innerWidth;
	if (winw > 1600) { itms = 6; stpg = 0; pltd = 4; }
	else if (winw > 1230) { itms = 5; stpg = 0; pltd = 4; }
	else if (winw > 980) { itms = 4; stpg = 0; pltd = 4; }
	else if (winw > 750) { itms = 3; stpg = 0; pltd = 4; }
	else if (winw > 510) { itms = 2; stpg = 0; pltd = 4; }
	else { itms = 2; stpg = 0; pltd = 4; }
}

function reportWindowSize() {
	optionsByWindowSize();
	//purePajination Script - START
	if (document.readyState === "complete") {
		var gallery = new purePajinate({
			containerSelector: '.items',
			itemSelector: '.items > div',
			navigationSelector: '.pagination',
			/*wrapAround: true,*/
			pageLinksToDisplay: pltd,
			showFirstLast: true,
			navLabelPrev: '   ',
			navLabelNext: '   ',
			navLabelFirst: '   ',
			navLabelLast: '   ',
			itemsPerPage: itms,
			startPage: stpg
		});
	} //purePajination Script - END
}

document.onreadystatechange = reportWindowSize;
window.onresize = reportWindowSize;
