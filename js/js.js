var myVideo = document.getElementById("video1");

function PlayPause() {
	if (myVideo.paused)
		myVideo.play();
	else
		myVideo.pause();
}

$(document).ready(function () {
	$(function () {
		$("#commentForm").validate();
	});
});
