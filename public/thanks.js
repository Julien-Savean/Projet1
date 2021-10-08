const byline = document.getElementById('byline');
bylineText = byline.innerHTML;
bylineArr = bylineText.split('');
byline.innerHTML = '';

let span;
let letter;

for (let i = 0; i < bylineArr.length; i++) {
    span = document.createElement("span");
    letter = document.createTextNode(bylineArr[i]);
    if (bylineArr[i] == ' ') {
        byline.appendChild(letter);
    } else {
        span.appendChild(letter);
        byline.appendChild(span);
    }
}