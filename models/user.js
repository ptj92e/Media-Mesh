//Requier bcrypt to hash passwords to be saved in the database
const bcrypt = require("bcryptjs");

module.exports = function (sequelize, DataTypes) {
    //This is setting up the app to create new Users
    const User = sequelize.define("User", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        artform: {
            type: DataTypes.STRING,
            allowNull: false
        }, 
        picture: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });
    //This establishes that each User has many posts, comments, and friends
    User.associate = function (models) {
        User.hasMany(models.Posts, {
            onDelete: "cascade"
        });
        User.hasMany(models.Friends, {
            onDelete: "cascade"
        });
        User.hasMany(models.Comments, {
            onDelete: "cascade"
        })
    };
    // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
    User.prototype.validPassword = function (password) {
        return bcrypt.compareSync(password, this.password);
    };
    // Hooks are automatic methods that run during various phases of the User Model lifecycle. In this case, before a User is created, we will automatically hash their password
    User.addHook("beforeCreate", function (user) {
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    });
    return User;
}