window.onload=function(){


/*按需加载  START*/
var axjz=$(".axjz");
//console.log(axjz.length);
var axjzArr=[];
var clientH=document.documentElement.clientHeight;
for (var i = 0; i < axjz.length; i++) {
	axjzArr.push(axjz[i].offsetTop);
};
//console.log(axjzArr);
window.onscroll=function(){
	var doc=document.body.scrollTop?document.body:document.documentElement;
	//document.title=doc.scrollTop
	for (var i = 0; i < axjzArr.length; i++) {
		if(doc.scrollTop+clientH>=axjzArr[i]){
			setImg(i);
		}
	};
	function setImg(i){
		var imgs=$("img",axjz[i]);
		for (var j = 0; j < imgs.length; j++) {
			imgs[j].src=imgs[j].getAttribute("asrc");
		};
	}
}
onscroll();


















/*按需加载  END*/
	var imgs=getClass("imgBox")[0].getElementsByTagName("a");
	var btns=getClass("btnBox")[0].getElementsByTagName("li");
	var index=0;
	var t=setInterval(move,2000)//必须使时间函数成为一个全局变量，这样有利于使整个轮播只开启一个时间函数，否则会造成混乱
	function move(){
		index++;
		if(index>imgs.length-1){
			index=0;
		}
		if(index<0){//为左按钮而加
			index=imgs.length-1;
		}
		for (var i = 0; i < imgs.length; i++) {
			imgs[i].style.zIndex="0";
			btns[i].style.background="#757575";	
		};
		imgs[index].style.zIndex="1";
		btns[index].style.background="#fff";
		imgs[index].style.opacity="0.3";
		animate(imgs[index],{opacity:1});

	}

	for (var i = 0; i < btns.length; i++) {
		btns[i].index=i;

		btns[i].onclick=function(){
			for (var j = 0; j < btns.length; j++) {
				imgs[j].style.zIndex="0";
				btns[j].style.background="#757575";

			};
			imgs[this.index].style.zIndex="1";
		    this.style.background="#fff";
		    index=this.index;//使下一次从单击的下一个开始	
		}
	};
	var wheel=getClass("wheel")[0];
	wheel.onmouseover=function(){
		clearInterval(t);
	}
	wheel.onmouseout=function(){
		t=setInterval(move,2000)
	}
	var btnLeft=getClass("btnLeft")[0];
	var btnRight=getClass("btnRight")[0];
	btnRight.onclick=function(){
		move();
		
	}
	btnRight.onmouseover=function(){this.style.opacity="0.6";}
	btnRight.onmouseout=function(){this.style.opacity="0";}
	btnLeft.onclick=function(){
		index-=2;//处理左按钮更简单
		move();
		this.style.background="rgb(0,0,0)";
	}
	btnLeft.onmouseover=function(){this.style.opacity="0.6";}
	btnLeft.onmouseout=function(){this.style.opacity="0";}





//小米明星单品   START

function  xmmxDPmove(xmmxDPbox){
    var xmmxDPimgBox=$(".xmmxDPimgBox",xmmxDPbox)[0];
	//console.log(imgBox);
	var xmmxDPimgs=$("li",xmmxDPimgBox);
	//console.log(imgs);
	//console.log(imgs.length);
    //console.log(getStyle(imgs[0],"width"))
    var xmmxDPimgsW=getStyle(xmmxDPimgs[0],"width");
    //console.log(imgsW);
	xmmxDPimgBox.style.width=xmmxDPimgsW*xmmxDPimgs.length+"px";
	//console.log(imgBox.style.width)
	var xmmxDPbtnLeft=$(".xmmxDPbtnLeft",xmmxDPbox)[0];
	var xmmxDPbtnRight=$(".xmmxDPbtnRight",xmmxDPbox)[0];
	//console.log(btnLeft);
    var xmmxDPindex=0;
	var xmmxDPt=setInterval(xmmxDPmove,1000);
	var xmmxDPflag;
	function xmmxDPmove(){
		xmmxDPindex++;
		if(xmmxDPindex>=xmmxDPimgs.length){
			xmmxDPindex=0;
		}
		if(xmmxDPindex<=-1){
			xmmxDPindex=xmmxDPimgs.length-1;
		}
		//console.log(xmmxDPindex);
		animate(xmmxDPimgBox,{marginLeft:-xmmxDPindex*xmmxDPimgsW});
		if(xmmxDPindex==1){
			xmmxDPflag=false;
			xmmxDPbtnLeft.style.color="#666";
			xmmxDPbtnRight.style.color="#ccc";
		}else if(xmmxDPindex==0){
			xmmxDPflag=true;
			xmmxDPbtnLeft.style.color="#ccc";
			xmmxDPbtnRight.style.color="#666";
		}
	}
	var xmmxDPbtnBox=$(".xmmxDPbtnBox",xmmxDPbox)[0];
	//console.log(btnBox);
	xmmxDPbtnBox.onmouseover=function(){
		clearInterval(xmmxDPt);
	}	
	xmmxDPbtnBox.onmouseout=function(){
		xmmxDPt=setInterval(xmmxDPmove,1000);
	}

	
	xmmxDPbtnRight.onclick=function(){
		clearInterval(xmmxDPt);
		if(xmmxDPflag){
			xmmxDPindex++;
	        //console.log(index)
	        if (xmmxDPindex>=1) {
	        	xmmxDPindex=1;
	        	xmmxDPflag=false;
	        //console.log(xmmxDPindex)
	        //console.log(-index*imgsW+"px")
	        animate(xmmxDPimgBox,{marginLeft:-xmmxDPindex*xmmxDPimgsW});
	        this.style.color='#ccc';
	        xmmxDPbtnLeft.style.color="#666";
	        };	
		}
        
	}
	xmmxDPbtnLeft.onclick=function(){
		clearInterval(xmmxDPt);
		if(!xmmxDPflag){
			xmmxDPindex--;
	        //console.log(index)
	        //console.log(-index*imgsW+"px")
	        if(xmmxDPindex<=0){
	        	xmmxDPindex=0;
	        	xmmxDPflag=true;
	        	//console.log(xmmxDPindex)
	        	animate(xmmxDPimgBox,{marginLeft:-xmmxDPindex*xmmxDPimgsW});
	        	this.style.color='#ccc';
	        	xmmxDPbtnRight.style.color="#666";
	        } 	
		}
        
	}
}


//var xmmxDPbox=$(".xmmxDPbox")[0]
// xmmxDPmove(xmmxDPbox);
var xmmxDPbox=$(".xmmxDPbox");
for (var xmmxDPi = 0; xmmxDPi < xmmxDPbox.length; xmmxDPi++) {
	xmmxDPmove(xmmxDPbox[xmmxDPi]);
};
//小米明星单品   END










    var dpBtnBox=getClass("dpBtnBox")[0];//先获取大div的目的---1、缩小查找范围2、防止标签重复
	//console.log( dpBtnBox)
	var dpBtns=dpBtnBox.getElementsByTagName("li");
	//console.log( dpBtns)
	var dpBtnAs=dpBtnBox.getElementsByTagName("a");
	//console.log(dpBtnAs);
	var dpImgs=getClass("dpImgBox");
	//console.log( dpImgs)
	for (var i = 0; i < dpBtns.length; i++) {
		dpBtns[i].aa=i;//通过index这个属性，把 for循环的i 和 事件源的i 统一起来
		//console.log( dpBtns.aa)
		dpBtns[i].onmouseover=function(){
			//console.log(imgs[this.aa].style.zIndex)
			//console.log(this.aa)
			for (var j = 0; j <dpImgs.length; j++) {
				dpImgs[j].style.zIndex="0";//imgs[j].style["z-index"]="0";访问属性也可以这样
			    dpBtnAs[j].style.color="#424242";
			    dpBtnAs[j].style.borderBottom="2px solid #f5f5f5";
			};//因为预解析是先对变量名和函数名解析，所以会出现i==3的情况
			//console.log(this.aa)
			dpImgs[this.aa].style.zIndex="1";//this是指当前的事件源
			dpBtnAs[this.aa].style.color="#ff6700";
			dpBtnAs[this.aa].style.borderBottom="2px solid #ff6700";
		}
	};






    var pjBtnBox=getClass("pjBtnBox")[0];//先获取大div的目的---1、缩小查找范围2、防止标签重复
	//console.log( pjBtnBox)
	var pjBtns=pjBtnBox.getElementsByTagName("li");
	//console.log( pjBtns)
	var pjBtnAs=pjBtnBox.getElementsByTagName("a");
	//console.log(pjBtnAs);
	var pjImgs=getClass("pjImgBox");
	//console.log( pjImgs)
	for (var i = 0; i < pjBtns.length; i++) {
		pjBtns[i].aa=i;//通过index这个属性，把 for循环的i 和 事件源的i 统一起来
		//console.log( pjBtns.aa)
		pjBtns[i].onmouseover=function(){
			//console.log(imgs[this.aa].style.zIndex)
			//console.log(this.aa)
			for (var j = 0; j <pjImgs.length; j++) {
				
				pjImgs[j].style.zIndex="0";//imgs[j].style["z-index"]="0";访问属性也可以这样
			    pjBtnAs[j].style.color="#424242";
			    pjBtnAs[j].style.borderBottom="2px solid #f5f5f5";
			};//因为预解析是先对变量名和函数名解析，所以会出现i==3的情况
			//console.log(this.aa)
			pjImgs[this.aa].style.zIndex="1";//this是指当前的事件源
			pjBtnAs[this.aa].style.color="#ff6700";
			pjBtnAs[this.aa].style.borderBottom="2px solid #ff6700";
		}
	};



	var zbBtnBox=getClass("zbBtnBox")[0];//先获取大div的目的---1、缩小查找范围2、防止标签重复
	//console.log( zbBtnBox)
	var zbBtns=zbBtnBox.getElementsByTagName("li");
	//console.log( zbBtns)
	var zbBtnAs=zbBtnBox.getElementsByTagName("a");
	//console.log(zbBtnAs);
	var zbImgs=getClass("zbImgBox");
	//console.log( zbImgs)
	for (var i = 0; i < zbBtns.length; i++) {
		zbBtns[i].aa=i;//通过index这个属性，把 for循环的i 和 事件源的i 统一起来
		//console.log( zbBtns.aa)
		zbBtns[i].onmouseover=function(){
			//console.log(imgs[this.aa].style.zIndex)
			//console.log(this.aa)
			for (var j = 0; j <zbImgs.length; j++) {
				zbImgs[j].style.zIndex="0";//imgs[j].style["z-index"]="0";访问属性也可以这样
			    zbBtnAs[j].style.color="#424242";
			    zbBtnAs[j].style.borderBottom="2px solid #f5f5f5";
			};//因为预解析是先对变量名和函数名解析，所以会出现i==3的情况
			//console.log(this.aa)
			zbImgs[this.aa].style.zIndex="1";//this是指当前的事件源
			zbBtnAs[this.aa].style.color="#ff6700";
			zbBtnAs[this.aa].style.borderBottom="2px solid #ff6700";
		}
	};

/* nrImgBox1Img    START*/
   

 function  NRwheelMove(NRwheel){
    var NRimgBox=("NRimgBox",NRwheel)[0];
	//console.log(imgBox)
	var NRimg=getClass("NRimg",NRwheel)[0];
	//console.log(img)
	//var NRas=NRimg.getElementsByTagName("div");
	var NRas=getClass("NRimgItem",NRimg);
	//console.log(as);
	var NRaw=getStyle(NRas[0],"width")
	//console.log(aw)
	NRimg.style.width=NRaw*NRas.length+"px";
	//console.log(NRas.length)
	//console.log(img.style.width)
	var NRbtnBox=getClass("NRbtnBox",NRwheel)[0];
	//console.log(btnBox);
	var NRbtns=NRbtnBox.getElementsByTagName("li");
	//console.log(btns.length)
	//console.log(btns)
	var NRindex=0;
	                                //var t=setInterval(move,1000);
	var  NRflag=true;
	function NRmove(){
		if(!NRflag){
           return;
		}
		NRflag=false;
		NRindex++;
		if(NRindex>=NRas.length){
			NRindex=NRas.length-1;
		}
		if(NRindex<=-1){
			NRindex=0;
		}
		//console.log(NRindex);
		animate(NRimg,{marginLeft:-NRindex*NRaw},function(){NRflag=true});
		for (var i = 0; i < NRbtns.length; i++) {
			NRbtns[i].className="";
		};
		NRbtns[NRindex].className="NRhot";
	}
	//console.log(wheel)
	for (var i = 0; i < NRbtns.length; i++) {
		NRbtns[i].NRindex=i;
		NRbtns[i].onclick=function(){
			for (var j = 0; j < NRbtns.length; j++) {
				NRbtns[j].className="";
			};
			NRbtns[this.NRindex].className="NRhot";
			NRindex=this.NRindex;
			animate(NRimg,{marginLeft:-NRindex*NRaw});
		}
	};
	var NRbtnLR=getClass("NRbtnLR",NRwheel)[0]
	var NRbtnLeft=getClass("NRbtnLeft",NRbtnLR)[0];
	//console.log(btnLeft)
	var NRbtnRight=getClass("NRbtnRight",NRbtnLR)[0];
	//console.log(btnRight)
	NRbtnRight.onclick=function(){
	    //console.log(NRindex);
		NRmove();
	}
	NRbtnLeft.onclick=function(){
        //console.log(NRindex);
		if(NRflag){
			NRindex-=2;
			NRmove();	
		}else{
			return;
		};
	};
	NRwheel.onmouseover=function(){
		NRbtnLR.style.opacity='1';
	}
	NRwheel.onmouseout=function(){
		NRbtnLR.style.opacity='0';
	}
};



 var NRwheel=$(".NRwheel");
    //console.log(NRwheel)
for (var NRwheelI = 0; NRwheelI < NRwheel.length; NRwheelI++) {
	NRwheelMove(NRwheel[NRwheelI]);
};
NRwheelMove(NRwheel);
/* nrImgBox1Img    END*/

 
/*按需加载  START*/
var axjz=$(".axjz");
console.log(axjz);
/*按需加载  END*/











}