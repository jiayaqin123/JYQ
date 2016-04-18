


    function getClass(classname,obj){
		obj=obj||document;
		if (document.getElementsByClassName!=undefined) {
			return obj.getElementsByClassName(classname);
		}else{
			var eles=obj.getElementsByTagName("*");
			var arr=[];
			for (var i = 0; i < eles.length; i++) {
				if(checkClass(eles[i].className,classname)){
					arr.push(eles[i]);
				}
			};
			return arr;
	    }
    }
    function checkClass(oldclass,newclass){
    	var alls=oldclass.split(" ");
    	for (var i = 0; i < alls.length; i++) {
    		if(alls[i]==newclass){
    			return true;
    		}
    	};
    	return false;

    }
    /*var one=getClass("one")[0];
    //console.log(one);
    //one.style.background="orange";
    one.className+=" aaa";*/



    function getText(obj,val){
    	if(val==undefined){
	    	if(obj.innerText!=undefined){
	    		//alert("支持IE6");
	    		return obj.innerText;    		
	    	}else{
	    		//alert("支持FF");
	    		return obj.textContent; 		
	    	}	
    	}else{
    		if(obj.innerText!=undefined){
	    		//alert("支持IE6");
	    		obj.innerText=val;    		
	    	}else{
	    		//alert("支持FF");
	    		obj.textContent=val; 		
	    	}
    	}
    	
    };
   /* console.log(document);
    var text=getClass("text")[0];
    console.log(text);
    var aa=getText(text,"新中国");
    console.log(aa);*/


    //无px
    function getStyle(obj,arr){
    	if(obj.currentStyle){
    		return parseInt(obj.currentStyle[arr]);
    	}else{
    		return parseInt(getComputedStyle(obj,null)[arr]);
    	}
    }

    /*//有px
    function getStyle(obj,arr){
    	if(obj.currentStyle){
    		return obj.currentStyle[arr];
    	}else{
    		return getComputedStyle(obj,null)[arr];
    	}
    }*/
    function $(selector,obj){
      var obj=obj||document;
        if(typeof selector=="string"){
          if(selector.charAt(0)=="."){//返回的是个集合
            return getClass(selector.substring(1),obj);
          }else if(selector.charAt(0)=="#"){//返回的只有一个
            return document.getElementById(selector.substring(1));
          }else if(/^[a-zA-Z][a-zA-Z1-6]*$/.test(selector)){//返回的是个集合
            return obj.getElementsByTagName(selector)
          }else if(/^<[a-z][a-z|1-6]{0,9}>$/.test(selector)){
          var aa=selector.slice(1,-1);
          return document.createElement(aa);
          }

        }else if(typeof selector=="function"){//返回的是个函数
          on(window,"load",selector);//目的:可以写多个页面加载事件
        }

    }


    function getChilds(obj,type){
        type=type||"no";
        var all=obj.childNodes;
        var newarr=[];
        if(type=="yes"){
            for (var i = 0; i < all.length; i++) {
                if(all[i].nodeType==1||(all[i].nodeType==3&&trim(all[i].nodeValue)!="")){
                   newarr.push(all[i]) 
                };
            };   
        }else if(type=="no"){
            for (var i = 0; i < all.length; i++) {
                if(all[i].nodeType==1){
                   newarr.push(all[i]) 
                };
            };
        }
        
        return newarr;    
    }
    function trim(str,type){
        type=type||"lr";
        if(type=="a"){
            return str.replace(/\s*/g,"");
        }else if(type=="l"){
            return str.replace(/^\s*/g,"");
        }else if(type=="r"){
            return str.replace(/\s*$/g,"");
        }else if(type=="lr"){
            return str.replace(/^\s*|\s*$/g,"");
        }

    }
    function getFirst(parent,type){
        return getChilds(parent,type)[0];
    }
    function getLast(parent,type){
        var length=getChilds(parent,type).length;
        return getChilds(parent,type)[length-1];
    }
    function getNum(parent,num,type){
        return getChilds(parent,type)[num];
    }
    function getnextSibling(obj){
        var next=obj.nextSibling;
        if(next==null){
            return false;
        }
        while(next.nodeType==8||(next.nodeType==3&&trim(next.nodeValue)=="")) {
            next=next.nextSibling;
            if(next==null){
                return false;
            }
        }
        return next;
    }
    function getpreviousSibling(obj){
        var last=obj.previousSibling;
        if(last==null){
            return false;
        }
        while(last.nodeType==8||(last.nodeType==3&&trim(last.nodeValue)=="")) {
            last=last.previousSibling;
            if(last==null){
                return false;
            }
        }
        return last;
    }
     function insertbefore(obj1,obj2){
      var parent=obj2.parentNode;
      parent.insertBefore(obj1,obj2);
    }
    function insertAfter(obj,afterObj){
        var next=getnextSibling(afterObj);
        if(next==false){
            afterObj.parentNode.appendChild(obj);
        }else{
             afterObj.parentNode.insertBefore(obj,next);
        }  
    }
    function remove(obj){
        return obj.parentNode.removeChild(obj);
    }
    //对象的同一个事件绑定多个事件处理程序
    //event传的是字符串
    function on(obj,event,fn){
        if(obj.addEventListener){
            //alert("支持chrom")
            obj.addEventListener(event,fn,false);
        }else{
            //alert("支持IE6-10")
            obj.attachEvent("on"+event,fn);
        }
    }
    //对象删除指定的事件
    //event传的是字符串
    //fn传的只是函数名---------------------因为要删除的是引用
    function off(obj,event,fn){
        if(obj.removeEventListener){
            //alert("支持chrom")
            obj.removeEventListener(event,fn,false);
        }else{
            //alert("支持IE6-10")
            obj.detachEvent("on"+event,fn);
        }
    }


    function mouseWheel(obj,upcallback,downcallback){
        if(obj.addEventListener){
            obj.addEventListener("mousewheel",scrollFn,false);
            obj.addEventListener("DOMMouseScroll",scrollFn,false);
        }else if(obj.attachEvent){
            obj.attachEvent("onmousewheel",scrollFn);
        }
        function scrollFn(e){
            var ev=e||window.event;
            if(ev.wheelDelta==-120||ev.detail==3){
                //console.log("向下");
                downcallback&&downcallback.call(obj);
            }else if(ev.wheelDelta==120||ev.detail==-3){
                //console.log("向上");
                upcallback&&upcallback.call(obj);
            }
            if (ev.preventDefault ) {
                ev.preventDefault(); //阻止默认浏览器动作(W3C) 
            }else{
                ev.returnValue = false;//IE中阻止函数器默认动作的
            }
        }
        
    }
    //判断某个元素是否包含有另外一个元素
function contains (parent,child) {//返回 true  parent 包含 child    返回false 不是包含关系
    if(parent.contains){//如果对象支持contains
        // 如果  父对象 包含 子对象   并且  父对象不等于 子对象 返回 true 
        return parent.contains(child) && parent!=child;
    }else{
        //父对象 包含 子对象  16   父对象 在子对象之前 4  = 20
        return (parent.compareDocumentPosition(child)===20);
    }
}
//判断鼠标是否真正的从外部移入，或者是真正的移出到外部；
function checkHover (e,target) {
    //target 对象 
    if(getEvent(e).type=="mouseover"){
        return !contains(target,getEvent(e).relatedTarget || getEvent(e).fromElement)&&
            !((getEvent(e).relatedTarget || getEvent(e).fromElement)===target)
    }else{
        return !contains(target,getEvent(e).relatedTarget || getEvent(e).toElement)&&
            !((getEvent(e).relatedTarget || getEvent(e).toElement)===target)
    }
}

/*
  hover(obj,overfun,outfun)  鼠标移入移除事件 
  obj   要操作的对象
  overfun   鼠标移入需要处理的函数
  outfun     鼠标移除需要处理的函数
*/
function hover (obj,overfun,outfun) {
    if(overfun){
        obj.onmouseover=function  (e) {
            if(checkHover(e,obj)){
                overfun.call(obj);
            }
        }
    }
    if(outfun){
        obj.onmouseout=function  (e) {
            if(checkHover(e,obj)){
                outfun.call(obj);
            }
        }
    }
}

//获得事件对象
function getEvent (e) {
    return e||window.event;
}



   










