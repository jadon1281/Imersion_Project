const btn = document.getElementById('btn');
const tempUrl = "";
const inp = document.getElementById('inp');
btn.addEventListener('click',()=>{
    const URL = tempUrl+inp.value;

    fetch(URL)
        .then((res){
            return res.json()
        })
        .then((data)=>{
            console.log(data);
        })
})
