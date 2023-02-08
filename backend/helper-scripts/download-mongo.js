const https = require('https');
const fs = require('fs');

const OUTPUT_FILE_NAME = "./../mongo.zip";
const OUTPUT_FILE = fs.createWriteStream(OUTPUT_FILE_NAME);
const MONGO_DB_VERSION = "6.0.4";


/**
 * downloads the mongoDB and saved it.
 */
(function () {
  console.log("Downloading MongoDB")
  https.get(`https://fastdl.mongodb.org/windows/mongodb-windows-x86_64-${MONGO_DB_VERSION}.zip`, function(response) {
    response.pipe(OUTPUT_FILE);

    // after download completed close filestream
    OUTPUT_FILE.on("finish", () => {
      OUTPUT_FILE.close();
      console.log("Download Completed");
    });
  });
})();

