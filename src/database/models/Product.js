
module.exports = (sequelize, DataTypes) => {

    let alias = 'Product';
    
    let cols = {

    id: {
        type: DataTypes.INTEGER(10), autoIncrement: true, primaryKey: true, allowNull: false
    },
    name: {
        type: DataTypes.TEXT(100), allowNull: false
    },
    weight: {
        type: DataTypes.INTEGER(10), allowNull: false
    },
    detail: {
        type: DataTypes.TEXT(1000), allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL(10,2), allowNull: false
    },    
    category: {
        type: DataTypes.TEXT(50), allowNull: false
    },
    session: {
        type: DataTypes.TEXT(100), allowNull: false
    },
    image: {
        type: DataTypes.TEXT(200), allowNull: false
    },
    quantity: {
        type: DataTypes.INTEGER(10), allowNull: false
    },
    status: {
        type: DataTypes.TEXT(5), allowNull: false, default: 'A'
    }
    }

    let config = {
        tableName: "products",
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false,
        underscored: true
    }
    
    
    const Product = sequelize.define(alias, cols, config);

      // Definir las asociaciones: Un Product tiene muchas 1 usuario, 1 Product tiene muchos Products
      Product.associate = models => {
        Product.belongsToMany(models.Purchase, {
            as: 'purchases',
            through: 'products_purchases',
            foreignKey: 'products_id',
            otherKey: 'purchases_id',
            createdAt: 'created_at',
            updatedAt: 'updated_at'
    });

        // Product.belongsToMany(models.Cart, {
        //     as: 'cart',
        //     through: 'products_cart',
        //     foreignKey: 'products_id',
        //     otherKey: 'cart_id',
        //     createdAt: 'created_at',
        //     updatedAt: 'updated_at'
        // });

    }

    return Product;
}