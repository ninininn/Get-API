
let searchBlock = document.getElementById("search");
let axiosInput = document.querySelectorAll(".default-input")[0]
let fetchInput = document.querySelectorAll(".default-input")[1]
let asyncInput = document.querySelectorAll(".default-input")[2]
let main = document.querySelector(".main-block")
let resultBlock = document.querySelector(".result-block")

//using Axios
axiosInput.addEventListener("keypress",(e)=>{
    if(e.key==="Enter"){
        let url = axiosInput.value;
        
        axios.get(url,{
            //加入自訂參數
            params:{
                ID :Math.floor(Math.random(100)*4)
            },
            
        }).then(function(response){
            if(url===""){
                alert("please enter an API")
            }else{
                axiosInput.value="";
                resultBlock.textContent = JSON.stringify(response.data)
                console.log(response.data)
            }
        }).catch(function(err){
            alert("Please enter an availible API")
            console.log(err)
        })
    }
})

//using Fetch
fetchInput.addEventListener("keypress",(e)=>{
    let url = fetchInput.value;
    if(e.key === "Enter"){
        fetch(url)
        .then(
            (response)=>{
                if(url===""){
                    alert("please enter an API")
                    return
                }else{
                    fetchInput.value="";
                    return response.json()
                }
            }
        )
        .then((response)=>{
            console.log(response);
            resultBlock.textContent = JSON.stringify(response)
        })
        .catch((err)=>{
            console.log(err);
            alert("Please enter an availible API")
        })
    }
})


//using Async
asyncInput.addEventListener("keypress",(e)=>{
    let url = asyncInput.value;
    if(e.key === "Enter"){
        if(url===""){
            alert("please enter an API");
            return
        }else{
            getJSON(url);
            asyncInput.value="";
        }
    }
})

let getJSON = async(url) => {
    try{
        let response = await fetch(url);
        let json = await response.json();
        resultBlock.textContent = JSON.stringify(json)
        console.log(json)
        
    }catch(err){
        alert("Please enter an availible API");
        console.log(err)
    }
}
