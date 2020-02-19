module.exports = function (sequelize, DataTypes) {
    var Follower = sequelize.define("Follower", {

    });

    Follower.associate = function (models) {
        // We're saying that a Tasks should belong to an Author
        // A Tasks can't be created without an Author due to the foreign key constraint
        Follower.belongsToMany(models.User, {
            foreignKey: {
                allowNull: true
            }
        });
    };

    return Follower;
};