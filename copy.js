window.addEventListener('load', ()=>{
    copyButton = document.querySelector('.copy');
    copyText = document.querySelector('.text');

    copyButton.addEventListener('click', ()=>{
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
    });
});
