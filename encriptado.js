window.addEventListener('load',()=>{
// declaro variables globales para las condiciones de lo solicitado
    var LETRAS = ['e', 'i', 'a', 'o', 'u'];
    var STRINGS = ['enter', 'imes', 'ai', 'ober', 'ufat']
// esta funcion encripta el texto completo 
    function encrypt(text) {
        let encryptyed = "";
        text = text.split('');
        
        for(index = 0; index < text.length; index++){
            for(subIndex = 0; subIndex < LETRAS.length; subIndex++){
                if(text[index] === LETRAS[subIndex]){
                    encryptyed += STRINGS[subIndex];
                    break;
                } else if (subIndex === LETRAS.length -1){
                    encryptyed = encryptyed.concat(text[index]);
                }
            } 
        }
        return encryptyed;//devuelve el texto encriptado
    };
    const encryptButton = document.querySelector('.encrypt');
    const showText = document.querySelector(".text");

    encryptButton.addEventListener('click', ()=>{
        const text = document.querySelector('input').value;
        result = encrypt(text);
        showText.innerHTML = result;
    });

});
