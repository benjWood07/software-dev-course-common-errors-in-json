
//LIST OF ERRORS IDENTIFIED AND CORRECTIONS MADE

/*
ERROR 1: Missing Comma After "checkInDate"
- Location: Line 4, after "2024-05-15"
- What was wrong: No comma separating "checkInDate" property from "checkOutDate" property
- Why it's a problem: JSON requires commas to separate key-value pairs within objects. 
  Without the comma, the parser cannot distinguish where one property ends and the next begins.
- Fix: Added comma after "2024-05-15"

ERROR 2: Unquoted Property Key "name"
- Location: Line 7, first guest object
- What was wrong: The key 'name' was not enclosed in double quotes
- Why it's a problem: JSON specification requires ALL keys to be strings enclosed in double quotes. 
  While JavaScript allows unquoted property names, JSON does not.
- Fix: Changed 'name:' to '"name":'

ERROR 3: Use of 'undefined' Value
- Location: Line 13, Bob Smith's age property
- What was wrong: The value 'undefined' was used for the age
- Why it's a problem: 'undefined' is a JavaScript primitive type, not a valid JSON data type. 
  JSON only supports: string, number, boolean, null, object, and array.
- Fix: Changed 'undefined' to 'null' (the JSON equivalent for representing no value)

ERROR 4: Trailing Comma in Array
- Location: Line 18, amenities array
- What was wrong: Extra comma after the last element "Parking"
- Why it's a problem: JSON does not allow trailing commas in arrays or objects. 
  While modern JavaScript permits trailing commas, the JSON specification strictly forbids them, 
  causing parse errors.
- Fix: Removed the trailing comma from the amenities array
*/

// CORRECTED JSON FILE

const validBookingJSON = `
{
  "hotelName": "Grand City Hotel",
  "checkInDate": "2024-05-15",
  "checkOutDate": "2024-05-20",
  "guests": [
    {
      "name": "Alice Johnson",
      "age": 30,
      "email": "alice.johnson@example.com"
    },
    {
      "name": "Bob Smith",
      "age": null,
      "email": "bob.smith@example"
    }
  ],
  "roomDetails": {
    "type": "Suite",
    "pricePerNight": 200,
    "amenities": ["WiFi", "Breakfast", "Parking"]
  }
}
`;

// VALIDATION TEST

console.log("Test Corrected JSON\n");
try {
  const bookingData = JSON.parse(validBookingJSON);
  console.log("Parsed Data:");
  console.log(bookingData);
  console.log(`Hotel Name: ${bookingData.hotelName}`);
  console.log(`First Guest: ${bookingData.guests[0].name}`);
  console.log(`Room Type: ${bookingData.roomDetails.type}`);
  console.log(`Price Per Night: $${bookingData.roomDetails.pricePerNight}`);
  console.log(`Amenities: ${bookingData.roomDetails.amenities.join(", ")}`);
} catch (error) {
  console.error("JSON parsing error:", error.message);
}

// REFLECTION QUESTIONS

/*
 What tools or techniques did you use to identify the errors?

I used a combination of techniques:
- Basic visual inspection of the JSON structure, looking for syntax issues
- Applied what was learned from the "Building and Debugging Complex JSON Data Structures" lesson
- Checked for the correct quotation marks around all keys and string values
- Verified commas were placed between all key-value pairs
- Looked for trailing commas in arrays and objects
- Confirmed all values used valid JSON data types

 How did you confirm that your corrected JSON file was valid?

I confirmed validity through multiple methods:
- Used JavaScript's JSON.parse() method to test parsing without errors
- Validated the corrected JSON using JSONLint (https://jsonlint.com/)
- Checked that the parsed object could be accessed and manipulated
- Verified all bracket and braces were properly matched

 Which errors were the most difficult to spot? Why?

The trailing comma in the amenities array was the most difficult to spot because:
- Modern JavaScript allows trailing commas
- The comma appears at the end of a line, which can be a little harder to notice
- It doesn't stand out as a structural problem when reading the code

 What strategies can help you avoid these kinds of errors in the future?

Strategies include:
- Formatting JSON with consistent indentation and proper spacing
- Running JSON validators during development before deployment
- Double-checking commas, quotes, and brackets after writing JSON
- Testing JSON parsing immediately after creation using JSON.parse()
*/
