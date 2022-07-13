
// module.exports = (sequelize, DataTypes) => {

//     let alias = 'Cart';
    
//     let cols = {

//         id: {
//             type: DataTypes.INTEGER(10), autoIncrement: true, primaryKey: true, allowNull: false
//         },
//         username: {
//             type: DataTypes.TEXT(100)
//         },
//         quantity: {
//             type: DataTypes.INTEGER(10)
//         },
//         prod_name: {
//             type: DataTypes.TEXT(100)
//         },
//         prod_price: {
//             type: DataTypes.DECIMAL(10,2)
//         },
//         total_amt: {
//             type: DataTypes.DECIMAL(10,2)
//         },
//         status: {
//             type: DataTypes.TEXT(45), allowNull: false
//         }
//     }

//     let config = {
//         tableName: "cart",
//         createdAt: 'created_at',
//         updatedAt: 'updated_at',
//         deletedAt: false,
//         underscored: true
//     }
    
    
//     const Cart = sequelize.define(alias, cols, config);

//      // Definir las asociaciones: Un Cart tiene muchas 1 usuario, 1 Cart tiene muchos Carts
//      Cart.associate = models => {
//         Cart.belongsTo(models.User, {
//             as: 'users',
//             foreignKey: 'users_id',
//             createdAt: 'created_at',
//             updatedAt: 'updated_at'
//         });

//         Cart.belongsToMany(models.Product, {
//             as: 'products',
//             through: 'products_cart',
//             foreignKey: 'cart_id',
//             otherKey: 'products_id',
//             createdAt: 'created_at',
//             updatedAt: 'updated_at'
//         });

//     }

//     return Cart;
// }