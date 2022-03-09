
$(document).ready(function(){
    var loop;


    var side = 0;
    function load_loop(){
        loop = setTimeout(() => {
            var obj = document.createElement("div");
            obj.className="cube";
            side=(side+1)%2
            obj.style.left = (side>0.5?"0%":"100%");
            if(obj.style.left!="0%"){
                obj.className="cube offset100";
            }
            document.body.appendChild(obj)
            setTimeout(function(){document.body.removeChild(document.getElementsByClassName("cube")[0])},4999)
            
        load_loop();}, Math.round(100));
    }
    load_loop();

})