module.exports = function (sequelize, DataTypes) {
    const Friends = sequelize.define("Friends", {
        friendId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });

    Friends.associate = function (models) {
        Friends.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        })
    }

    return Friends;
}