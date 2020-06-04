module.exports = function(sequelize, DataTypes) {
    //Setting up the comments model to be used
    const Comments = sequelize.define("Comments", {
        comment: {
            type: DataTypes.STRING, 
            allowNull: false
        }
    });
    //This is setting up the foreign keys. This shows that the Comments model belongs to a post and a user
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