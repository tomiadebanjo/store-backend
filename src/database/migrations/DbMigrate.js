import db from '../models';

class DbMigrate {
  static dropAndCreateTables() {
    db.sequelize.sync({ force: true });
  }
}

DbMigrate.dropAndCreateTables();
