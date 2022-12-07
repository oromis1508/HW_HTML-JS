window.onload = function () {
    const data = [
        ['img', 'Изображение', 'Атрибут src содержит url, откуда берется картинка. Атрибут alt содержит текст, который указывает, что будет выведено при отсутствии картинки'],
        ['input', 'Элемент каких-либо действий', 'Атрибут value указывает начальное значение поля .Атрибут type указывает, какой тип будет у элемента'],
        ['br', 'Переход на новую строку', 'Единичное использование не работает перед элементами, которые автоматически располагаются на новой строке (например div и p)'],
        ['link', 'Используется для загрузки в документ других файлов', 'Используется в <head>>. Атрибут rel отвечает за тип загружаемого файла. Атрибут href содержит относительный либо абсолютный путь к файлу'],
        ['a', 'Ссылка', 'Может содержать закрывающийся тег, текст между тегами будет названием ссылки. Атрибут href содержит адрес, куда будет указывать ссылка'],
        
    ];
    const radioArr = document.querySelectorAll('input[type=radio]');
    radioArr.forEach(value=> 
        value.onchange = (event) =>{
            const tagName = document.querySelector(`label[for="${event.target.id}"]`).textContent;
            console.log(event.target.id)
            console.log(tagName)
            const info = data.find(el => el[0] === tagName);
    
            document.querySelector('h1').textContent = info[1];
            document.querySelector('p').textContent = info[2];
        }
    );    
}
