async function getcountry(param){
    const options = {
        method: 'GET',
        url: 'https://covid-19-data.p.rapidapi.com/country/code',
        params: {code: param},
        headers: {
          'x-rapidapi-host': 'covid-19-data.p.rapidapi.com',
          'x-rapidapi-key': '7bbbf7ef36msh496831d8995bb5cp167ac0jsn1214f1d375f4'
        }
      };
    var data=[];
    await axios
    .request(options) 
    .then(function (response) {
        data= response.data;
    }).catch(function (error) {
        console.error(error);
    });
    return data;
}
async function getcodes(){
    let data=[];
    await axios
    .get('countrycodes.json')
    .then(function(res){
        data=res.data;
    })
    return data;
}
async function getcases(code=""){
    if(code==""){
        code=document.getElementById("codes").value;
        if(code=="Choose Country") return;
        else{
            code=code[code.length-3]+code[code.length-2];
        }
    }
    localStorage.setItem("Code",code);
    let res= await getcountry(code);
    document.getElementById("country").innerHTML= res[0].country+" ("+res[0].code+")";
    document.getElementById("confirm").innerHTML= res[0].confirmed;
    document.getElementById("active").innerHTML= res[0].critical;
    document.getElementById("recover").innerHTML= res[0].recovered;
    document.getElementById("decrease").innerHTML= res[0].deaths;
}
window.addEventListener("load",async ()=>{
    let lastsearch=localStorage.getItem('Code');
    if(!lastsearch) lastsearch='in';
    getcases(lastsearch);
    var data= await getcodes();
    var codes=document.getElementById("codes");
    for(var i=0;i<data.length;i++){
        codes.innerHTML+="<option>"+data[i].name+"("+data[i].code+")</option>";
    }
})
