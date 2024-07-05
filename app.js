document.onload(CleanTextArea());

function CleanTextArea(){
    var textValue = document.getElementById('TextArea').value = "";
}

function CriptText(){
    var textValue = document.getElementById('TextArea').value;
    textValue = textValue.replace(/e/g, 'enter');
    textValue = textValue.replace(/i/g, 'imes');
    textValue = textValue.replace(/a/g, 'ai');
    textValue = textValue.replace(/o/g, 'ober');
    textValue = textValue.replace(/u/g, 'ufat');
    HideUI(textValue);
}

function DecriptText(){
    var textValue = document.getElementById('TextArea').value;
    textValue = textValue.replace(/enter/g, 'e');
    textValue = textValue.replace(/imes/g, 'i');
    textValue = textValue.replace(/ai/g, 'a');
    textValue = textValue.replace(/ober/g, 'o');
    textValue = textValue.replace(/ufat/g, 'u');
    HideUI(textValue);
}

function HideUI(text){
    document.getElementById('LimparDecodificador').style.display = 'none';
    document.getElementById('TextoTraduzido').style.display = 'block';
    document.getElementById('TextoTraduzido').innerText = text;
    document.getElementById('BotaoCopiar').style.display = 'block';
}

function Copy(){
    var text = document.getElementById('TextoTraduzido').textContent;
    navigator.clipboard.writeText(text);
}