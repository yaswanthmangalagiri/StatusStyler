
function addstr(event)
{
	 var enter=document.getElementById("entertext").value;
	 var prev=document.getElementById("previewtext");
	 var a=document.getElementById("fontbutton");
	  var b=document.getElementById("colorbutton");
	  var finalfont=a.value;
	  var finalcolor=b.style.backgroundColor;
	   prev.value=enter;
    prev.style.color=finalcolor;   
    prev.style.fontFamily=finalfont;
}
var appenditcount=0;
function changetext(todo)
	{	
		
	 	var a=document.getElementById("fontbutton");
	 	a.value=todo;
	  	var b=document.getElementById("colorbutton");
	  	var pre=document.getElementById("previewtext");
	  	var finalfont=a.value;
	  	var finalcolor=b.style.backgroundColor;
   	 	pre.style.fontColor=finalcolor;		
		var enter=document.getElementById("entertext").value;
    	pre.value=enter;
    	var prevalue=pre.value+'';
    	appenditcount++;
    	var wrap=document.getElementById('wrapper');
    	var inwrap=document.createElement("span");
    	inwrap.setAttribute("id","appendit"+appenditcount); 
    	wrap.appendChild(inwrap);
    	var getappend=document.getElementById("appendit"+appenditcount);    	
    	getappend.style.color=finalcolor;
    	getappend.style.fontFamily=finalfont;
    	document.getElementById('appendit'+appenditcount).innerHTML=' '+prevalue;
    	document.getElementById("entertext").value='';
    	document.getElementById("previewtext").value='';
    	
	}

	function changecolor(todo)
	{		
	 	var a=document.getElementById("fontbutton");
	  	var b=document.getElementById("colorbutton");
	  	b.style.backgroundColor=todo;
	  	var pre=document.getElementById("previewtext");
	  	var finalfont=a.value;
	  	var finalcolor=b.style.backgroundColor;
   	 	pre.style.fontFamily=finalfont;
   	 	pre.style.fontcolor=finalcolor;		
		var enter=document.getElementById("entertext").value;
    	pre.value=enter;
    	var prevalue=pre.value+'';
    	appenditcount++;
    	var wrap=document.getElementById('wrapper');
    	var inwrap=document.createElement("span");
    	inwrap.setAttribute("id","appendit"+appenditcount); 
    	wrap.appendChild(inwrap);
    	var getappend=document.getElementById("appendit"+appenditcount);
    	getappend.style.color=finalcolor;
    	getappend.style.fontFamily=finalfont;
    	document.getElementById('appendit'+appenditcount).innerHTML=' '+prevalue;
		document.getElementById("entertext").value='';
		document.getElementById("previewtext").value='';
	}
	function send_req()
	{
		alert(document.getElementById('wrapper').innerHTML);
		alert(mess);
	}