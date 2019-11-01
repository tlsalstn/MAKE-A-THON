module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: {
            type: DataTypes.STRING(45),
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        password: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        phoneNumber: {
            type: DataTypes.STRING(11),
            allowNull: false
        }
    }, {
        charset: 'utf8',
        collate: 'utf8_general_ci',
        timestamps: false
    });

    User.associate = (db) => {
        db.User.hasMany(db.Report);

        User.Create = (data) => User.create(data);
        User.getUser = (id) => User.findOne({where: { id: id }});
    }

    return User;
}