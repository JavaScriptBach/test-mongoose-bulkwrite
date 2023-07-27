const mongoose = require("mongoose");
const MongoMemoryReplSet = require("mongodb-memory-server").MongoMemoryReplSet;

describe("Test bulkwrite", function () {
  this.timeout(10000);
  it("Test bulkwrite", async () => {
    const db = await MongoMemoryReplSet.create({
      replSet: {storageEngine: "wiredTiger"},
      binary: {version: "6.0.5"}
    });
    const uri = db.getUri("test-database");
    const schema = new mongoose.Schema({
      name: String
    });
  
    const Test = mongoose.model("Test", schema);
  
    await mongoose.connect(uri);

    // await Test.bulkWrite([]);
  
    await Test.bulkWrite([], {ordered: false});
  });
});

