/*
 * number four
 * site images html tags 
 *
 * (c)no4.co.jp
 *
 */

function writeHtmlSideImage() {
	var num = Math.floor(Math.random() * 7) + 1;
	document.write("<img src=\"../siteimages/side/side0" + num + ".jpg\" alt=\"\" width=\"210\" height=\"108\" class=\"image-border\" />");
}