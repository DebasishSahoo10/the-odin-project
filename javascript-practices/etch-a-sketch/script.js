const gridTbl = document.querySelector('#grid-tbl')




const creatGrid = () => {
    for(let i=0; i<17; i++) {
        let tableRows = document.createElement("tr")
        tableRows.id = "row" + i
        gridTbl.appendChild(tableRows)
        let rows = document.getElementById("row" + i)
        for(let j=0; j<17; j++) {
            let tableColumns = document.createElement("td")
            rows.appendChild(tableColumns)
            tableColumns.addEventListener("mouseover", ()=> {
                tableColumns.style.backgroundColor = "black"
            })
        }
    }
}


window.addEventListener("load", creatGrid)