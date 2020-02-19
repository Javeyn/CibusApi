module.exports = function (sequelize, DataTypes) {
    var Following = sequelize.define("Following", {

    });

    Following.associate = function (models) {
        // We're saying that a Tasks should belong to an Author
        // A Tasks can't be created without an Author due to the foreign key constraint
        Following.hasMany(models.User, {
            foreignKey: {
                allowNull: true
            }
        });
    };

    return Following;
};