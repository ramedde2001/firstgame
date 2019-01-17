class bullet extends entyty
{
constructor(p)
{
super()
this.x=p.x
this.z=p.z;
this.spx=10;
this.spz=0;


}
colide(b)
{


return super.colide(b);
}
move()
{
this.x=this.x+this.spx;
this.z=this.z+this.spz;
}

drow(edx)
{
edx.drawImage(bulletimg,this.x-10, this.z-10,15,15);
this.move()
}

}