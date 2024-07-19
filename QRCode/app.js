document.getElementById('generateButton').addEventListener('click', function() {
    var text = document.getElementById('textInput').value;
    var color = document.getElementById('colorInput').value;
    var qrcodeContainer = document.getElementById('qrcode');

    qrcodeContainer.innerHTML = "";

    new QRCode(qrcodeContainer, {
        text: text,
        width: 256,
        height: 256,
        colorDark : color,
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });
});
