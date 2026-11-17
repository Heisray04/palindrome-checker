// Extraction and assignment of DOM elements.

const textField = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const result = document.getElementById('result');
const tbody = document.querySelector("table tbody");
const defaultRow = document.querySelector("tbody tr.first");

const copyTextResult = document.createElement("span");
copyTextResult.classList.add("copied-feedback");


function cleanAndMerge(text) {
    // Removes every non-digits and non-English alphabet including whitespaces.
    const alphaNum = /[a-z0-9]/gi;
    const cleaned = text.toLowerCase().match(alphaNum);
    if (!cleaned) {
        result.textContent = "Enter a Text!";
        return;
    }
    return cleaned.join("");
}

function isPalindrome(txt) {
    // Reverses an input and compare it with its unreversed version.
    if (txt === "") {
        textField.classList.add('invalid');
        result.textContent = "Input field is Empty!";
        return;
    }
    textField.classList.remove('invalid');
    const cleanedInp = cleanAndMerge(txt);
    if (!cleanedInp || !txt) return;
    const reversedInp = cleanedInp.split("").reverse().join("");
    result.innerHTML = `<b>"${txt}"</b> ${cleanedInp === reversedInp ? 'is' : 'is not'} a palindrome.`;
    return cleanedInp === reversedInp ? "YES ✅" : "NO ❌";
}

function updateHistory(text, result) {
    // Add a new word and its result to the history table.
    if (tbody.contains(defaultRow)) defaultRow.remove();
    const tBodyRow = document.createElement("tr");
    const lastText = tbody.querySelector("tr:last-child td:nth-child(2) .text");
    if (lastText && text.trim().toLowerCase() === lastText.textContent.toLowerCase()) return;
    tBodyRow.innerHTML = `
    <td>
        ${tbody.rows.length + 1}
    </td>
    <td>
        <span class="text">${text.trim()}</span>
        <button type="button" class="copy-btn" aria-label="Copy text">
            <span class="material-symbols-outlined" title="Copy">content_copy</span>
        </button>
    </td>
    <td style="background-color:${result.includes("YES") ? 'green' : 'red'};">${result}</td>`;
    tbody.append(tBodyRow);
}

async function copyText(text) {
    // Copies a text to the clipboard and displays a success/failure message.
    try {
        await navigator.clipboard.writeText(text);
        copyTextResult.innerHTML = "<span style='color:rgb(1, 83, 1);'>✔ Copied</span>";
    } catch (e) {
        copyTextResult.innerHTML = "<span style='color:rgb(160, 11, 11);'>❌ Failed to Copy</span>";
    } finally {
        document.documentElement.append(copyTextResult);
    }
}

function removeGtAndLt(txt) {
    // Removes "<" and ">" from the text.
    if (txt.includes("<")) {
        txt = txt.replaceAll("<", "");
        console.log(txt);
    }
    if (txt.includes(">")) {
        txt = txt.replaceAll(">", "");
        console.log(txt);
    }
    return txt;
}

function display() {
    // Primary function.
    let txt = textField.value;
    const text = removeGtAndLt(txt);
    const result = isPalindrome(text);
    if (!result) return;
    updateHistory(text, result);
    textField.blur();
}

checkBtn.addEventListener('click', display);

textField.addEventListener('keydown', (e) => {
    if (e.key === "Enter") display();
})

textField.addEventListener('click', () => {
    textField.classList.remove('invalid');
    result.textContent = "";
});

tbody.addEventListener('click', (e) => {
    if (
        tbody.contains(defaultRow) ||
        !e.target.closest('.copy-btn')
    ) return;
    const td = e.target.closest('td');
    const text = td.querySelector(".text").textContent.trim();
    copyText(text);
});