const textField = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const result = document.getElementById('result');
const tbody = document.querySelector("table tbody");
const defaultRow = document.querySelector("tbody tr.first");
const copyTextResult = document.createElement("span");
copyTextResult.classList.add(".copied-feedback");

document.documentElement.append(copyTextResult);


function cleanAndMerge(text) {
    const alphaNum = /[a-z0-9]/gi;
    return text.toLowerCase().match(alphaNum).join("");
}

function isPalindrome() {
    if (textField.value === "") {
        textField.classList.add('invalid');
        result.textContent = "Input field is Empty!";
        return;
    }
    textField.classList.remove('invalid');
    const cleanedInp = cleanAndMerge(textField.value);
    const reversedInp = cleanedInp.split("").reverse().join("");
    result.innerHTML = `<b>"${textField.value}"</b> ${cleanedInp === reversedInp ? 'is' : 'is not'} a palindrome.`;
    return cleanedInp === reversedInp ? "YES ✅" : "NO ❌";
}

function updateHistory(text, result) {
    if (tbody.contains(defaultRow)) defaultRow.remove();
    const tBodyRow = document.createElement("tr");
    tBodyRow.innerHTML = `
    <td>${tbody.rows.length + 1}</td>
    <td><span class="text">${text}</span><span class="material-symbols-outlined" title="copy text">content_copy</span></td>
    <td style="background-color:${result.includes("YES") ? 'green' : 'red'};">${result}</td>`;
    tbody.append(tBodyRow);
}

async function copyText(text) {
    try {
        await navigator.clipboard.writeText(text);
        copyTextResult.innerHTML = "<span style='color:rgb(1, 83, 1);'>✔ Copied</span>";
    } catch (e) {
        copyTextResult.innerHTML = "<span style='color:rgb(160, 11, 11);'>❌ Failed to Copy</span>";
    }
}

function display() {
    const result = isPalindrome();
    if (!result) return;
    updateHistory(textField.value, result);
    textField.value = "";
}

checkBtn.addEventListener('click', display);

textField.addEventListener('keydown', (e) => {
    if (e.key === "Enter") display();
})

textField.addEventListener('click', () => {
    textField.classList.remove('invalid');
    result.textContent = "";
});

document.querySelector("tbody tr td").addEventListener('click', () => {
    console.log("clicked")
    const text = document.querySelector("td:nth-child(2) .text")
    document.querySelector("tbody tr").addEventListener('click', (e) => {
        if (!e.target.closest('.material-symbols-outlined')) return;
        copyText(text.textContent);
    });
});