module.exports = (sequelize, DataTypes) => {
    const Time = sequelize.define('Time', {
        id: {
            type: DataTypes.STRING(45),
            primaryKey: true,
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        },
        arriveTime: {
            type: DataTypes.STRING(100),
            allowNull: false,
        }
    }, {
        charset: 'utf8',
        collate: 'utf8_general_ci',
        timestamps: false
    });

    Time.Create = (data) => Time.create(data)
    Time.getData = (id) => Time.findOne({ where: { id: id } });
    Time.associate = (db) => {

    }

    return Time;
}