function multiplicationTable() {
    let number = document.querySelector("#txtn")
    let multTable = document.querySelector("#selectMT")

    if(number.value.length == 0) {
        window.alert("Please, type a number!")
    } else {
        let n = Number(number.value)

        let c = 1
        multTable.innerHTML = ""
        while(c <= 10) {
            let item = document.createElement("option")
            item.text = `${n} x ${c} = ${n * c}`
            multTable.appendChild(item)
            c++
        }
    }
    
}