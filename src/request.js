export default async function newRequest (){
    let response = await fetch('https://apidata.mos.ru/v1/datasets/658/rows?api_key=553083a7-1c08-4000-a53c-9ab2318390e7');
    let data = await response.json()
    console.log(data)
    if(!response.ok){
        console.log('Ошибка', response.status);
    }
    
}
newRequest();