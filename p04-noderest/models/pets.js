const conexao = require('../db/conexao');
const fileUpload = require('../files/fileUpload');

class Pet {
    add(pet, res) {
        const sql = 'INSERT INTO Pets SET ?';
        fileUpload(pet.imagem, pet.nome, (err, newImageUrl) => {
            if (err) {
                res.status(400).json({ err });
            } else {
                const newPet = { nome: pet.nome, imagem: newImageUrl };
                conexao.query(sql, newPet, err => {
                    if(err) {
                        res.status(400).json(err);
                    } else {
                        res.status(200).json(newPet);
                    }
                });
            }
        });
    }
}

module.exports = new Pet;