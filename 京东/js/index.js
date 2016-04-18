$(function(){
/*head  START*/
var downBox1=$(".downBox1")[0];
//console.log(downBox1);
var downBoxHidden1=$(".downBoxHidden",downBox1)[0];
//console.log(downBoxHidden);
var downBoxHiddenA=$("a",downBoxHidden1);
//console.log(downBoxHiddenA);
var downBoxTitle=$(".downBoxTitle",downBox1)[0];
var downBoxI=$("i",downBox1)[0];
var moren=$(".moren",downBoxHidden1)[0];
//console.log(moren);
//console.log(downBoxI);
//console.log(downBoxTitle.innerHTML);
var head=$(".head")[0];
var downBox=$(".downBox",head);
//console.log(downBox);
var downBoxHidden=$(".downBoxHidden",head);
//console.log(downBoxHidden);
var downBoxII=$("i",head);
//console.log(downBoxII);
for (var i = 1; i < downBox.length; i++) {
	xiLaKuang(downBox[i],downBoxHidden[i],downBoxII[i])
};
function xiLaKuang(downBox,downBoxHidden,downBoxII){
	hover(downBox,function(){
		downBox.style.cssText+="background:#fff;border-left:1px solid #ddd;border-right:1px solid #ddd;padding:0 1px;"
		downBoxHidden.style.display="block";
		downBoxII.innerHTML="&#xe63b;";
	},function(){
		downBox.style.cssText+="background:none;border:0;padding:0 2px;"
		downBoxHidden.style.display="none";
		downBoxII.innerHTML="&#xe63c;";
	}) 	
}


xiLaKuang1(downBox[0],downBoxHidden[0],downBoxII[0])
function xiLaKuang1(downBox,downBoxHidden,downBoxII){
	hover(downBox,function(){
		downBox.style.cssText+="background:#fff;border-left:1px solid #ddd;border-right:1px solid #ddd;padding:0 24px 0px 9px;"
		downBoxHidden.style.display="block";
		downBoxII.innerHTML="&#xe63b;";
	},function(){
		downBox.style.cssText+="background:none;border:0;padding:0 25px 0px 10px;"
		downBoxHidden.style.display="none";
		downBoxII.innerHTML="&#xe63c;";
	}) 	
}



var searchRightContent=$(".searchRightContent")[0];
//console.log(searchRightContent);
var searchHidden=$(".searchHidden")[0];
//console.log(searchHidden);
hover(searchRightContent,function(){
	searchRightContent.style.cssText+="background:#fff;border:1px solid #ddd;"
	searchHidden.style.display="block";
},function(){
	searchRightContent.style.cssText+="background:none;border:0;"
	searchHidden.style.display="none";
}) 





downBoxHidden1.onclick=function(e){
	var ev=e||window.event;
	var elm=ev.target||ev.scrElement;
	moren.style.background="#fff";
	moren.style.color="#666";
	for (var i = 0; i < downBoxHiddenA.length; i++) {
		downBoxHiddenA[i].style.background="#fff";
		downBoxHiddenA[i].style.color="#666";
	};
	
	this.style.display="none";
	if(elm.nodeName="A"){
		
		elm.style.background="#c81623";
		elm.style.color="#fff";
		//console.log(elm.innerHTML);
		//console.log(downBox.innerHTML)
		downBoxTitle.innerHTML="送至："+elm.innerHTML;

	}
}
/*head  END*/
/*topBanner  START*/
var close=$(".close")[0];
//console.log(close);
var topBanner=$(".topBanner")[0];
//console.log(topBanner);
close.onclick=function(){
	topBanner.style.display="none";
}
/*topBanner  END*/

/*search  START*/

function value(kuangValue){
	var oldValue=kuangValue.value;
	//console.log(oldValue);
	kuangValue.onfocus=function(){
		if(this.value==oldValue){
			this.value="";
		}	
	}
	kuangValue.onblur=function(){
		if (this.value=="") {
			this.value=oldValue;
		};
	}	
}
var kuangValue=$(".kuangValue")[0];
value(kuangValue);
/*search  END*/








/*banner  START*/

//banner左侧
    var banner1Item=$(".banner1Item");
    var bannerHidden=$(".bannerHidden");
    var bannerHidden1space=$(".bannerHidden1space");
    //console.log(bannerHidden1space);
    //console.log(bannerHidden);
	for (var i = 0; i < banner1Item.length; i++) {
		banner1Item[i].index=i;
		hover(banner1Item[i],function(){
			this.style.background="#f7f7f7";
			this.style.borderLeftColor="#fff";
			var banner1ItemAs=$(".A",this);
			for (var j = 0; j < banner1ItemAs.length; j++) {
				banner1ItemAs[j].style.color="#c81623";

			};
			bannerHidden[this.index].style.display="block";
			bannerHidden[this.index].style.top=-31*(this.index)+"px";
			bannerHidden1space[this.index].style.top=31*(this.index)+"px";
			var doc=document.body.scrollTop?document.body:document.documentElement;
			window.scrollTop=function(){
				console.log(window.scrollTop)
				document.title=doc.scrollTop;
				if(doc.scrollTop>=banner.offsetTop){
				//for (var i = 0; i < bannerHidden.length; i++) {
					//bannerHidden[14].style.top=doc.scrollTop-banner.offsetTop+31*14+"px";
					bannerHidden[14].style.top=-600+"px";
					console.log(bannerHidden[14].style.top);
				//};
				}

			}

			

		},function(){
			this.style.background="#c81623";
			this.style.borderLeftColor="#b61d1d";
			var banner1ItemAs=$(".A",this);
			for (var j = 0; j < banner1ItemAs.length; j++) {
				banner1ItemAs[j].style.color="#fff";
			};
			bannerHidden[this.index].style.display="none";
		});


	};



//banner   轮播
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
			btns[i].style.background="#3e3e3e";	
		};
		imgs[index].style.zIndex="1";
		imgs[index].style.opacity=0.3;
		btns[index].style.background="#B61B1F";
		animate(imgs[index],{opacity:1});
		//console.log(index)


	}

	for (var i = 0; i < btns.length; i++) {
		btns[i].index=i;

		btns[i].onclick=function(){
			for (var j = 0; j < btns.length; j++) {
				imgs[j].style.zIndex="0";
				btns[j].style.background="#3e3e3e";

			};
			imgs[this.index].style.zIndex="1";
		    this.style.background="#B61B1F";
		    imgs[this.index].style.opacity=0.3;
		    animate(imgs[this.index],{opacity:1});
		    index=this.index;//使下一次从单击的下一个开始	
		}
	};
	var wheel=getClass("wheel")[0];
	var btnLR=$(".btnLR")[0];
	//console.log(btnLR);

	wheel.onmouseover=function(){
		clearInterval(t);
		btnLR.style.display="block";
	}
	wheel.onmouseout=function(){
		t=setInterval(move,2000);
		btnLR.style.display="none";
	}
	var btnLeft=getClass("btnLeft")[0];
	var btnRight=getClass("btnRight")[0];
	btnRight.onclick=function(){
		move();
	}
	btnLeft.onclick=function(){
		move();
	}
	//banner右下的弹出
	var BANNERhiddenBox=$(".BANNERhiddenBox")[0];
	//console.log(BANNERhiddenBox);
	var BANNERclick=$(".BANNERclick");
	//console.log(BANNERclick);
	for (var i = 0; i < BANNERclick.length; i++) {
		BANNERclick[i].index=i;
		var BANNERhiddenBoxFlag=true;
		BANNERclick[i].onmouseover=function(){
			if (this.index==3&&!BANNERhiddenBoxFlag) {return};
            BANNERhiddenBoxFlag=false;
			animate(BANNERhiddenBox,{height:210});
			for (var j = 0; j < hiddenImgItem.length; j++) {
				hiddenImgItem[j].style.display="none";				
				hiddenBtnItem[j].className="btnItem";
				
			};
			hiddenImgItem[this.index].style.display="block";
			hiddenBtnItem[this.index].className+=" hot";
		}
	};
	
	var BANNERhiddenClose=$(".BANNERhiddenClose")[0];
	//console.log(BANNERhiddenClose);
	BANNERhiddenClose.onclick=function(){
		animate(BANNERhiddenBox,{height:0});
	}
/*banner   END*/
/* bannerBottom   START */
    var BBimgBox=$(".BBimgBox")[0];
	//console.log(imgBox)
	var BBimg=$(".BBimg",BBimgBox)[0];
	//console.log(img)
	var BBas=$("a",BBimg);
	//console.log(as);
	var BBaw=getStyle(BBas[0],"width")
	//console.log(aw)
	BBimg.style.width=BBaw*BBas.length+"px";
	//console.log(as.length)
	//console.log(img.style.width)
	var BBbtnBox=$(".BBbtnBox")[0];
	//console.log(btnBox);
	var BBbtns=$("li",BBbtnBox);
	//console.log(btns.length)
	//console.log(btns)
	var BBsetIntervalT=1000;
	var BBanimateT=500;

	var BBindex=0;
	//var BBt=setInterval(BBmove,BBsetIntervalT);
	var BBflag=true;
	function BBmove(){
		if(!BBflag){
			return;
		}
		BBflag=false;
		//img.appendChild(img1);
		//img.style.marginLeft=-aw+"px";
		animate(BBimg,{marginLeft:-BBaw},BBanimateT,function(){
			BBflag=true;
			BBindex++;
			if(BBindex==BBas.length){
				BBindex=0;
			}
			var BBimg1=getFirst(BBimg);
			BBimg.appendChild(BBimg1);
			BBimg.style.marginLeft=0+"px";
		});
	}
	var BBwheel=getClass("BBwheel")[0];
	//console.log(wheel)
	var BBbtnLR=$(".BBbtnLR")[0];
	//console.log(BBbtnLR);
	BBwheel.onmouseover=function(){
		BBbtnLR.style.display="block";
	}
	BBwheel.onmouseout=function(){
        BBbtnLR.style.display="none";
	}
	var BBbtnLeft=$(".BBbtnLeft")[0];
	var BBbtnRight=$(".BBbtnRight")[0];
	BBbtnRight.onclick=function(){
		BBmove();
	}
	BBbtnLeft.onclick=function(){
		if(!BBflag){
			return;
		}
		BBflag=false;
		    var BBimg3=getLast(BBimg);
		    //console.log(img3)
			var BBimg1=getFirst(BBimg);
			//img.insertBefore(img3,img1);
			insertbefore(BBimg3,BBimg1)
			//console.log(img)
			BBimg.style.marginLeft=-BBaw+"px"; 
		//img.appendChild(img1);
		//img.style.marginLeft=-aw+"px";
		animate(BBimg,{marginLeft:0},BBanimateT,function(){
			BBflag=true;
			BBindex--;
			if(BBindex<0){
				BBindex=BBas.length-1;
			}
			
		});
	};


/* bannerBottom   END */
/*cnxh(猜你喜欢)  START*/
var cnxhHD=$(".cnxhHD")[0];
//console.log(cnxhHD);
var change=$(".change",cnxhHD)[0];
//console.log(change);
var cnxhBDItems=$(".cnxhBDItem");
//console.log(cnxhBDItems.length);
var cnxhIndex=1;
change.onclick=function(){	
	
	if(cnxhIndex==cnxhBDItems.length){
		cnxhIndex=0;
	}
	for (var i = 0; i < cnxhBDItems.length; i++) {
		cnxhBDItems[i].style.zIndex=1;
	};
	cnxhBDItems[cnxhIndex].style.zIndex=2;
	//console.log(cnxhIndex);
	cnxhIndex++;
}

/*cnxh(猜你喜欢)  END*/

/*pzsh(品质生活)   START*/
var imgAnimate=$(".imgAnimate")[0];
//console.log(imgAnimate);
imgAnimate.onmouseover=function(){
	animate(imgAnimate,{marginLeft:-10});
}
imgAnimate.onmouseout=function(){
	animate(imgAnimate,{marginLeft:0});
}
/*pzsh(品质生活)   END*/

/*pzshBottom(品质生活)  START*/
/*pzshBottom(品质生活)  END*/

/* fzxb(服装鞋包)   START */

//头上的选项卡效果

function  select(FZCB){
	var FZCBbtn=$(".btn",FZCB)[0];
	//console.log(FZCBbtn);
	var FZCBbtnItems=$(".btnItem",FZCBbtn);
	//console.log(FZCBbtnItem);
	//var FZCBbtnItemsSpan=$("span",FZCBbtnItems[0])[0];
	//console.log(FZCBbtnItemsSpan);
	var FZCBBDitems=$(".imgItem",FZCB);
	//var FZCBBDitems=$("div",FZCB);
	//console.log(FZCBBDitem);
	for (var i = 0; i <FZCBbtnItems.length; i++) {
		FZCBbtnItems[i].index=i;
		FZCBbtnItems[i].onmouseover=function(){
			//FZCBbtnItems[this.index].style.color="#c81623";
			
			for (var j = 0; j < FZCBbtnItems.length; j++) {
				FZCBBDitems[j].style.zIndex="1";
				FZCBbtnItems[j].style.borderColor="#fff";
				FZCBbtnItems[j].style.borderTopWidth="2px";
				//FZCBbtnItems[j].style.borderBottom="1px solid #c81623";
			};
			FZCBBDitems[this.index].style.zIndex="2";
			this.style.borderColor="#c81623";
			this.style.borderTopWidth="3px";
			//this.style.borderBottom="1px solid #fff"; 

			
			var FZCBbtnItemsSpan=$("span",FZCBbtn);//注意这里只用onmouseover即可
			for (var i = 0; i < FZCBbtnItemsSpan.length; i++) {
				//FZCBbtnItemsSpan[i].style.color="#ccc";
				FZCBbtnItemsSpan[i].style.display="block";
			};
			var FZCBbtnItemsSpan0=$("span",FZCBbtnItems[this.index-1])[0];
            //console.log($("span",undefined))[0];
			var FZCBbtnItemsSpan1=$("span",this)[0];		
			//FZCBbtnItemsSpan1.style.color="#c81623";
			  if(this.index>0){
			  	FZCBbtnItemsSpan0.style.display="none";
			  };
			  FZCBbtnItemsSpan1.style.display="none";
	       // console.log(FZCBbtnItemsSpan);
		}
	};	
}


//第一个【服装鞋包】调用select()函数实现----------选项卡效果
/*var FZCB=$(".fzxb")[0];
//console.log(FZCB);
seclect(FZCB);*/


/*var FZCB1=$(".fzxb")[1];
console.log(FZCB1);
seclect(FZCB1);
*/
var FZCB=$(".fzxb");
for (var i = 0; i < FZCB.length; i++) {
	select(FZCB[i]);
};



/* fzxb(服装鞋包)   END */



/*ttsj(天天特价)   START*/

                //ttsj(天天特价)  左侧
var TTDJimgs=$(".TTDJimg");
for (var i = 0; i < TTDJimgs.length; i++) {
	TTDJimgs[i].onmouseover=function(){
		animate(this,{marginLeft:-10});
	}
	TTDJimgs[i].onmouseout=function(){//注意：这里要加上onmouseout
		animate(this,{marginLeft:0});
	}
};


                 //ttsj(天天特价)  右侧
var ttdjRightBDInnerOUT=$(".ttdjRightBDInnerOUT")[0];
//console.log(ttdjRightBDInnerOUT);
var ttdjRightBDInner=$(".ttdjRightBDInner");
//console.log(ttdjRightBDInner);
//console.log(ttdjRightBDInner.length)
var ttdjRightBDInnerHeight=getStyle(ttdjRightBDInner[0],"height");
//console.log(ttdjRightBDInnerHeight);
ttdjRightBDInnerOUT.style.height=(ttdjRightBDInnerHeight+10)*ttdjRightBDInner.length+"px";
//console.log(ttdjRightBDInnerOUT.style.height);
function TTDJmove(){
	var img6=getLast(ttdjRightBDInnerOUT);
	var img1=getFirst(ttdjRightBDInnerOUT);
	//console.log(img4);
	//console.log(img1);
	insertbefore(img6,img1);
	ttdjRightBDInnerOUT.style.marginTop=-ttdjRightBDInnerHeight-10+"px";
	animate(ttdjRightBDInnerOUT,{marginTop:0})
}
var TTDJt=setInterval(TTDJmove,1000);
//TTDJmove();
var ttdjRightBDContent=$(".ttdjRightBDContent")[0];
//console.log(ttdjRightBDContent);
ttdjRightBDContent.onmouseover=function(){
	clearInterval(TTDJt);
}
ttdjRightBDContent.onmouseout=function(){
    TTDJt=setInterval(TTDJmove,1000);
}

/*ttsj(天天特价)   END*/
	var JDwheel=$(".JDwheel");
	//console.log(JDwheel)
	//console.log(JDwheel.length);
	for (var i = 0; i < JDwheel.length; i++) {
		floorWheel(JDwheel[i]);
	};
	//floorWheel(JDwheel);
	function floorWheel(JDwheel){
		var imgBox=$(".JDimgBox",JDwheel)[0];
		//console.log(imgBox)
		var img=$(".JDimg",imgBox)[0];
		//console.log(img)
		var as=$("a",img);
		//console.log(as);
		var aw=getStyle(as[0],"width")
		//console.log(aw)
		//img.style.width=aw*2+"px";


		//console.log(as.length)
		//console.log(img.style.width)
		var btnBox=$(".JDbtnBox",JDwheel)[0];
		//console.log(btnBox);
		var btns=$("li",btnBox);
		//console.log(btns.length)
		//console.log(btns)
		var now=0;
		var next=0;
		//console.log(as[now])
		for (var i = 0; i < as.length; i++) {
			if(i==0){
				as[i].style.left=0;
			}else{
				as[i].style.left=aw+"px";
			}
			
		};
		var t=setInterval(move,1000);
		var flag=true;
		function move(){
			if(flag==false){
				return;
			}
			flag=false;
			next++;
			if(next==as.length){
				next=0;
			}
			//console.log(now);
			as[next].style.left=aw+"px";
			animate(as[now],{left:-aw},function(){
				flag=true;
			});
			//console.log(next);
			animate(as[next],{left:0},function(){
				flag=true;
			});

			btns[now].className="";
			btns[next].className="JDhot";
			now=next;
		}
		
		JDwheel.onmouseover=function(){
			animate(btnLeft,{opacity:0.9});
		    animate(btnRight,{opacity:0.9});
			clearInterval(t);
		}
		JDwheel.onmouseout=function(){
			animate(btnLeft,{opacity:0});
			animate(btnRight,{opacity:0});
			t=setInterval(move,1000)

		}


		var btnLeft=$(".JDbtnLeft",JDwheel)[0];
		//console.log(btnLeft);
		var btnRight=$(".JDbtnRight",JDwheel)[0];
		//console.log(btnRight);
		btnRight.onclick=function(){
			move();
		}
		btnLeft.onclick=function(){
			if(flag==false){
				return;
			}
			flag=false;
			next--;
			if(next==-1){
				next=2;
			}
			//console.log(now);
			as[next].style.left=-aw+"px";
			animate(as[now],{left:aw},function(){
				flag=true;
			});
			//console.log(next);
			animate(as[next],{left:0},function(){
				flag=true;
			});
			btns[now].className="";
			btns[next].className="JDhot";
			now=next;
		}
		for (var i = 0; i < btns.length; i++) {
			btns[i].index=i;
			btns[i].onclick=function(){

				if(this.index==next||flag==false){
					return
				}
				if(now<this.index){
					as[this.index].style.left=aw+"px";
					//console.log(now)
					animate(as[now],{left:-aw},function(){
						flag=true;
					});
					//console.log(this.index);
					animate(as[this.index],{left:0},function(){
						flag=true;
					});

				}else if(now>this.index){
					as[this.index].style.left=-aw+"px";
					//console.log(now)
					animate(as[now],{left:aw},function(){
						flag=true;
					});
					//console.log(this.index);
					animate(as[this.index],{left:0},function(){
						flag=true;
					});
				}
				btns[now].className="";
			    btns[this.index].className="JDhot";
				now=next=this.index;
			}
		};	
	}
    


	//floorWheel(JDwheel);


/*轮播效果宽高   END*/
/*侧面的固定定位  START*/
//var slideFixItem=$(".slideFixItem")[0];
//console.log(slideFixItem);
function fixAnimate(slideFixItem){
	var slideFixItemUp=$(".slideFixItemUp",slideFixItem)[0];
	var slideFixItemDown=$(".slideFixItemDown",slideFixItem)[0];
	var slideFixItemDownWidth=getStyle(slideFixItemDown,"width")
	//console.log(slideFixItemDown);
	slideFixItem.onmouseover=function(){
		slideFixItemDown.style.background="#c81623";
		slideFixItemUp.style.backgroundColor="#c81623";
		animate(slideFixItemDown,{left:-slideFixItemDownWidth+4},500,Tween.Quad.easeIn);   
	}
	slideFixItem.onmouseout=function(){
		slideFixItemDown.style.background="#999";
		slideFixItemUp.style.backgroundColor="#999";
		animate(slideFixItemDown,{left:35},500,Tween.Bounce.easeOut)   
	}	
}
var slideFixItem=$(".slideFixItem");
//console.log(slideFixItem);
for (var i = 0; i < slideFixItem.length; i++) {
	fixAnimate(slideFixItem[i]);
	//slideFixItem[i]
};




/*侧面的固定定位  END*/
/*back  START*/
var floorItems=$(".floorItem");
//console.log(floorItem);
var back=$(".back")[0];
//console.log(back);
var backItems=$(".backItem",back);
//console.log(backItem);
//console.log(backItems[0]);
var backItemA1s=$(".backItemA1",back);
//console.log(backItemA1s);
var backItemA2s=$(".backItemA2",back);
//console.log(backItemA2s);
var arr=[];
for (var i = 0; i < floorItems.length; i++) {
	arr.push(floorItems[i].offsetTop);
};
//console.log(arr);
backItemA1s[0].style.display="none";
backItemA2s[0].style.display="block";
backItemA2s[0].style.color="#c81623";
var  FLOORload=$(". FLOORload");
//console.log( FLOORload);
var  FLOORloadARR=[];
for (var i = 0; i <  FLOORload.length; i++) {
	 //console.log(FLOORload[i].offsetTop);
	 FLOORloadARR.push(FLOORload[i].offsetTop);
};
//console.log(FLOORloadARR);
var doc=document.documentElement.scrollTop?document.documentElement:document.body;

window.onscroll=function(){
	for (var i = 0; i < arr.length; i++) {
		if((doc.scrollTop+500)>=arr[0]){
			back.style.display="block";
		}else{
			back.style.display="none";
		}
		
		if((doc.scrollTop+90)>=arr[i]){
			for (var j = 0; j < backItems.length; j++) {
				backItemA1s[j].style.display="block";
		        backItemA2s[j].style.display="none";
			};
            backItemA1s[i].style.display="none";
	        backItemA2s[i].style.display="block";           
		}
	};
	//按需加载
    var clientH=document.documentElement.clientHeight;
    //console.log(clientH);
	for (var i = 0; i < FLOORloadARR.length; i++) {
		if(doc.scrollTop+clientH>=FLOORloadARR[i]){
			setImg(i);
		}
	};
	function setImg(i){
		var imgs=$("img",FLOORload[i]);
		//console.log(imgs.length);
		for (var j = 0; j < imgs.length; j++) {
			
			    imgs[j].src=imgs[j].getAttribute("data-src");
			   
			
		};

	}
}
window.onscroll();//先自动执行一次，保证不需要滚动也能显示首页
for (var i = 0; i < backItems.length; i++) {
	backItems[i].index=i;
	backItems[i].onclick=function(){
		animate(document.body,{scrollTop:arr[this.index]});
		animate(document.documentElement,{scrollTop:arr[this.index]});		
	}
};








var top=$(".top")[0];
//console.log(top);
top.onclick=function(){animate(doc,{scrollTop:0},function(){
		});}
/*back  END*/

















/*banner右下   START*/
var hiddenBox=$(".hiddenBox")[0];
	//console.log(hiddenBox);
	var hiddenBtnItem=$(".btnItem",hiddenBox);
	//console.log(hiddenBtnItem);
	var hiddenImgItem=$(".imgItem",hiddenBox);
	//console.log(hiddenImgItem);
	hiddenBtnItem[0].className+=" hot";
	for (var i = 0; i < hiddenBtnItem.length; i++) {
		hiddenBtnItem[i].index=i;
		hiddenBtnItem[i].onmouseover=function(){
			for (var j = 0; j < hiddenImgItem.length; j++) {
				hiddenImgItem[j].style.display="none";				
				hiddenBtnItem[j].className="btnItem";
				
			};
			hiddenImgItem[this.index].style.display="block";
			this.className+=" hot";
			/*if(i==hiddenBtnItem.length-1){
				hiddenBtnItem[i].style.width="62px;"
			}*/
		}
	};


    function innerSelect(hiddenImgItemCS){
	    var innerBtnBox=$(".innerBtnBox",hiddenImgItemCS)[0];
		//console.log(innerBtnBox);
		var innerBtnItem=$(".innerBtnItem",innerBtnBox);
		//console.log(innerBtnItem);
		var innerImgBox=$(".innerImgBox",hiddenImgItemCS)[0];
		//console.log(innerImgBox);
		var innerImgItem=$(".innerImgItem",innerImgBox);
		//console.log(innerImgItem);
		innerImgItem[0].style.display="block";	
		innerBtnItem[0].className="innerBtnItem hot";
		for (var i = 0; i < innerBtnItem.length; i++) {
			innerBtnItem[i].index=i;
			innerBtnItem[i].onmouseover=function(){
				for (var j = 0; j < innerImgItem.length; j++) {
					innerImgItem[j].style.display="none";
					innerBtnItem[j].className="innerBtnItem";
				};
				innerImgItem[this.index].style.display="block";	
				innerBtnItem[this.index].className="innerBtnItem hot";

			}
			
		};	
    }
    for (var i = 0; i < hiddenImgItem.length; i++) {
    	innerSelect(hiddenImgItem[i]);
    	
    };

    //输入框中光标出现、光标移开
    function  inputWord(inputInner){
	    var inputInnerOldValue=inputInner.value;
	    //console.log(inputInnerOldValue);
	    inputInner.onfocus=function(){
	    	if(inputInner.value==inputInnerOldValue){
	    		inputInner.value=""
	    	}

	    }
	    inputInner.onblur=function(){
	    	if(inputInner.value==""){
	    		inputInner.value="请输入手机号";
	    	}
	    }
	}
	var inputInner=$(".inputInner");
    //console.log(inputInner);
	for (var i = 0; i < inputInner.length; i++) {
		inputWord(inputInner[i]);
		
	};
/*banner右下   END*/






































})