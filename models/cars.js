module.exports = function (sequelize, DataTypes) {
  const Cars = sequelize.define("Cars", {
    make: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    model: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1, 20]
    },
    year: {
      type: DataTypes.INTEGER,
      isDate: true,
      defaultValue: null,
      len: [4, 10]
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    },
    photo: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    },
    description: {
      type: DataTypes.TEXT,
      notEmpty: true,
    },

}, {
  timestamps: false
  });
return Cars;
};

  // Cars.associate = function(models) {
  //   Cars.belongsTo(models.Customers, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };