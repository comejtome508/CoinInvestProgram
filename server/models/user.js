module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        email: {
            type: DataTypes.STRING(30),
            allowNull: false, //필수
            unique: true,
        },
        nickname: {
            type: DataTypes.STRING(30),
            allowNull: false, //필수 
        },
        password: {
            type: DataTypes.STRING(100),
            allowNull: false, //필수
        },
    }, {
        charset: 'utf8',
        collate: 'utf8_general_ci', //한글 저장
    });
    User.associate = (db) => {
        db.User.hasMany(db.Post);
        db.User.hasMany(db.Comment);
        db.User.belongsToMany(db.Post, { through: 'Like', as: 'Liked' }); //내가 좋아요 누른 것들
    };

    return User;
}