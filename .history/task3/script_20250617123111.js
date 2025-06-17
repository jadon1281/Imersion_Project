const btn = document.getElementById('btn');
const temputl = "";
const inp = document.getElementById('inp');
btn.addEventListener('click',()=>{
    const URL = tempUrl+inp.ariaValueMax;

    fetch(URL).then((res)>={
            return res.json()
        })
        .then((data)=>{
            console.log(data);
        })
})
