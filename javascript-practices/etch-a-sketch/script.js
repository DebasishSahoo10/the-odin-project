const gridTbl = document.querySelector('#grid-tbl')
const clearBtn = document.querySelector('#clear-btn')

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



const clearGrid = () => {
    const td = document.querySelectorAll('td')
    td.forEach((e)=>{
        e.style.backgroundColor = "transparent"
    })
}

window.addEventListener("load", creatGrid)
clearBtn.addEventListener("click", clearGrid)