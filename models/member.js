const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Member = sequelize.define('Member', {
    code: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    name: DataTypes.STRING,
    penaltyUntil: DataTypes.DATE
    });

    return Member;
};
