function print(){
    const fullname = document.getElementById("name").value;
    const height = document.getElementById("height").value;
    const country = document.getElementById("country").value;
    
    document.getElementById("result").innerText = "name:"+fullname + " height:"+ height + " country:" +country;
}