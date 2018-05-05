(function(w,d){
	'use strict';
	if(!d.querySelectorAll){
		alert('Ваш браузер устарел, пожалуйста, обновите браузер чтобы продолжить работу с сайтом');
		return false;
	}
	function App(){
		let obj = arguments[0]||null, t=this;
		t.obj=typeof obj==='string'?d.querySelectorAll(obj):obj;
		t.ready=function(){
			let fn=arguments[0]||null;
			if(obj!==d||!fn)return;
			d.addEventListener('DOMContentLoaded',fn,false);
			return true;
		};
		t.html=function(){
			let a=arguments[0]||null;
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
		t.outerHtml=function(){
			let a=arguments[0]||null;
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
		t.child=function(){
			let a=[],n;
			n=((typeof obj==='string'||obj==='object')?t.obj[0]:t.obj).children;
			for(let i=0;i<n.length;++i){
				a.push(n[i]);
			}
			return a;
		};
		t.append=function(a){
			if(typeof obj==='string'){
				for(let i=0;i<t.obj.length;++i){
					t.obj[i].innerHTML=t.obj[i].innerHTML+a;
				}
			}else{
				t.obj.innerHTML=t.obj.innerHTML+a;
			}
			return t;
		};
		t.prepend=function(a){
			if(typeof obj==='string'){
				for(let i=0;i<t.obj.length;++i){
					t.obj[i].innerHTML=a+t.obj[i].innerHTML;
				}
			}else{
				t.obj.innerHTML=a+t.obj.innerHTML;
			}
			return t;
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
		t.on=function(a,b){
			let c=arguments[2]||null, elem;
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
				let i=0,tmr=setInterval(function(){
					if(i<t.obj.length){
						t.obj[i].addEventListener(a,function(e){
							return b.apply(e.target,arguments);
						},false);
						++i;
					}else{
						clearInterval(tmr);
					}
				},20);
			}else{
				obj.addEventListener(a,function(e){
					return b.apply(e.target,arguments);
				},false);
			}
		};
		t.off=function(a){
			let b=arguments[1]||null, c=arguments[2]||null;
			if(c&&typeof c==='function'){
				d.removeEventListener(a,function(){});
			}else if(typeof obj==='string'){
				let i=0,tmr=setInterval(function(){
					if(i<t.obj.length){
						t.obj[i].removeEventListener(a,function(){});
						++i;
					}else{
						clearInterval(tmr);
					}
				},20);
			}else{
				obj.removeEventListener(a,function(){});
			}
		};
		t.each=function(a){
			for(let i=0;i<t.obj.length;++i)a.apply(t.obj[i], arguments);
			return t;
		};
		t.val=function(){
			let a=arguments[0]||null;
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
		t.fadeOut=function(){
			if(typeof obj==='string'||obj==='object'){
				for(let i=0;i<t.obj.length;++i){
					getFadeOut(t.obj[i]);
				}
			}else{
				getFadeOut(t.obj);
			}
			return t;
		};
		t.fadeIn=function(){
			if(typeof obj==='string'||obj==='object'){
				for(let i=0;i<t.obj.length;++i){
					getFadeIn(t.obj[i]);
				}
			}else{
				getFadeIn(t.obj);
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
		t.files=function(){
			let a=[];
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
		t.attr=function(a){
			let b=arguments[1]||null;
			if(typeof obj==='string'||obj==='object'){
				if(b){
					for(let i=0;i<t.obj.length;++i)t.obj[i].setAttribute(a,b);
					return t;
				}
				return t.obj[0].getAttribute(a);
			}else{
				return b?(t.obj.setAttribute(a,b),t):t.obj.getAttribute(a);
			}
		};
		t.checked=function(){
			return (typeof obj==='string'||obj==='object')?(t.obj[0].checked||null):(t.obj.checked||null);
		};
		t.removeAttr=function(a){
			if(typeof obj==='string'||obj==='object'){
				for(let i=0;i<t.obj.length;++i){
					t.obj[i].removeAttribute(a);
				}
			}else{
				t.obj.removeAttribute(a);
			}
			return t;
		};
		t.css=function(){
			let a=arguments[0]||{};
			if(typeof obj==='string'||obj==='object'){
				for(let i=0;i<t.obj.length;++i){
					for(let b in a){
						if(t.obj[i].getAttribute('style')||null){
							t.obj[i].setAttribute('style', t.obj[i].getAttribute('style')+b+':'+a[b]+';');
						}else{
							t.obj[i].setAttribute('style', b+':'+a[b]+';');
						}
					}
				}
			}else{
				for(let b in a){
					if(t.obj.getAttribute('style')||null){
						t.obj.setAttribute('style', t.obj.getAttribute('style')+b+':'+a[b]+';');
					}else{
						t.obj.setAttribute('style', b+':'+a[b]+';');
					}
				}
			}
			return t;
		};
		t.hide=function(){
			if(typeof obj==='string'||obj==='object'){
				for(let i=0;i<t.obj.length;++i){
					t.obj[i].style.display = 'none';
				}
			}else{
				t.obj.style.display = 'none';
			}
			return t;
		};
		t.show=function(){
			let a=arguments[0]||'block';
			if(typeof obj==='string'||obj==='object'){
				for(let i=0;i<t.obj.length;++i){
					t.obj[i].style.display = a;
				}
			}else{
				t.obj.style.display = a;
			}
			return t;
		};
		t.next=function(){
			let a;
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
		t.prev=function(){
			let a;
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
		t.parent=function(){
			let a=[];
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
		t.serialized=function(){
			let a, b={};
			if(typeof obj==='string'||obj==='object'){
				a=t.obj[0].querySelectorAll('input, select, textarea');
			}else{
				a=t.obj.querySelectorAll('input, select, textarea');
			}
			for(let i=0;i<a.length;++i){
				if(a[i].type==='file'){
					for(let j=0;j<a[i].files.length;++j){
						b[a[i].getAttribute('name')+j]=a[i].files[j];
					}
				}else{
					b[a[i].getAttribute('name')]=a[i].value;
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
		t.offset=function(){
			if(typeof obj==='string'||obj==='object'){
				return t.obj[0].getBoundingClientRect();
			}else{
				return t.obj.getBoundingClientRect();
			}
		};
		t.top=function(){
			if(obj!==w) return null;
			return w.scrollY;
		};
		t.height=function(){
			if(obj===w){
				return w.innerHeight;
			}else if(obj===d){
				return d.innerHeight;
			}else if(typeof obj==='string'||obj==='object'){
				return t.obj[0].scrollHeight;
			}else{
				return t.obj.scrollHeight;
			}
		};
		t.trigger=function(a){
			if(!a||a=='undefined')return;
			if(obj===w){
				w.dispatchEvent(new Event(a));
			}else if(obj===d){
				d.dispatchEvent(new Event(a));
			}else if(typeof obj==='string'||obj==='object'){
				for(let i=0;i<t.obj.length;++i){
					t.obj[0].dispatchEvent(new Event(a));
				}
			}else{
				t.obj.dispatchEvent(new Event(a));
			}
			return t;
		};
		return typeof obj==='string'?t:t;
		function getFadeIn(a){
			let s = a.style, ani;
			if(s.display==='block'&&s.opacity===1)return;
			s.opacity=0;
			s.MozOpacity=0;
			s.display='block';
			ani = requestAnimationFrame(animate);
			function animate(){
				if(s.opacity>1||s.MozOpacity>1){
					cancelAnimationFrame(ani);
					s.opacity=1;
					s.MozOpacity=1;
				}else{
					s.opacity=+s.opacity+0.1;
					s.MozOpacity=+s.MozOpacity+0.1;
					cancelAnimationFrame(ani);
					ani = requestAnimationFrame(animate);
				}
			}
			return t;
		}
		function getFadeOut(a){
			let s = a.style, ani;
			if(s.display==='none'||s.opacity===0)return;
			ani = requestAnimationFrame(animate);
			function animate(){
				if(s.opacity<0||s.MozOpacity<0){
					cancelAnimationFrame(ani);
					s.display='none';
					s.opacity=0;
					s.MozOpacity=0;
				}else{
					s.opacity=+s.opacity-0.1;
					s.MozOpacity=+s.MozOpacity-0.1;
					cancelAnimationFrame(ani);
					ani = requestAnimationFrame(animate);
				}
			}
			return t;
		}
	}
	let $=w.$=function(){let a=arguments[0]||null;return new App(a);};
	function Set(){}
	Set.prototype={
		that:this,
		log:function(){
			for(let i=0;i<arguments.length;++i){
				if(arguments[i]||null) console.info(arguments[i]);
			}
			return this;
		},
		ajax:function(a){
			let fn=arguments[1]||null, c=new XMLHttpRequest();
			c.open('POST',a.url,true);
			c.onreadystatechange=function(){
				try{
					if(this.readyState!==4||this.status!==200)return;
					if(a.success)a.success(this.responseText);
				}
				catch(e){
					if(a.error)a.error(e);
				}
			};
			if(a.files){
				c.send(this.formFiles(a.data));
			}else{
				c.send(this.form(a.data));
			}
			return typeof fn==='function'?fn():this;
		},
		modal:function(a){// a = event (open, close, change)		b = object (over - element, box - modal element, close - time)
			let that=this, fn=arguments[1]||null, d;
			d=a.over&&a.over!='undefined'?(a.over==true?'.overlay':a.over):null;
			if(a.action=='open'){
				if(d)$(d).fadeIn();
				$(a.box).fadeIn();
				if(a.close){
					setTimeout(function(){
						that.modal('close',{
							box:a.box,
							over:d
						});
					},a.close*1000);
				}
			}else if(a.action=='close'){
				if(d)$(d).fadeOut();
				$(a.box).fadeOut();
			}else if(a.action=='change'){
				$(a.box).fadeOut();
				$(a.new).fadeIn();
			}
			return typeof fn=='function'?fn():this;
		},
		jsp:function(a){// json data for parse
			return JSON.parse(a);
		},
		jstr:function(a){// json data for striginfy
			return JSON.stringify(a);
		},
		form:function(a){// a = data object		b = formdata object (optional)
			let b=arguments[1]||new FormData();
			for(let key in a)if(a.hasOwnProperty(key))b.append(key,a[key]);
			return b;
		},
		formFiles:function(a){// a = files		b = formdata object (optional)
			let b=arguments[1]||new FormData();
			for(var i = 0;i < a.length; ++i)b.append('file['+i+']',a[i]);
			return b;
		},
		validate:function(a){// a = object data serialized
			let b=(a.obj[0]||a.obj).querySelectorAll('input, select, textarea'), c=0;
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
		imgPreview:function(a,b,c){//a = '.files_input'		b = '.files_name'		c = '.files_preview'
			let f=a.files, g=f.length, h=$(b), j=$(c);
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
		bgImage:function(a,b){
			if(b.type.match(/image.*/)){
				var reader=new FileReader();
				reader.onload=function(e){
					d.querySelector(a).setAttribute('style', 'background-image: url(' + e.target.result + ');');
				};
				reader.readAsDataURL(b);
			}
		},
		copy:function(a){
			if(!a||a=='undefined')return false;
			let b, c=d.createElement('input');
			c.value=a;
			d.body.append(c);
			c.select();
			if(d.execCommand('copy')){
				b=true;
			}else{
				b=false;
			}
			w.getSelection().removeAllRanges();
			c.remove();
			return b;
		},
		sleep:function(a){
			let fn=arguments[1]||null;
			setTimeout(fn,a);
			return this;
		},
		countPlus:function(a){
			let b={}, c=0;
			b.step=parseFloat(a.dataset.count/100);
			b.fn=setInterval(function(){
				if(c+b.step>=parseFloat(a.dataset.count)){
					a.innerHTML=a.dataset.count;
					clearInterval(b.fn);
				}
				c+=b.step;
				a.innerHTML=parseInt(c);
			},a.dataset.duration/100);
		},
		window:function(a){
			let b=w.open('/','Please white...','fullscreen=0,toolbar=0,status=0,menubar=0,resizable=0,width='+a.width+',height='+a.height);
			b.blur();
			b.location.href=a.url;
			b.moveTo(a.centerWidth,a.centerHeight);
			b.focus();
			if(typeof a.fn=='function')a.fn();
			return b;
		},
		translite:function(a){
			let b=arguments[1]||null, c=b?{}:{'а':'a','б':'b','в':'v','г':'g','д':'d','е':'e','ж':'g','з':'z','и':'i','й':'y','к':'k','л':'l','м':'m','н':'n','о':'o','п':'p','р':'r','с':'s','т':'t','у':'u','ф':'f','ы':'i','э':'e','А':'A','Б':'B','В':'V','Г':'G','Д':'D','Е':'E','Ж':'G','З':'Z','И':'I','Й':'Y','К':'K','Л':'L','М':'M','Н':'N','О':'O','П':'P','Р':'R','С':'S','Т':'T','У':'U','Ф':'F','Ы':'I','Э':'E','ё':'yo','х':'h','ц':'ts','ч':'ch','ш':'sh','щ':'shch','ъ':'','ь':'','ю':'yu','я':'ya','Ё':'YO','Х':'H','Ц':'TS','Ч':'CH','Ш':'SH','Щ':'SHCH','Ъ':'','Ь':'','Ю':'YU','Я':'YA',' ':'_','  ':'_','.':'_','..':'_',',':'_','?':'_','??':'_','!':'_','!!':'_','-':'_','--':'_','=':'_','+':'_','__':'_'};
			return a.replace(/[\s\S]/g,function(x){
				if(c.hasOwnProperty(x))return c[x];
				return x;
			});
		}
	};
	w.fn=new Set();
})(window,document);
