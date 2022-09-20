
module.exports = (sequelize, DataTypes) => {

    let alias = 'Rol';
    
    let cols = {

    id: {
        type: DataTypes.INTEGER(10), autoIncrement: true, primaryKey: true, allowNull: false
    },
    rol_name: {
        type: DataTypes.TEXT(10), allowNull: false
    }
    
    }

    let config = {
        tableName: "rols",
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false,
        underscored: true
    }
        
    const Rol = sequelize.define(alias, cols, config);

    // Definir las asociaciones: Un Rol tiene muchas compras, 1 Rol tiene muchos carritos
    Rol.associate = models => {
        Rol.hasMany(models.User, {
            as: 'users',
            foreignKey: 'rols_id',
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        });

        

    }


    return Rol;
}