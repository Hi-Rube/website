var selectArray=new Array()
var selectedArray=new Array();
var str="";
getAllMsg=function()
{
    str='{"msg":[';
	for (x in selectedArray)
	  {
		   im=document.getElementById("img"+selectedArray[x]).src;
           pr=document.getElementById("price"+selectedArray[x]).innerHTML;
           co=document.getElementById("msg"+selectedArray[x]).innerHTML;
		   nu=document.getElementById("op_number"+selectedArray[x]).value;
		 if (x!=selectedArray.length-1)
		  str=str+'{"id":'+'"'+selectedArray[x]+'",'+'"pr":'+'"'+pr+'",'+'"im":'+'"'+im+'",'+'"co":'+'"'+co+'",'+'"nu":'+'"'+nu+'"},';  else 
		  str=str+'{"id":'+'"'+selectedArray[x]+'",'+'"pr":'+'"'+pr+'",'+'"im":'+'"'+im+'",'+'"co":'+'"'+co+'",'+'"nu":'+'"'+nu+'"}]}';
	   }	
}

remove_selectedArray=function(dx)
　{
　　for(var i=0,n=0;i<selectedArray.length;i++)
　　{
　　　　if(selectedArray[i]!=dx)
　　　　{
　　　　　　selectedArray[n++]=selectedArray[i]
　　　　}
　　}
　　selectedArray.length-=1
　}

addfen=function(number)
{
	var n=document.getElementById("op_number"+number).value;
	n++;
	document.getElementById("op_number"+number).value=n;
}
 
setsum=function(number)
{
	var price=parseFloat(document.getElementById("price"+number).innerHTML);
	var num=parseFloat(document.getElementById("op_number"+number).value);
	document.getElementById("op_summary"+number).value=price*num;
}

setsummary=function()
{
	var summary_sum=0.0;
    for(x in selectedArray)
	 {
		summary_sum+=parseFloat(document.getElementById("op_summary"+selectedArray[x]).value);
	 }
	 document.getElementById("sum_number").innerHTML=summary_sum.toFixed(3);
}

delitem=function(number)
{
	 del=function(){document.getElementById("select_content").removeChild(document.getElementById("selected_id"+number));};
	 slide(number);
	 setTimeout("del()",100);
	 selectArray[number]=0;
	 remove_selectedArray(number);
	 setsummary();
}

slide=function(number)
{
if (document.getElementById("selected_id"+number).style.left=="") 
document.getElementById("selected_id"+number).style.left=getRealStyle(document.getElementById("selected_id"+number),"left");
document.getElementById("selected_id"+number).style.left=parseInt(document.getElementById("selected_id"+number).style.left)+50;
t=setTimeout("slide("+number+")",10);
}

function select(number)
{
	if (selectArray[number]==10)
	{
	  addfen(number); 
	  setsum(number);
	  document.getElementById("selected_id"+number).style.backgroundColor="#d64141";
	  setsummary();
	  setTimeout("document.getElementById('selected_id"+number+"').style.backgroundColor='#008F6B'",300);
	  return;
	}
   selectArray[number]=10;
   var img=document.getElementById("img"+number).src;
   var price=document.getElementById("price"+number).innerHTML;
   var content=document.getElementById("msg"+number).innerHTML;
   
   var sl=document.getElementById("select_content");
   {var div = document.createElement("div");
   div.className="selected_item";
   div.id="selected_id"+number;}
   
   {var new_img=document.createElement("img");
   new_img.src=img;
   new_img.className="selected_item_img";}
   
   {var new_div=document.createElement("div");
   new_div.className="selected_item_msg";
   new_div_1=document.createElement("div");
   new_div_2=document.createElement("div");
   new_div_3=document.createElement("div");
   new_div_1.className="selected_item_msg_1";
   new_div_2.className="selected_item_msg_2";
   new_div_3.className="selected_item_options";
       {
		   var div_op=document.createElement("div");
		      div_op.className="op_op";
		   var div_op_1=document.createElement("input");
		   var div_op_2=document.createElement("div");
		   var div_op_3=document.createElement("input");
		     div_op_1.id="op_number"+number;
			 div_op_3.id="op_summary"+number;
			 div_op_3.style.display="none";
			 div_op_1.disabled=1;
			 div_op_1.className="op_number";
			 div_op_1.value=1;
			 div_op_2.className="op_cancle";
			 div_op_2.innerHTML="取消";
			 div_op_2.onclick=function(){delitem(number);};
			      {
				   div_op.appendChild(div_op_1);
				   div_a=document.createElement("a"); div_a.id="add"+number; div_a.innerHTML="+1份"; div_a.className="item_number_add"; 
				   div_a.onclick=function(){select(number);};
				   div_op.appendChild(div_a);				    
				   }
			 new_div_3.appendChild(div_op);
			 new_div_3.appendChild(div_op_2);
			 new_div_3.appendChild(div_op_3);
	    }
   new_div_1.innerHTML="名称:"+content;
   new_div_2.innerHTML="单价:"+price;
   new_div.appendChild(new_div_1);
   new_div.appendChild(new_div_2);
   new_div.appendChild(new_div_3);
	   }
   div.appendChild(new_img);
   div.appendChild(new_div);
   sl.appendChild(div);
   selectedArray[selectedArray.length]=number;
   setsum(number);
   setsummary();
}


function getRealStyle(el,cssName) 
{				
	var len=arguments.length, sty, f, fv;
					
	'currentStyle' in el ? sty=el.currentStyle : 'getComputedStyle' in window 
						 ? sty=window.getComputedStyle(el,null) : null;
						 				
	if(cssName==="opacity" && document.all){
		f = el.filters;
	    f && f.length>0 && f.alpha ? fv=f.alpha.opacity/100 : fv=1;           		
		return fv;
	}	
	cssName==="float" ? document.all ? cssName='styleFloat' : cssName='cssFloat' : cssName;	
	sty = (len==2) ? sty[cssName] : sty;								
	return sty;
}	

function summaryover()
{
	document.getElementById("summary").innerHTML=":-) 结算 -->";
}

function summaryout()
{
	document.getElementById("summary").innerHTML="结算";
}


function sendajax()
{
	getAllMsg();
  if (window.XMLHttpRequest)
{// code for IE7+, Firefox, Chrome, Opera, Safari
xmlhttp=new XMLHttpRequest();
}
else
{// code for IE6, IE5
xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
}
xmlhttp.onreadystatechange=function()
{
if (xmlhttp.readyState==4 && xmlhttp.status==200)
{
	var obj=eval("("+xmlhttp.responseText+")");
	if (obj.msg=="ok" &&  selectedArray.length!=0)
	   window.location="buy";
	   else if (selectedArray.length==0)
	   {
		   document.getElementById("summary").style.backgroundColor="#d64141";
		   setTimeout("document.getElementById('summary').style.backgroundColor='#008f6b'",200);
		}
}
}
xmlhttp.open("POST","product/setMsg",false);
xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xmlhttp.send('method='+str);
} 


