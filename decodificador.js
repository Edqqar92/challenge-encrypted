window.addEventListener('load', ()=>{
// declaro variables globales para las condiciones de lo solicitado
    var LETRAS = ['e', 'i', 'a', 'o', 'u'];
    var STRINGS = ['enter', 'imes', 'ai', 'ober', 'ufat']

// esta funcion me permite buscar una palabra en una oracion 
    function searchStr(index, str, sub){ 
        for (start = index; start < str.length; start ++) {
            for (subCount = 0; subCount < sub.length; subCount ++) {
              if (sub[subCount] !== str[start + subCount]) {
                break; //si no encontro la palabra sale del bucle
            } else if (subCount + 1 === sub.length) {
                return start; //devuelve la posicion inicial donde se encontro la palabra
                }
            }
          
        }
    }
// esta funcion decodifica el texto
    function decode(text){
        let decoded = "";
        text = text.split('');

        for(index = 0; index < text.length; index++){
            for(subIndex = 0; subIndex < LETRAS.length; subIndex++){
                if(text[index] === LETRAS[subIndex]){
                    resultSearch = searchStr(index, text, STRINGS[subIndex]);
                    if(resultSearch === index){
                        decoded += LETRAS[subIndex];
                        index += STRINGS[subIndex].length -1;
                        break;//sale del bucle cuando coinciden los index
                    } 
                } else if (subIndex === LETRAS.length -1) {
                    decoded += text[index];
                }
            }
        };
        return decoded;// devuelve el texto decodificado
    };

    const decodeButton = document.querySelector('.decode');
    const showText = document.querySelector(".text");

    decodeButton.addEventListener('click', ()=>{
        const text = document.querySelector('input').value;
        result = decode(text);
        showText.innerHTML = result;
    });
});


       