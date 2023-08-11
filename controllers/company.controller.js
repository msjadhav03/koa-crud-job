module.exports = {
  async create(context) {
    try {
      const data = await context.db.Company.create({
        name: context.request.body.name,
        address: context.request.body.address,
        type: context.request.body.type,
      });
      context.body = data;
    } catch (err) {
      context.throw(500, err);
    }
  },
  async findAll(context) {
    try {
      const data = await context.db.Company.findAll({});
      context.body = data;
    } catch (err) {
      context.throw(500, err);
    }
  },
  async update(context) {
    try {
      if (!context.params.id) {
        context.throw("400", "Bad Request");
      }
      const data = await context.db.Company.update(context.request.body, {
        where: {
          id: context.params.id,
        },
      });
      context.body = data;
    } catch (err) {
      context.throw(500, err);
    }
  },
  async destroy(context) {
    try {
      if (!context.params.id) {
        context.throw(400, "Bad Request");
      }
      const data = await context.db.Company.destroy({
        where: { id: context.params.id },
      });
      context.body = data;
    } catch (err) {
      context.throw(500, err);
    }
  },
  async findOne(context) {
    try {
      if (!context.params.id) {
        context.throw(400, "Bad Request");
      }
      const data = await context.db.Company.findOne({
        where: {
          id: context.params.id,
        },
      });
      context.body = data;
    } catch (err) {
      context.throw(500, err);
    }
  },
};
