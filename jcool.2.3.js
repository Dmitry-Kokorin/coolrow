(function(w,d){
	'use strict';
	if(!d.querySelectorAll){
		alert('Ваш браузер устарел, пожалуйста, обновите браузер чтобы продолжить работу с сайтом');
		return false;
	}
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
		return true;
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
		return true;
	}
	class App {
		constructor(a){
			this.element=a||null;
			this.obj=typeof this.element=='string'?d.querySelectorAll(this.element):(this.element||null);
			//return this.obj;
		}
		addClass(a){
			if(typeof this.element=='string'||this.element=='object'){
				for(let i=0;i<this.obj.length;++i)this.obj[i].classList.add(a);
			}else{
				this.obj.classList.add(a);
			}
			return this;
		}
		append(a){
			if(typeof this.element=='string'){
				for(let i=0;i<this.obj.length;++i)this.obj[i].innerHTML=this.obj[i].innerHTML+a;
			}else{
				this.obj.innerHTML=this.obj.innerHTML+a;
			}
			return this;
		}
		attr(a){
			let b=arguments[1]||null;
			fn.log(this.obj, this.element, a, b);
			if(typeof this.element=='string'||this.element=='object'){
				if(b){
					for(let i=0;i<this.obj.length;++i)this.obj[i].setAttribute(a,b);
					return this;
				}
				return this.obj[0].getAttribute(a);
			}else{
				return b?(this.obj.setAttribute(a,b),this):this.obj.getAttribute(a);
			}
		}
		blur(){
			if(typeof this.element=='string'||this.element=='object'){
				this.obj[0].blur();
			}else{
				this.obj.blur();
			}
			return this;
		}
		changeClass(a,b){
			if(typeof this.element=='string'||this.element=='object'){
				for(let i=0;i<this.obj.length;++i){
					this.obj[i].classList.remove(a);
					this.obj[i].classList.add(b);
				}
			}else{
				this.obj.classList.remove(a);
				this.obj.classList.add(b);
			}
			return this;
		}
		checked(){
			return (typeof this.element=='string'||this.element=='object')?(this.obj[0].checked||null):(this.obj.checked||null);
		}
		child(){
			let a=[],n;
			n=((typeof this.element=='string'||this.element=='object')?this.obj[0]:this.obj).children;
			for(let i=0;i<n.length;++i)a.push(n[i]);
			return a;
		}
		css(){
			let a=arguments[0]||{};
			if(typeof this.element=='string'||this.element=='object'){
				for(let i=0;i<this.obj.length;++i)for(let b in a)(this.obj[i].getAttribute('style')||null)?this.obj[i].setAttribute('style', this.obj[i].getAttribute('style')+b+':'+a[b]+';'):this.obj[i].setAttribute('style', b+':'+a[b]+';');
			}else{
				for(let b in a)(this.obj.getAttribute('style')||null)?this.obj.setAttribute('style', this.obj.getAttribute('style')+b+':'+a[b]+';'):this.obj.setAttribute('style', b+':'+a[b]+';');
			}
			return this;
		}
		data(a){
			return typeof this.element=='string'?this.obj[0].getAttribute('data-'+a):this.obj.getAttribute('data-'+a);
		}
		each(a){
			for(let i=0;i<this.obj.length;++i)a.apply(this.obj[i], arguments);
			return this;
		}
		empty(){
			if(typeof this.element=='string'){
				for(let i=0;i<this.obj.length;++i)this.obj[i].innerHTML='';
			}else{
				this.obj.innerHTML='';
			}
			return this;
		}
		fadeIn(){
			if(typeof this.element=='string'||this.element=='object'){
				for(let i=0;i<this.obj.length;++i)getFadeIn(this.obj[i]);
			}else{
				getFadeIn(this.obj);
			}
			return this;
		}
		fadeOut(){
			if(typeof this.element=='string'||this.element=='object'){
				for(let i=0;i<this.obj.length;++i)getFadeOut(this.obj[i]);
			}else{
				getFadeOut(this.obj);
			}
			return this;
		}
		files(){
			let a=[];
			if(typeof this.element=='string'||this.element=='object'){
				for(let i=0;i<this.obj.length;++i)for(let j=0;j<this.obj[i].files.length;++j)a.push(this.obj[i].files[j]);
				return a;
			}else{
				for(let i=0;i<this.obj.files;++i)a.push(this.obj.files[i]);
				return a;
			}
		}
		focus(){
			if(typeof this.element=='string'||this.element=='object'){
				this.obj[0].focus();
			}else{
				this.obj.focus();
			}
			return this;
		}
		hasClass(a){
			return (typeof this.element=='string'||this.element=='object')?this.obj[0].classList.contains(a):this.obj.classList.contains(a);
		}
		height(){
			return this.element==w?w.innerHeight:(this.element==d?d.innerHeight:((typeof this.element=='string'||this.element=='object')?this.obj[0].scrollHeight:this.obj.scrollHeight));
		}
		hide(){
			if(typeof this.element=='string'||this.element=='object'){
				for(let i=0;i<this.obj.length;++i)this.obj[i].style.display = 'none';
			}else{
				this.obj.style.display = 'none';
			}
			return this;
		}
		html(){
			let a=arguments[0]||null;
			if(typeof this.element=='string'||this.element=='object'){
				if(a){
					for(let i=0;i<this.obj.length;++i)this.obj[i].innerHTML=a;
					return this;
				}else{
					return this.obj[0].innerHTML;
				}
			}else{
				if(a){
					this.obj.innerHTML=a;
					return this;
				}else{
					return this.obj.innerHTML;
				}
			}
		}
		next(){
			let a;
			if(typeof this.element=='string'||this.element=='object'){
				for(let i=0;i<this.obj.length;++i)a.push(this.obj[0].nextElementSibling);
				this.obj = a;
			}else{
				this.obj = this.obj.nextElementSibling;
			}
			return this;
		}
		off(a){
			let b=arguments[1]||null, c=arguments[2]||null;
			if(c&&typeof c=='function'){
				d.removeEventListener(a,b||function(){});
			}else if(typeof this.element=='string'){
				let i=0,self=this,tmr=setInterval(function(){
					if(i<self.obj.length){
						self.obj[i].removeEventListener(a,b||function(){});
						++i;
					}else{
						clearInterval(tmr);
					}
				},20);
			}else{
				this.element.removeEventListener(a,b||function(){});
			}
		}
		offset(){
			return (typeof this.element=='string'||this.element=='object')?this.obj[0].getBoundingClientRect():this.obj.getBoundingClientRect();
		}
		on(a,b,c){
			c=c||null;
			if(c&&typeof c=='function'){
				d.addEventListener(a,function(e){
					let elem=new App(b).obj;
					for(let i=0;i<elem.length;++i)if(e.target===elem[i])return c.apply(e.target,arguments);
				},false);
			}else if(typeof this.element=='string'){
				let i=0,self=this,tmr=setInterval(function(){
					if(i<self.obj.length){
						self.obj[i].addEventListener(a,function(e){
							return b.apply(e.target,arguments);
						},false);
						++i;
					}else{
						clearInterval(tmr);
					}
				},20);
			}else{
				this.element.addEventListener(a,function(e){
					return b.apply(e.target,arguments);
				},false);
			}
		}
		outerHtml(){
			let a=arguments[0]||null;
			if(typeof this.element=='string'||this.element=='object'){
				if(a){
					for(let i=0;i<this.obj.length;++i)this.obj[i].outerHTML=a;
					return this;
				}else{
					return this.obj[0].outerHTML;
				}
			}else{
				if(a){
					this.obj.outerHTML=a;
					return this;
				}else{
					return this.obj.outerHTML;
				}
			}
		}
		parent(){
			let a=[];
			if(typeof this.element=='string'||this.element=='object'){
				for(let i=0;i<this.obj.length;++i)a.push(this.obj[i].parentNode);
				this.obj = a;
			}else{
				this.obj = this.obj.parentNode;
			}
			return this;
		}
		prepend(a){
			if(typeof this.element=='string'){
				for(let i=0;i<this.obj.length;++i)this.obj[i].innerHTML=a+this.obj[i].innerHTML;
			}else{
				this.obj.innerHTML=a+this.obj.innerHTML;
			}
			return this;
		}
		prev(){
			let a;
			if(typeof this.element=='string'||this.element=='object'){
				for(let i=0;i<this.obj.length;++i)a.push(this.obj[0].previousElementSibling);
				this.obj = a;
			}else{
				this.obj = this.obj.previousElementSibling;
			}
			return this;
		}
		ready(){
			let fn=arguments[0]||null;
			if(this.element!=d||!fn)return;
			d.addEventListener('DOMContentLoaded',fn,false);
			return true;
		}
		removeAttr(a){
			if(typeof this.element=='string'||this.element=='object'){
				for(let i=0;i<this.obj.length;++i)this.obj[i].removeAttribute(a);
			}else{
				this.obj.removeAttribute(a);
			}
			return this;
		}
		removeClass(a){
			if(typeof this.element=='string'||this.element=='object'){
				for(let i=0;i<this.obj.length;++i)this.obj[i].classList.remove(a);
			}else{
				this.obj.classList.remove(a);
			}
			return this;
		}
		serialized(){
			let a=(typeof this.element=='string'||this.element=='object')?this.obj[0].querySelectorAll('input, select, textarea'):this.obj.querySelectorAll('input, select, textarea'), b={};
			for(let i=0;i<a.length;++i){
				if(a[i].type==='file'){
					for(let j=0;j<a[i].files.length;++j)b[a[i].getAttribute('name')+j]=a[i].files[j];
				}else{
					b[a[i].getAttribute('name')]=a[i].value;
				}
			}
			return b;
		}
		show(){
			let a=arguments[0]||'block';
			if(typeof this.element=='string'||this.element=='object'){
				for(let i=0;i<this.obj.length;++i)this.obj[i].style.display = a;
			}else{
				this.obj.style.display = a;
			}
			return this;
		}
		top(){
			return this.element==w?w.scrollY:null;
		}
		trigger(a){
			if(!a||a=='undefined')return;
			if(this.element==w){
				w.dispatchEvent(new Event(a));
			}else if(this.element==d){
				d.dispatchEvent(new Event(a));
			}else if(typeof this.element=='string'||this.element=='object'){
				for(let i=0;i<this.obj.length;++i)this.obj[0].dispatchEvent(new Event(a));
			}else{
				this.obj.dispatchEvent(new Event(a));
			}
			return this;
		}
		val(){
			let a=arguments[0]||null;
			if(typeof this.element=='string'||this.element=='object'){
				if(a){
					for(let i=0;i<this.obj.length;++i)this.obj[i].value=a;
					return true;
				}else{
					return this.obj[0].value;
				}
			}else{
				return a?(this.obj.value=a,true):this.obj.value;
				/* if(a){
					this.obj.value=a;
					return true;
				}else{
					return this.obj.value;
				} */
			}
		}
	}
	class Set {
		constructor(){
			
		}
		ajax(a,fn){
			let c=new XMLHttpRequest();
			c.open(a.type||'POST',a.url,true);
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
			return typeof fn=='function'?fn():this;
		}
		bgImage(a,b){
			if(b.type.match(/image.*/)){
				var reader=new FileReader();
				reader.onload=function(e){
					d.querySelector(a).setAttribute('style', 'background-image: url(' + e.target.result + ');');
				};
				reader.readAsDataURL(b);
			}
		}
		copy(a){
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
		}
		countPlus(a){
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
		}
		form(a,b){
			b=b||new FormData();
			for(let key in a)if(a.hasOwnProperty(key))b.append(key,a[key]);
			return b;
		}
		formFiles(a,b){
			b=b||new FormData();
			for(var i = 0;i < a.length; ++i)b.append('file['+i+']',a[i]);
			return b;
		}
		imgPreview(a,b,c){//a = '.files_input'		b = '.files_name_box'		c = '.files_preview_box'
			let f=a.files, g=f.length, h=d.querySelector(b), j=d.querySelector(c);
			if(g){
				j.empty();
				[].forEach.call(f,function(file){
					if(file.type.match(/image.*/)){
						var reader=new FileReader();
						reader.onload=function(e){
							var img=d.createElement('img');
							img.src=e.target.result;
							//j.obj[0].appendChild(img);
							j.appendChild(img);
						};
						reader.readAsDataURL(file);
					}
				});
				h.innerHTML(g==1?f[0].name+' ('+(f[0].size/1024).toFixed(2)+' Кб)':'Добавлено '+g+' файлов');
				/* if(g===1){
					h.innerHTML(f[0].name+' ('+(f[0].size/1024).toFixed(2)+' Кб)');
				}else{
					h.innerHTML('Добавлено '+g+' файлов');
				} */
			}else{
				h.innerHTML('Выберите файл');
				j.innerHTML('Предпросмотр');
			}
			return this;
		}
		json(a){
			return JSON.parse(a);
		}
		jstr(a){
			return JSON.stringify(a);
		}
		log(){
			for(let i=0;i<arguments.length;++i)if(arguments[i]||null)console.info(arguments[i]);
			return this;
		}
		modal(a,fn){// a = object (action - open|close, over - element, box - modal element, close - time)
			let self=this, d;
			d=a.over&&a.over!='undefined'?(a.over==true?'.overlay':a.over):null;
			if(a.action=='open'){
				if(d)$(d).fadeIn();
				$(a.box).fadeIn();
				if(a.close){
					setTimeout(function(){
						self.modal({
							action:'close',
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
		}
		sleep(a,fn){
			setTimeout(fn||function(){},a);
			return this;
		}
		translite(a,b){
			let c=typeof b!='undefined'?{}:{'а':'a','б':'b','в':'v','г':'g','д':'d','е':'e','ж':'g','з':'z','и':'i','й':'y','к':'k','л':'l','м':'m','н':'n','о':'o','п':'p','р':'r','с':'s','т':'t','у':'u','ф':'f','ы':'i','э':'e','А':'A','Б':'B','В':'V','Г':'G','Д':'D','Е':'E','Ж':'G','З':'Z','И':'I','Й':'Y','К':'K','Л':'L','М':'M','Н':'N','О':'O','П':'P','Р':'R','С':'S','Т':'T','У':'U','Ф':'F','Ы':'I','Э':'E','ё':'yo','х':'h','ц':'ts','ч':'ch','ш':'sh','щ':'shch','ъ':'','ь':'','ю':'yu','я':'ya','Ё':'YO','Х':'H','Ц':'TS','Ч':'CH','Ш':'SH','Щ':'SHCH','Ъ':'','Ь':'','Ю':'YU','Я':'YA',' ':'_','  ':'_','.':'_','..':'_',',':'_','?':'_','??':'_','!':'_','!!':'_','-':'_','--':'_','=':'_','+':'_','__':'_'};
			return a.replace(/[\s\S]/g,function(x){
				if(c.hasOwnProperty(x))return c[x];
				return x;
			});
		}
		validate(a){// a = object data serialized
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
						if(c>0){
							d.querySelector('.modal_info').innerHTML(error||'Проверьте правильность заполнения полей');
							this.modal({action:'open',over:'none',box:'.modal_event',close:3});
							return false;
						}
					}
				}
			}
			return true;
		}
		window(a){
			let b=w.open('/','Please white...','fullscreen=0,toolbar=0,status=0,menubar=0,resizable=0,width='+a.width+',height='+a.height);
			b.blur();
			b.location.href=a.url;
			b.moveTo(a.centerWidth,a.centerHeight);
			b.focus();
			if(typeof a.fn=='function')a.fn();
			return b;
		}
	}
	class Slider {
		constructor(a){
			this.element=a||null;
			this.box=typeof this.element=='string'?d.querySelectorAll(this.element):(this.element||null);
		}
		init(a){
			if(!this.box.length)return;
			fn.log('Cool Slider init');
			let b={
				delay:2000,
				dots: true, // крошки
				dots_list: [], // массив крошек
				prefix:'',// префикс аттрибутов ID элементов, для подсветки-визуализации процесса
				autoplay:false,// autoplay
				currentSlide:0,// текущий слайд
				interval:null,// interval id for autoplay 
				before:null,// before listing function
				callback:null// callback listing function
			},
			self=this;
			for(let c in b)this[c]=a[c]||b[c];
			this.slides=d.querySelector(this.element).children;
			this.length=this.slides.length;
			if(this.dots==true){
				let br=d.createElement('ul');
				br.className='slider_dots';
				for(let i=0;i<this.length;++i){
					let brs=d.createElement('li');
					brs.setAttribute('data-slide',i);
					brs.classList='slider_dot'+(i==0?' active':'');
					br.append(brs);
				}
				d.querySelector(this.element).parentNode.append(br);
				this.dots_list=d.querySelector('.slider_dots').children;
			}
			if(this.autoplay==true){
				this.interval=w.setInterval(function(){
					self.next();
				},self.delay);
			}
			return this;
		}
		prev(){
			fn.log('Cool Slider prev');
			if(!this.box.length)return;
			this.go(this.currentSlide-1);
		}
		next(){
			fn.log('Cool Slider next');
			if(!this.box.length)return;
			this.go(this.currentSlide+1);
		}
		go(n){
			fn.log('Cool Slider go');
			if(!this.box.length)return;
			if(typeof this.before=='function')this.before();
			this.slides[this.currentSlide].classList.remove('active');
			if(this.dots)this.dots_list[this.currentSlide].classList.remove('active');
			this.currentSlide=(n+this.length)%this.length;
			this.slides[this.currentSlide].classList.add('active');
			if(this.dots)this.dots_list[this.currentSlide].classList.add('active');
			return typeof this.callback=='function'?this.callback():this;
		}
	};
	w.$=(a)=>new App(a);
	w.fn=new Set();
	w.sl=(a)=>new Slider(a);
})(window,document);
