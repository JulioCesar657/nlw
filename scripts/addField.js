//Primeiro eu devo procurar o botão
document.querySelector("#add-time")
    .addEventListener('click', cloneField) //Atribuindo um evento ao botão e chamando a função; Funciona como um "onclick" no html, mas, nesse caso, no javascript.


//Executar a função
function cloneField() {
    //Duplicando os campos. Funciona como um "document.getElementById"
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) //"cloneNode" --> Duplica as propriedades atribuidas.

    //Está atribuindo a váriavel todos os campos 'input' que estiver dentro desse documento através do "querySelecetorAll"
    const fields = newFieldContainer.querySelectorAll('input')

    //Esta função limpará os campos que são clonados. Ou seja, para cada (forEach) campo, executará essa funcionalidade. 
    fields.forEach(function(field) {
        //Limpando o field
        field.value = ""
    });

    //Vai adicionar o clone na seguinte propriedade. 
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}