const Condition = require('../models/Condition');
const conditions = require('../data/conditions');

// Insert the bundled condition content the first time the database is empty.
module.exports = async () => {
    const count = await Condition.estimatedDocumentCount();
    if (count > 0) return;
    await Condition.insertMany(conditions);
    console.log(`Seeded ${conditions.length} conditions`);
};
