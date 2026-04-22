const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/TravelNest";

main()
  .then(async() => {
    console.log("connected to DB");
    await initDB();
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  try {
    console.log("Deleting old data...");
    await Listing.deleteMany({});

    console.log("Inserting new data...");
    await Listing.insertMany(initData.data);

    console.log("✅ Data was initialized");
  } catch (err) {
    console.log("❌ Error inserting data:", err);
  }
};

