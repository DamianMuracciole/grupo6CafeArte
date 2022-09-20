
module.exports = (sequelize, DataTypes) => {

    let alias = 'User';
    
    let cols = {

    id: {
        type: DataTypes.INTEGER(10), autoIncrement: true, primaryKey: true, allowNull: false
    },
    first_name: {
        type: DataTypes.TEXT(100), allowNull: false
    },
    last_name: {
        type: DataTypes.TEXT(100), allowNull: false
    },
    username: {
        type: DataTypes.TEXT(100), allowNull: false
    },
    email: {
        type: DataTypes.TEXT(100), allowNull: false
    },
    birth_date: {
        type: DataTypes.DATE, allowNull: true
    },
    password: {
        type: DataTypes.TEXT(200), allowNull: false
    },
    confirm_password: {
        type: DataTypes.TEXT(200), allowNull: false
    },
    image: {
        type: DataTypes.TEXT(200), allowNull: false
    },
    status: {
        type: DataTypes.TEXT(5), allowNull: false, default: 'A'
    }
    }

    let config = {
        tableName: "users",
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false,
        underscored: true
    }
        
    const User = sequelize.define(alias, cols, config);

    // Definir las asociaciones: Un User tiene muchas compras, 1 User tiene muchos carritos
    User.associate = models => {
        User.hasMany(models.Purchase, {
            as: 'purchases',
            foreignKey: 'purchases_id',
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        });

        // User.hasMany(models.Cart, {
        //     as: 'cart',
        //     foreignKey: 'users_id',
        //     createdAt: 'created_at',
        //     updatedAt: 'updated_at'
        // });

        User.belongsTo(models.Rol, {
            as: 'rols',
            foreignKey: 'rols_id',
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        });

    }


    return User;
}