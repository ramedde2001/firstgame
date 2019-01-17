class enemyman
{

constructor(n)
{
this.enimis=[]
for(var i=0;i<n;i++)
{
this.h=new enmy(Math.random()*500,Math.random()*500)
this.enimis.push(this.h)
}


}
alldie()
{
	
	var isdi=false;
	for(var i=0;i<this.enimis.length;i++)
{

if(this.enimis[i].l==true)
isdi=true

}

return isdi;

}
rolead()
{
	location.reload(true)
}

drow(edx)
{
	if(!this.alldie())
	{
		di="لقد نجحت في اصقاط كل المدنبات ";
		setTimeout(this.rolead,1000);
	}
	for(var i=0;i<this.enimis.length;i++)
{

this.enimis[i].drow(edx);

}
}
move()
{
		for(var i=0;i<this.enimis.length;i++)
{

this.enimis[i].move();

}
}
sheck(p)
{
	var di=false;
			for(var i=0;i<this.enimis.length;i++)
{

if(this.enimis[i].sheck(p))
	di=true

}
return di;
}
	
check(p)
{
		for(var i=0;i<this.enimis.length;i++)
{

this.enimis[i].check(p);

}	
}
}





