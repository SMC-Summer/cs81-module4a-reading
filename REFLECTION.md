Reflection on readingTracker.js
What was the most helpful aspect of this code’s structure?
The most helpful aspect was the clear separation of concerns. The data (readingLog array) is defined at the top, completely separate from the functions that operate on it.
Each function has a single, well-defined purpose: getTotalPages only calculates the total, getLogsForDay only filters by day, and summarizeByBook only aggregates data by title.
This makes the code easy to read, understand, and debug. If there's a problem with the total page count, I know exactly which function to look at.

What part was confusing or took longer to understand?
The logic inside the summarizeByBook function took a moment longer to understand than the other functions.
The concept of building an object dynamically (bookSummary) where keys are derived from the data itself (entry.title) is a powerful but more advanced pattern.
The line if (bookSummary[title]) is a clever way to check if a book has been seen before.
Initially, I had to trace the loop with a couple of entries to fully grasp how the summary object was being built up one entry at a time.
