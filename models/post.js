module.exports = function(sequelize, DataTypes) {
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