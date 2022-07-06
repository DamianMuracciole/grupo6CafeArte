
module.exports = (sequelize, DataTypes) => {

    let alias = 'Purchase';
    
    let cols = {

        id: {
            type: DataTypes.INTEGER(10), autoIncrement: true, primaryKey: true, allowNull: false
        },
        invoice_num: {
            type: DataTypes.INTEGER(10), allowNull: false
        },
        invoice_date: {
            type: DataTypes.DATE
        },
        username: {
            type: DataTypes.TEXT(100)
        },
        quantity: {
            type: DataTypes.INTEGER(10)
        },
        prod_name: {
            type: DataTypes.TEXT(100)
        },
        prod_price: {
            type: DataTypes.DECIMAL(10,2)
        },
        total_amt: {
            type: DataTypes.DECIMAL(10,2)
        }
    }

    let config = {
        tableName: "purchases",
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false,
        underscored: true
    }
    
    
    const Purchase = sequelize.define(alias, cols, config);

        Purchase.associate = models => {
            Purchase.belongsToMany(models.Product, {
                as: 'products',
                through: 'products_purchases',
                foreignKey: 'purchases_id',
                otherKey: 'products_id',
                createdAt: 'created_at',
                updatedAt: 'updated_at'
        });

        Purchase.belongsTo(models.User, {
            as: 'users',
            foreignKey: 'users_id',
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        });

    }

    return Purchase;
}