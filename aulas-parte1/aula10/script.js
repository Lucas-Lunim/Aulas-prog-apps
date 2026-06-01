let data = []

async function fetchData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    data = await response.json()
}

fetchData()

async function setData(){
    await fetchData();

    const element = document.getElementById('data')

    const reduceData = data.reduce((acc, value) => {
        if(value.municipio?.microrregiao?.mesorregiao?.UF?.sigla == "PR"){
            return acc + 1;
        }
        else{
            return acc;
        }
    }, 0)

    element.innerHTML = reduceData
}

setData();
