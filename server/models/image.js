module.exports = (sequelize, DataTypes) => {
    const Image = sequelize.define('Image', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        path: {
            type: DataTypes.STRING(1000),
            allowNull: false
        }
    }, {
        charset: 'utf8',
        collate: 'utf8_general_ci',
        timestamps: false
    });

    Image.associate = (db) => {
        db.Image.belongsTo(db.Report, {
            // foreignKey: {
            //     fieldName: "rid",
            //     allowNull: false
            // }
        })

        Image.Create = (data) => Image.create(data);
        Image.getAll = () => Image.findAll();
    }

    return Image;
}