
module.exports = (sequelize, DataTypes) => {

    let alias = 'Usuario';
    
    let cols = {

    id: {
        type: DataTypes.INTEGER(10), autoIncrement: true, primaryKey: true, allowNull: false
    },
    nombre: {
        type: DataTypes.TEXT(100), allowNull: false
    },
    apellido: {
        type: DataTypes.TEXT(100), allowNull: false
    },
    usuario: {
        type: DataTypes.TEXT(100), allowNull: false
    },
    correo: {
        type: DataTypes.TEXT(100), allowNull: false
    },
    fechaNacimiento: {
        type: DataTypes.DATE, allowNull: true
    },
    contrasena: {
        type: DataTypes.TEXT(200), allowNull: false
    },
    dobleContrasena: {
        type: DataTypes.TEXT(200), allowNull: false
    },
    imagen: {
        type: DataTypes.TEXT(200), allowNull: false
    }
    }

    let config = {
        tableName: "usuarios",
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false,
        underscored: true
    }
    
    
    const Usuario = sequelize.define(alias, cols, config);
    return Usuario;
}