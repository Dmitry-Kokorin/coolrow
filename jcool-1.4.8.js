(function(w,d){
	'use strict';
	function App(obj=null,t=this){
		if(typeof obj==='string'){
			if(d.querySelectorAll){
				t.obj=d.querySelectorAll?d.querySelectorAll(obj):null;
			}else{
				switch(obj.charAt(0)){
					case '.':
					
					break;
					case '#':
					
					break;
					default:
					
					break;
				}
			}
		}else{
			t.obj=obj;
		}
		t.ready=function(fn=null){
			if(obj!==d||!fn)return;
			d.addEventListener('DOMContentLoaded',fn,false);
			return true;
		};
		t.html=function(a=null){
			if(typeof obj==='string'||obj==='object'){
				if(a){
					for(let i=0;i<t.obj.length;++i){
						t.obj[i].innerHTML=a;
					}
					return t;
				}else{
					return t.obj[0].innerHTML;
				}
			}else{
				if(a){
					t.obj.innerHTML=a;
					return t;
				}else{
					return t.obj.innerHTML;
				}
			}
		};
		t.outerHtml=function(a=null){
			if(typeof obj==='string'||obj==='object'){
				if(a){
					for(let i=0;i<t.obj.length;++i){
						t.obj[i].outerHTML=a;
					}
					return t;
				}else{
					return t.obj[0].outerHTML;
				}
			}else{
				if(a){
					t.obj.outerHTML=a;
					return t;
				}else{
					return t.obj.outerHTML;
				}
			}
		};
		t.child=function(a=[],n=null){
			n=((typeof obj==='string'||obj==='object')?t.obj[0]:t.obj).children;
			for(let i=0;i<n.length;++i){
				a.push(n[i]);
			}
			return a;
		};
		t.append=function(a=null){
			if(typeof obj==='string'){
				for(let i=0;i<t.obj.length;++i){
					t.obj[i].innerHTML=t.obj[i].innerHTML+a;
				}
			}else{
				t.obj.innerHTML=t.obj.innerHTML+a;
			}
		};
		t.prepend=function(a=null){
			if(typeof obj==='string'){
				for(let i=0;i<t.obj.length;++i){
					t.obj[i].innerHTML=a+t.obj[i].innerHTML;
				}
			}else{
				t.obj.innerHTML=a+t.obj.innerHTML;
			}
		};
		t.empty=function(){
			if(typeof obj==='string'){
				for(let i=0;i<t.obj.length;++i){
					t.obj[i].innerHTML='';
				}
			}else{
				t.obj.innerHTML='';
			}
		};
		t.on=function(a,b,c=null,elem=null){// click func			click elem func
			if(c&&typeof c==='function'){
				d.addEventListener(a,function(e){
					elem=new App(b).obj;
					for(let i=0;i<elem.length;++i){
						if(e.target===elem[i]){
							return c.apply(e.target,arguments);
						}
					}
					
				},false);
			}else if(typeof obj==='string'){
				for(let i=0;i<t.obj.length;++i){
					t.obj[i].addEventListener(a,function(e){
						return b.apply(e.target,arguments);
					},false);
				}
			}else{
				obj.addEventListener(a,function(e){
					return b.apply(e.target,arguments);
				},false);
			}
		};
		t.each=function(a){
			t.obj.forEach(function(b, c){
				return a.apply(b, arguments);
			});
		},
		t.val=function(a=null){
			if(typeof obj==='string'||obj==='object'){
				if(a){
					for(let i=0;i<t.obj.length;++i){
						t.obj[i].value=a;
					}
					return true;
				}else{
					//console.info(t);
					return t.obj[0].value;
				}
			}else{
				if(a){
					t.obj.value=a;
					return true;
				}else{
					return t.obj.value;
				}
			}
		};
		t.fadeOut=function(a=100){
			if(typeof obj==='string'||obj==='object'){
				for(let i=0;i<t.obj.length;++i){
					getFadeOut(t.obj[i],a);
				}
			}else{
				getFadeOut(t.obj,a);
			}
			return t;
		};
		t.fadeIn=function(a=100){
			if(typeof obj==='string'||obj==='object'){
				for(let i=0;i<t.obj.length;++i){
					getFadeIn(t.obj[i],a);
				}
			}else{
				getFadeIn(t.obj,a);
			}
			return t;
		};
		t.data=function(a){
			if(typeof obj==='string'){
				return t.obj[0].getAttribute('data-'+a);
			}else{
				return t.obj.getAttribute('data-'+a);
			}
		};
		t.files=function(a=[]){
			if(typeof obj==='string'||obj==='object'){
				for(let i=0;i<t.obj.length;++i){
					for(let j=0;j<t.obj[i].files.length;++j){
						a.push(t.obj[i].files[j]);
					}
				}
				return a;
			}else{
				for(let i=0;i<t.obj.files;++i){
					a.push(t.obj.files[i]);
				}
				return a;
			}
		};
		t.attr=function(a,b=null){ /////////////////////////////////////////////////////
			if(typeof obj==='string'||obj==='object'){
				return b?t.obj[0].setAttribute(a,b):t.obj[0].getAttribute(a);
			}else{
				return b?t.obj.setAttribute(a,b):t.obj.getAttribute(a);
			}
		};
		t.css=function(a={}){
			if(typeof obj==='string'||obj==='object'){
				for(let i=0;i<t.obj.length;++i){
					for(let b in a){
						if(t.obj.getAttribute('style')){
							t.obj[i].setAttribute('style', t.obj[i].getAttribute('style')+b+':'+a[b]);
						}else{
							t.obj[i].setAttribute('style', b+':'+a[b]);
						}
					}
				}
			}else{
				for(let b in a){
					if(t.obj.getAttribute('style')){
						t.obj.setAttribute('style', t.obj.getAttribute('style')+b+':'+a[b]);
					}else{
						t.obj.setAttribute('style', b+':'+a[b]);
					}
				}
			}
		},
		t.next=function(a=null){
			if(typeof obj==='string'||obj==='object'){
				for(let i=0;i<t.obj.length;++i){
					a.push(t.obj[0].nextElementSibling);
				}
				t.obj = a;
			}else{
				t.obj = t.obj.nextElementSibling;
			}
			return t;
		};
		t.prev=function(a=null){
			if(typeof obj==='string'||obj==='object'){
				for(let i=0;i<t.obj.length;++i){
					a.push(t.obj[0].previousElementSibling);
				}
				t.obj = a;
			}else{
				t.obj = t.obj.previousElementSibling;
			}
			return t;
		};
		t.parent=function(a=[]){
			if(typeof obj==='string'||obj==='object'){
				for(let i=0;i<t.obj.length;++i){
					a.push(t.obj[i].parentNode);
				}
				t.obj = a;
			}else{
				t.obj = t.obj.parentNode;
			}
			return t;
		};
		t.serialized=function(a=[],b={}){
			if(typeof obj==='string'||obj==='object'){
				a=t.obj[0].querySelectorAll('input, select, textarea');
			}else{
				a=t.obj.querySelectorAll('input, select, textarea');
			}
			for(let key in a){
				if(isFinite(key)){
					b[a[key].getAttribute('name')]=a[key].value;
				}
			}
			return b;
		};
		t.addClass=function(a){
			if(typeof obj==='string'||obj==='object'){
				for(let i=0;i<t.obj.length;++i){
					t.obj[i].classList.add(a);
				}
			}else{
				t.obj.classList.add(a);
			}
			return t;
		};
		t.removeClass=function(a){
			if(typeof obj==='string'||obj==='object'){
				for(let i=0;i<t.obj.length;++i){
					t.obj[i].classList.remove(a);
				}
			}else{
				t.obj.classList.remove(a);
			}
			return t;
		};
		t.hasClass=function(a){
			if(typeof obj==='string'||obj==='object'){
				return t.obj[0].classList.contains(a);
			}else{
				return t.obj.classList.contains(a);
			}
		};
		t.changeClass=function(a,b){
			if(typeof obj==='string'||obj==='object'){
				for(let i=0;i<t.obj.length;++i){
					t.obj[i].classList.remove(a);
					t.obj[i].classList.add(b);
				}
			}else{
				t.obj.classList.remove(a);
				t.obj.classList.add(b);
			}
			return t;
		};
		return typeof obj==='string'?t:t;
		function getFadeIn(a,b,s=null,t=null){
			s = a.style;
			if(s.display==='block'&&s.opacity===1)return;
			s.opacity=0;
			s.MozOpacity=0;
			s.display='block';
			(function(){
				t=window.setInterval(function(){
					if(s.opacity>1||s.MozOpacity>1){
						window.clearInterval(t);
						s.opacity=1;
						s.MozOpacity=1;
					}else{
						s.opacity=+s.opacity+0.01;
						s.MozOpacity=+s.MozOpacity+0.01;
					}
				},(b/10000));
			})();
			return t;
		}
		function getFadeOut(a,b,s=null,t=null){
			s = a.style;
			if(s.display==='none'||s.opacity===0)return;
			(function(){
				t=window.setInterval(function(){
					if(s.opacity<0||s.MozOpacity<0){
						window.clearInterval(t);
						s.display='none';
						s.opacity=0;
						s.MozOpacity=0;
					}else{
						s.opacity=+s.opacity-0.01;
						s.MozOpacity=+s.MozOpacity-0.01;
					}
				},(b/10000));
			})();
			return t;
		}
	}
	let $=w.$=function(a=null){return new App(a);};
	function Set(){}
	Set.prototype={
		that:this,
		// console views this arguments
		log:function(){
			for(let i=0;i<arguments.length;++i){
				console.info(arguments[i]);
			}
			return this;
		},
		// a = url		b = object (data, success fn, error fn)		fn = callback (optional)
		ajax:function(a,b=null,fn=null,c=null){
			c=new XMLHttpRequest();
			c.open('POST',a,true);
			c.onreadystatechange=function(){
				try{
					if(this.readyState!==4||this.status!==200)return;
					if(b.success)b.success(this.responseText);
				}
				catch(e){
					if(b.error)b.error(e);
				}
			};
			if(b.files){
				c.send(this.formFiles(b.data));
			}else{
				c.send(this.form(b.data));
			}
			return typeof fn==='function'?fn():this;
		},
		// a = event (open, close, change)		b = object (overlay element, modal element, close time)
		modal:function(a,b=null,fn=null,d=null){
			let that=this;
			d=b.over?b.over==='none'?null:b.over:'.overlay';
			if(a==='open'){
				if(d)$(d).fadeIn();
				$(b.box).fadeIn();
				if(b.close){
					setTimeout(function(){
						that.modal('close',{
							box:b.box,
							over:d
						});
					},b.close*1000);
				}
			}else if(a==='close'){
				if(d)$(d).fadeOut();
				$(b.box).fadeOut();
			}else if(a==='change'){
				$(b.box).fadeOut();
				$(b.new).fadeIn();
			}
			return typeof fn==='function'?fn():this;
		},
		// json data for parse
		jsp:function(a){
			return JSON.parse(a);
		},
		// json data for striginfy
		jstr:function(a){
			return JSON.stringify(a);
		},
		// a = data object		b = formdata object (optional)
		form:function(a,b=null,c=null){
			b=b||new FormData();
			for(c in a){
				if(a.hasOwnProperty(c)){
					b.append(c,a[c]);
				}
			}
			return b;
		},
		// a = files		b = formdata object (optional)
		formFiles:function(a,b=null){
			b=b||new FormData();
			for(var i = 0;i < a.length; ++i){
				b.append('file['+i+']',a[i]);
			}
			return b;
		},
		// a = object data serialized
		validate:function(a,b=null,c=0){
			b=(a.obj[0]||a.obj).querySelectorAll('input, select, textarea');
			for(let key in b){
				if(isFinite(key)){
					let k=b[key],valid=k.validity,error=k.getAttribute('error');
					if(k.required){
						if(k.tagName==='INPUT'){
							if(k.type==='number'){
								if(k.min&&valid.rangeUnderflow){
									error='Минимальное значение поля '+k.min;
									++c;
								}
								if(k.max&&valid.rangeOverflow){
									error='Максимальное значение поля '+k.max;
									++c;
								}
							}else if(k.type==='tel'){
								if(k.value.length>7&&(k.value.length<11||k.value.length>12)){
									error='Некорректный номер телефона<br>пример: +79123456789, 89123456789, 88001234567 или 642531';
									++c;
								}
								if(k.value.length===11&&!/^8[8|9]{1}[\d]{2}[\d]{7}$/.test(k.value)){
									error='Некорректный номер телефона<br>пример: +79123456789, 89123456789, 88001234567 или 642531';
									++c;
								}
								if(k.value.length===12&&!/^\+79[\d]{2}[\d]{7}$/.test(k.value)){
									error='Некорректный номер телефона<br>пример: +79123456789, 89123456789, 88001234567 или 642531';
									++c;
								}
							}else if(k.type==='email'){
								if(valid.typeDismatch){
									error='Некорректный ввод email<br>пример: name@mailserver.ru';
									++c;
								}
							}
							if(k.pattern&&valid.patternMismatch){
								error=error||'Проверьте правильность заполнения полей';
								++c;
							}
							if(valid.typeDismatch){
								error='Некорректное значение "'+k.value+'"';
								++c;
							}
						}
						if(valid.valueMissing){
							error=error||'Обязательные поля не заполнены';
							++c;
						}
						if(c){
							$('.modal_info').html(error||'Проверьте правильность заполнения полей');
							this.modal('open',{over:'none',box:'.modal_event',close:3});
							return false;
						}
					}
				}
			}
			return true;
		},
		imgPreview:function(a,b,c,f=null,g=null,h=null,j=null){			//a = '.files_input'		b = '.files_name'		c = '.files_preview'
			f=a.files;
			g=f.length;
			h=$(b);
			j=$(c);
			if(g){
				j.empty();
				[].forEach.call(f,function(file){
					if(file.type.match(/image.*/)){
						var reader=new FileReader();
						reader.onload=function(e){
							var img=d.createElement('img');
							img.src=e.target.result;
							j.obj[0].appendChild(img);
						};
						reader.readAsDataURL(file);
					}
				});
				if(g===1){
					h.html(f[0].name+' ('+(f[0].size/1024).toFixed(2)+' Кб)');
				}else{
					h.html('Добавлено '+g+' файлов');
				}
			}else{
				h.html('Выберите файл');
				j.html('Предпросмотр');
			}
			return this;
		},
		copy:function(a=null){
			if(!a)return 'Нет данных для копирования';
			a.obj.select();
			try{
				return d.execCommand('copy')?(w.getSelection().removeAllRanges(),'Скопировано'):(w.getSelection().removeAllRanges(),'Ошибка копирования');
			}
			catch(e){
				w.getSelection().removeAllRanges();
				return 'Ошибка копирования';
			}
		},
		sleep:function(a,fn=null){
			setTimeout(fn,a);
			return this;
		}
	};
	w.jRun=new Set();
})(window,document);