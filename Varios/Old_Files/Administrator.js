
// module.exports = (sequelize, DataTypes) => {

//     let alias = 'Administrator';
    
//     let cols = {

//         id: {
//             type: DataTypes.INTEGER(10), autoIncrement: true, primaryKey: true, allowNull: false
//         },
//         first_name: {
//             type: DataTypes.TEXT(100), allowNull: false
//         },
//         last_name: {
//             type: DataTypes.TEXT(100), allowNull: false
//         },
//         email: {
//             type: DataTypes.TEXT(100), allowNull: false
//         },
//         password: {
//             type: DataTypes.TEXT(200), allowNull: false
//         }
//     }

//     let config = {
//         tableName: "administrators",
//         createdAt: 'created_at',
//         updatedAt: 'updated_at',
//         deletedAt: false,
//         underscored: true
//     }
    
    
//     const Administrator = sequelize.define(alias, cols, config);
//     return Administrator;
// }