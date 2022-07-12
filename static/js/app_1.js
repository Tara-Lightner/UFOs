// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");


// 11.5.1 Build Table and clear data (a.k.a. clean slate)
function buildTable(data) {
    tbody.html("");
}

// 11.5.2 Add the forEach Function
// Next, loop through each object in the data
// and append a row and cells for each value in the row
data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");
    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
    let cell = row.append("td");
    cell.text(val);
    }
    );
})

//11.5.3 Add Filters
function handleClick() {
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

//11.5.4 Use the "If" Statement
if (date) {
    filteredData = filteredData.filter(row => row.datetime === date);
}

// Call Build the Filtered Table
    buildTable(filteredData);
}

// Listen to Event (Click)
d3.selectAll("#filter-btn").on("click", handleClick);

//Build Final Table
buildTable(tableData);  