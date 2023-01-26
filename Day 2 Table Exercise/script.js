window.addEventListener('load', makeTable);

const hrName = ["movie name", "released year", "type"];
const movies = [
    {
        title: "AAAAA",
        year: "1990",
        type: "mystery"
    },
    {
        title: "BBBBB",
        year: "1991",
        type: "documentary"
    },
    {
        title: "CCCCC",
        year: "1992",
        type: "romance"
    },
    {
        title: "DDDDD",
        year: "1993",
        type: "comedy"
    },
    {
        title: "EEEEE",
        year: "1994",
        type: "anime"
    },
]

function makeTable() {

    let body = document.querySelector("body");
    let table = document.createElement("table");
    let thead = document.createElement("thead");
    let tbody = document.createElement("tbody");
    let tr = document.createElement("tr");
    body.appendChild(table);
    table.appendChild(thead);
    thead.appendChild(tr);
    table.appendChild(tbody);

    for (let i = 0; i < 3; i++) {
        let th = document.createElement("th");
        tr.appendChild(th);
        th.textContent = hrName[i];
    }

    for (let i = 0; i < 5; i++) {
        let tr = document.createElement("tr");
        tbody.appendChild(tr);
        for (let j = 0; j < 3; j++) {
            let td = document.createElement("td");
            tr.appendChild(td);
            table.rows[i].cells[j];
            td.textContent= Object.values(movies[i])[j];
        }

    }
}
