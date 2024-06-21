const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;

class Like extends Model { }

Like.init({
        id: { type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true }
    },
    {
        sequelize: sequelizeInstance, modelName: 'likes', timestamps: true, freezeTableName: true, 
        indexes: [{
            unique: true, fields: ['userId', 'postId']
        }]
    }
)

module.exports = Like;