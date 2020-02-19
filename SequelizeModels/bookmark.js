module.exports = function (sequelize, DataTypes) {
    var Bookmark = sequelize.define("Bookmark", {

    });

    Bookmark.associate = function (models) {
        // We're saying that a Tasks should belong to an Author
        // A Tasks can't be created without an Author due to the foreign key constraint
        Bookmark.belongsToMany(models.Post, {
            foreignKey: {
                allowNull: true
            }
        });
        Bookmark.belongsToMany(models.User, {
            foreignKey: {
                allowNull: true
            }
        });
    };

    return Bookmark;
};