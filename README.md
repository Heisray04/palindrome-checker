# Palindrome Checker

A small web page that tells you whether a word or phrase is a palindrome. A palindrome reads the same forwards and backwards, like "racecar" or "A man, a plan, a canal: Panama".

I built this to practise JavaScript string handling and working with the DOM.

## How to use it

1. Type a word or phrase into the box.
2. Click **Check**, or press **Enter**.
3. The answer shows under the box, and the text is added to the history table.

Click the box again to clear the answer.

## What it does

- Ignores capital letters, spaces and punctuation when it compares.
- Shows a message and a red outline when the box is empty.
- Keeps a history table with a serial number, the text, and a green YES ✅ or red NO ❌ for each check.
- Scrolls the history table when it gets long, and keeps the table header in place.
- Changes its layout and text size on small, medium and large screens, using media queries.
- Has an animated gradient background.

The history is kept only while the page is open. It clears when you refresh.

## How it works

1. Turn the text into lowercase.
2. Keep only the letters a to z and the digits 0 to 9, using a regular expression.
3. Reverse the cleaned text.
4. Compare the cleaned text with the reversed one.

For example, "Was it a car or a cat I saw?" becomes `wasitacaroracatisaw`, which is the same in both directions.

## Technologies

- HTML
- CSS: flexbox, media queries, a keyframe animation and a sticky table header
- JavaScript (no libraries): DOM events, string methods and a regular expression

## Project files

- `index.html` - the page
- `styles.css` - the styles
- `main.js` - the checking logic and the history table

To run it, open `index.html` in a browser. Nothing needs to be installed.

## Known issues

- Only the letters a to z and the digits 0 to 9 are counted. Letters like é or ñ are treated as punctuation and ignored.

## Author

Created by Raymond.