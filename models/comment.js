module.exports = function(sequelize, DataTypes) {
    const Comments = sequelize.define("Comments", {
        comment: {
            type: DataTypes.STRING, 
            allowNull: false
        }
    });

    Comments.associate = function(models) {
        Comments.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
        Comments.belongsTo(models.Posts, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    
    return Comments;
}