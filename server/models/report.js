module.exports = (sequelize, DataTypes) => {
    const Report = sequelize.define('Report', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        content: {
            type: DataTypes.STRING(1000),
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        },
        rescueState: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '0'
        }
    }, {
        charset: 'utf8',
        collate: 'utf8_general_ci',
        timestamps: false
    });

    Report.associate = (db) => {
        db.Report.hasMany(db.Image);

        db.Report.belongsTo(db.User, {
            // foreignKey: {
            //     fieldName: "uid",
            //     allowNull: false,
            //     onDelete: 'cascade'
            // }
        });

        Report.Create = (data) => Report.create(data);
        Report.getAllData = () => Report.findAll({
            include: [db.Image]
        });
        Report.change = (id, state) => Report.update(
            { rescueState: state },
            { where: {id: id} }, 
        );
    }

    return Report;
}