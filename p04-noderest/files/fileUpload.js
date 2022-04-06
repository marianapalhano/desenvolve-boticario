const fs = require('fs');
const path = require('path');

module.exports = (url, fileName, imageCreated) => {
    const validExtensions = ['jpg', 'jpeg', 'png'];
    const extension = path.extname(url);
    const extensionIsValid = validExtensions.indexOf(extension.substring(1)) !== -1;

    if(!extensionIsValid) {
        const err = 'Tipo de arquivo inválido';
        console.log('Erro! Tipo de arquivo inválido');
        imageCreated(err)
    } else {
        const newImageUrl = `./assets/images/${fileName}${extension}`;
    
        fs.createReadStream(url)
        .pipe(fs.createWriteStream(newImageUrl))
        .on('finish', () => imageCreated(false, newImageUrl));
    }
}