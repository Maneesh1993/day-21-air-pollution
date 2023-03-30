// http://api.openweathermap.org/data/2.5/air_pollution?lat={lat}&lon={lon}&appid={API key}

async function foo(){
var lat=document.getElementById("lat").value
    console.log(lat)   
var lon=document.getElementById("lon").value
    console.log(lon)

    var url=await fetch(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=000e53c91b35108ffea3bc05e70de0e3`);

    // console.log(url)

    var url2=await url.json();
        console.log(url2);

        for(var key in url2){
           var url3=url2[key]
            console.log(url3)
        }

        for(var key2 in url3){
           var url4=url3[key2].components;
            console.log(url4)
            }

            for(var key3 in url4){
                console.log(key3)
                console.log(url4[key3]);
                
                var ooops=document.createElement("div");
                ooops.innerHTML=`${key3}:${url4[key3]}`;
                ooops.style.textAlign="center";
                ooops.style.fontWeight="bold"
                ooops.style.fontSize="30px"
                document.body.append(ooops)
}


    // console.log(url)

}

foo()

