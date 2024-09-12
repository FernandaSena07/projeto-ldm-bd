const { Sequelize, DataTypes } = require('sequelize');
const db = require('./banco');  // Caminho do arquivo de configuração do banco de dados

const Post = db.sequelize.define('dados_cadastrais', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    endereco: {
        type: DataTypes.STRING,
        allowNull: false
    },
    bairro: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cep: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cidade: {
        type: DataTypes.STRING,
        allowNull: false
    },
    estado: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'dados_cadastrais'
});

module.exports = Post;
