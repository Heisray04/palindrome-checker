# Palindrome Checker
 
A small web page that tells you whether a word or phrase is a palindrome. A palindrome reads the same forwards and backwards, like "racecar" or "A man, a plan, a canal: Panama".
 
I built it to practise JavaScript string handling, DOM events and the Clipboard API.

## Live Link

[https://palindrome-checker-heisray.vercel.app/](https://palindrome-checker-heisray.vercel.app)
 
## How to use it
 
1. Type a word or phrase into the box.
2. Click **Check**, or press **Enter**.
3. The answer shows under the box, and the text is added to the history table.
4. Click the copy icon beside a history entry to copy its text. A small notice in the corner says if it worked.
Click the input box to clear the answer.
 
## What it does
 
- Ignores capital letters, spaces, punctuation and symbols. Only the letters a to z and the digits 0 to 9 are compared.
- Removes the characters `<` and `>` from the input, because the text is placed into the page as HTML.
- Shows a message if the box is empty (with a red outline) or has no letters or digits, and adds nothing to the history.
- Keeps a history table with a serial number, the text, and a green YES ✅ or red NO ❌. The table scrolls when it gets long, and its header stays in view.
- Checking the same text twice in a row (ignoring case) still shows the result, but doesn't add another row to the history.
- Adapts to small, medium and large screens with media queries.
- Has an animated gradient background.
The history is kept only while the page is open. It clears when you refresh.
 
## How it works
 
1. Turn the text into lowercase.
2. Keep only the letters a to z and the digits 0 to 9, using a regular expression.
3. Reverse the cleaned text.
4. Compare the cleaned text with the reversed one.
For example, "Was it a car or a cat I saw?" becomes `wasitacaroracatisaw`, which is the same in both directions.
 
New rows are added while the page runs, so the copy icons use one click listener on the whole table body (event delegation), not one listener per icon.
 
## Built with
 
HTML, CSS and plain JavaScript, with no libraries. The copy icon comes from Google Material Symbols.
 
## Run it
 
Open `index.html` in a browser. Nothing needs to be installed.
 
- The icon is loaded from Google Fonts, so it needs an internet connection. Without one, the icon shows as the text `content_copy`.
- The clipboard works only on secure pages (`https` or `localhost`). If copying fails, run the page with a local server, such as the Live Server extension in VS Code.

## Known limitations
 
- Letters outside a to z, like é or ñ, are ignored.

## Author
 
Created by Raymond.