module.exports = function (sequelize, DataTypes) {
    //Setting up the Friends model to be used
    const Friends = sequelize.define("Friends", {
        friendId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });
    //Each friend model has a friendId and those friends belong to other users to establish that relationship.
    Friends.associate = function (models) {
        Friends.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        })
    }

    return Friends;
}