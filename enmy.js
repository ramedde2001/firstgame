

class enmy extends entyty
{
constructor(x,z)
{
super()
this.x=x;
this.z=z;
this.spx=3;
this.spz=2;
this.l=true
}

drow(edx)
{
	if(this.l==true)
		
edx.drawImage(enemyImg, this.x-10, this.z-10,20,20);
}
kill()
{
	this.l=false
	
}
isalive()
{
	return this.l
}
sheck(p)
{
if (this.l)
return super.colide(p)
else return false
}
move()
{this.x=this.x+this.spx;
this.z=this.z+this.spz;
if(this.x>500|| this.x<0)
this.spx=-this.spx;


if(this.z>500  ||this.z<0)
this.spz=-this.spz;

}
check(p)
{
	if(p.shecb(this))

{
this.l=false
console.log("kill")
}
}
}


