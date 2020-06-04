module.exports = function(sequelize, DataTypes) {
    //This is setting up the Post model to be used
    const Posts = sequelize.define("Posts", {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        post: {
            type: DataTypes.STRING,
            allowNull: false
        },
        url: {
            type: DataTypes.STRING
        }
    });
    //This is establishing the foreign keys so that each post belongs to a user and each post has many comments
    Posts.associate = function(models) {
        Posts.hasMany(models.Comments, {
            onDelete: "cascade"
        });
        Posts.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Posts;
};