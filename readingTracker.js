/*
  readingTracker.js
  A simple script to track and analyze weekly reading data.
  GitHub Repo URL: https://github.com/SMC-Summer/cs81-module4a-reviewtracker
*/

// Data structure: An array of objects. Each object represents a reading session.
// This is a good way to store structured data that can be easily looped through.
const readingLog = [
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    pagesRead: 50,
    dayOfWeek: "Monday",
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    pagesRead: 75,
    dayOfWeek: "Tuesday",
  },
  {
    title: "Dune",
    author: "Frank Herbert",
    pagesRead: 100,
    dayOfWeek: "Tuesday",
  },
  {
    title: "Dune",
    author: "Frank Herbert",
    pagesRead: 60,
    dayOfWeek: "Wednesday",
  },
  {
    title: "The Color of Magic",
    author: "Terry Pratchett",
    pagesRead: 80,
    dayOfWeek: "Friday",
  },
];

/**
 * @summary Calculates the total number of pages read for the week.
 * @purpose This function iterates through the reading log and sums up the pages read from each session.
 * @param {Array<Object>} log - An array of reading log entries.
 * @returns {number} The total number of pages read.
 */
function getTotalPages(log) {
  // Initialize a variable to hold the total. This is our accumulator.
  let totalPages = 0;

  // This for...of loop is a modern and readable way to iterate over array elements.
  for (const entry of log) {
    // Accesses the 'pagesRead' property of each entry object and adds it to the total.
    totalPages += entry.pagesRead;
  }

  return totalPages;
}

/**
 * @summary Finds all reading log entries for a specific day.
 * @purpose This function filters the main log to find all reading sessions that occurred on a given day.
 * @param {Array<Object>} log - The array of reading log entries.
 * @param {string} day - The day of the week to filter by (e.g., "Tuesday").
 * @returns {Array<Object>} An array of log entries that match the specified day.
 */
function getLogsForDay(log, day) {
  // The .filter() method creates a new array with all elements that pass the test
  // implemented by the provided function. It's a clean way to select data.
  const entriesForDay = log.filter(function (entry) {
    // This is the condition for the filter. It checks if the entry's dayOfWeek matches the target day.
    // Using .toLowerCase() on both makes the comparison case-insensitive, which is more robust.
    return entry.dayOfWeek.toLowerCase() === day.toLowerCase();
  });

  return entriesForDay;
}

/**
 * @summary Creates a summary of reading by book title.
 * @purpose This function aggregates the data to show how many pages were read for each unique book.
 * @param {Array<Object>} log - The array of reading log entries.
 * @returns {Object} An object where keys are book titles and values are the total pages read for that book.
 */
function summarizeByBook(log) {
    // We use an object here to store the summary. Objects are perfect for key-value pairs.
    const bookSummary = {};

    // A for...of loop to go through each reading entry.
    for (const entry of log) {
        const { title, pagesRead } = entry; // Using destructuring for cleaner access to object properties.

        // This is a key piece of logic.
        // It checks if the book title already exists as a key in our summary object.
        if (bookSummary[title]) {
            // If it exists, we add the pages from the current entry to the existing total.
            bookSummary[title] += pagesRead;
        } else {
            // If it doesn't exist, we create a new property (key) for the book
            // and set its value to the pages read in the current entry.
            bookSummary[title] = pagesRead;
        }
    }
    return bookSummary;
}


/*
 * SUGGESTION FOR IMPROVEMENT:
 * The current `readingLog` allows for adding multiple entries for the same book on the same day,
 * but there's no function to add new entries in a structured way. Adding a dedicated function
 * like `addReadingEntry` would make the code more organized and prevent errors.
 * It encapsulates the logic for adding a new log, ensuring every new entry has the correct
 * properties (title, author, pagesRead, dayOfWeek). This makes the script more scalable and easier to maintain.
 */
function addReadingEntry(log, title, author, pagesRead, dayOfWeek) {
    const newEntry = {
        title,
        author,
        pagesRead,
        dayOfWeek,
    };
    // The .push() method adds the new entry object to the end of the log array.
    log.push(newEntry);
    console.log(`Added entry for "${title}".`);
}


// --- Function Calls & Output ---

// 1. Calculate and display the total pages read all week.
const totalPagesRead = getTotalPages(readingLog);
console.log(`Total pages read this week: ${totalPagesRead}`);
console.log("--------------------");

// 2. Find and display all reading done on Tuesday.
const tuesdayLogs = getLogsForDay(readingLog, "Tuesday");
console.log("Reading logs for Tuesday:", tuesdayLogs);
console.log("--------------------");

// 3. Summarize reading by book
const bookSummary = summarizeByBook(readingLog);
console.log("Summary by book:", bookSummary);
console.log("--------------------");


// 4. ADD A TEST CASE:
// This demonstrates how the suggested improvement (`addReadingEntry`) would be used.
addReadingEntry(readingLog, "Project Hail Mary", "Andy Weir", 95, "Saturday");

const updatedTotalPages = getTotalPages(readingLog);
const updatedBookSummary = summarizeByBook(readingLog);

console.log("Updated Total Pages:", updatedTotalPages);
console.log("Updated Book Summary:", updatedBookSummary);
