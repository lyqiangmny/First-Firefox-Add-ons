function $_id(id) {
    return document.getElementById(id);
}

function notify() {
        var notify_div = document.createElement("div");
        notify_div.id = "notify";
        
        var d=new Date();	
				var message = "";
			  if(d.getDay()==0||d.getDay()==6){
			  	message = "     Today is the weekend , hava fun , but do not waste too much time ... ";
			  }else{
			  	message = "     Today is a work day , close this page and go to learn something ...";
			  }
        
        notify_div.innerHTML = message;
        notify_div.style.display = "block";
        notify_div.style["background-color"] = "#2FB3FF";
        notify_div.style.width = "100%";
        notify_div.style.height = "50px";
        notify_div.style["font-family"] = "'Source Sans Pro', 'Microsoft Yahei',sans-serif,Arial";
        notify_div.style["font-size"] = "30px";
        notify_div.style.color = "black";
        notify_div.style.position = "fixed"
        notify_div.style.bottom = "0";
        notify_div.style["z-index"] = "999999999";
        notify_div.style.lineHeight = "50px";
        document.body.appendChild(notify_div);
}


    notify();

