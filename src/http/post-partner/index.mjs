import fetch from "node-fetch";

export async function handler(req) {
  let incomingString = req.body;
  // decoding from base64
  if (req.body.indexOf("fields") === -1) {
    let buff = Buffer.from(req.body, "base64");
    incomingString = buff.toString("ascii");
  }
  let postData = incomingString;
  // parsing json
  if (typeof req.body === "string") {
    postData = JSON.parse(incomingString);
  }

  let inputData = {};
  inputData.records = [{ fields: postData.fields }];
  let options = postData.options;

  let airUrl = `https://api.airtable.com/v0/${options.database}/${encodeURI(
    options.table
  )}`;

  let fetchAir = await fetch(airUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env["AIRTABLE_API_KEY"]}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(inputData),
  })
    .then((response) => response.json())
    .then((responseData) => {
      return {
        statusCode: 200,
        body: JSON.stringify(responseData),
      };
    })
    .catch((error) => {
      console.error("Error:", error);
      return {
        statusCode: 500,
        body: `Error ${JSON.stringify(error)}`,
      };
    });
}
