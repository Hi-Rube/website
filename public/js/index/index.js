window.onload=function()
{   
	document.getElementById("number"+1).style.backgroundColor="rgb(205, 205, 205)";
	document.getElementById("number"+1).style.borderColor="rgb(205, 205, 205)";
	document.getElementById("number"+1).style.color="#000";
	t=setInterval("slide()",3000);
	slideClick();
}

function slide(slide_to,slide_rate,slide_pass)
{
	var slide_now=parseInt(getRealStyle(document.getElementById("slide_page"),"top"));
	if (slide_now%500!=0)
	{
		slide_now-=(slide_now%500);
	}
	if (slide_to==null)
	{
	   slide_to=slide_now+500;
	}
	switch (slide_to)
	{
		case -1500:ii=1; break;
		case -1000:ii=2; break;
		case -500:ii=3; break;
		case -0:ii=4; break;
	}
	if (slide_rate==null)
	{
	   slide_rate=10;
	}
	if (slide_pass==null)
	{
	   slide_pass=true;
	}
	timeOver=function()
	    {
		document.getElementById("slide_page").style.top=slide_now;
		if (slide_now<slide_to)
		slide_now+=20;
		else slide_now-=20;
		if (slide_now==slide_to)
		{
		 for (i=1; i<=4; i++)
		  if (i==ii)
		  {
		  document.getElementById("number"+i).style.backgroundColor="rgb(205, 205, 205)";
		  document.getElementById("number"+i).style.borderColor="rgb(205, 205, 205)";
		  document.getElementById("number"+i).style.color="#000";
		  }
		  else 
		  {
		  document.getElementById("number"+i).style.backgroundColor="#3D3D3D";
		  document.getElementById("number"+i).style.borderColor="#3D3D3D";
		  document.getElementById("number"+i).style.color="rgb(255, 255, 255)";
		  }
		  document.getElementById("slide_page").style.top=slide_now;
		  clearInterval(tt);
	    }
		}	
	 if (slide_now!=0 || slide_pass==false)
	   tt=setInterval("timeOver()",slide_rate); else
	   {
		  clearInterval(t);
		  slide(-1500,2,false);
		 setTimeout('t=setInterval("slide()",3000)',1000);
	   }
}

function slideClick(number)
{
	if (number==null)
	{
	document.getElementById("number"+1).onclick=function(){slideClick(1); };
	document.getElementById("number"+2).onclick=function(){slideClick(2); };
	document.getElementById("number"+3).onclick=function(){slideClick(3); };
	document.getElementById("number"+4).onclick=function(){slideClick(4); };
	} else
	{
		clearInterval(t);
		switch (number)
		{
			case 1:slide(-1500,2,false); break;
			case 2:slide(-1000,2,false); break;
			case 3:slide(-500,2,false); break;
			case 4:slide(0,2,false); break;
		}
		t=setInterval("slide()",3000);
	}
}

function mouseout(number)
	{
		if (document.getElementById("number"+number).style.backgroundColor!="rgb(205, 205, 205)")
		{
		  document.getElementById("number"+number).style.backgroundColor="#3D3D3D";
		  document.getElementById("number"+number).style.borderColor="#3D3D3D";
		  document.getElementById("number"+number).style.color="rgb(255, 255, 255)";
		}
	}
function mouseover(number)
	{
		for (i=1; i<=4; i++)
		  if (i==number && document.getElementById("number"+i).style.backgroundColor!="rgb(205, 205, 205)")
		  {
		  document.getElementById("number"+i).style.backgroundColor="#CCC";
		  document.getElementById("number"+i).style.borderColor="#CCC";
		  document.getElementById("number"+i).style.color="#000";
		  }
		  else if (document.getElementById("number"+i).style.backgroundColor!="rgb(205, 205, 205)")
		  {
		  document.getElementById("number"+i).style.backgroundColor="#3D3D3D";
		  document.getElementById("number"+i).style.borderColor="#3D3D3D";
		  document.getElementById("number"+i).style.color=" rgb(255, 255, 255)";
		  }	
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