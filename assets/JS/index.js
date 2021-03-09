const button = document.querySelector('#submit_button');

function changeUrlVideo(id) {
    const video = document.querySelector('iframe');
    video.setAttribute("src", `https://www.youtube.com/embed/${id}`);
}

function submit() {
    let url = document.getElementById("url").value;
    return url;
}

function youtube_parser(url){
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return (match&&match[7].length==11)? match[7] : false;
}

button.addEventListener('click', () => {
    let url = submit();
    let id = youtube_parser(url);
    changeUrlVideo(id);
});
