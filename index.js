function getEmails(str) {
    return str.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
}

function getPhoneNumbers(str) {
    var re = /contact|whatsapp|call/gi;
    let matches = str.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
    /**
     * get container element 
     * get regex \d of innertext of this element 
     * push to Array 
     * return it 
     * */
}

var done = [];
function searchEmails() {
	setTimeout(function(){
		console.log('searching emails...');
		const container = overlayHelper();
		
		let __autoScroll = container.querySelector('#nyEmailScraperAutoScroll');
		if (!__autoScroll || typeof __autoScroll == 'undefined' || __autoScroll.length == 0) {
			__autoScroll = document.createElement('input');
			__autoScroll.setAttribute('id', 'nyEmailScraperAutoScroll');
			__autoScroll.setAttribute('type', 'checkbox');
			__autoScroll.setAttribute('title', 'Check this to enable auto scrolling');
			
			__autoScroll.style.position = 'relative';
			__autoScroll.style.top = '0';
			__autoScroll.style.left = '0';
			__autoScroll.style.opacity = '1';
			__autoScroll.style.pointerEvents = 'auto';
			__autoScroll.addEventListener('change', function ( e ) {
				if (autoScroll()) 
					window.scrollTo(0,document.body.scrollHeight);
			});
			
			container.prepend( __autoScroll );
		}
		
		let matches = getEmails( document.querySelector('body').innerHTML );
		if (matches && matches.length > 0) {
			let emails = matches.filter((value, index, self) => { 
    			return self.indexOf(value) === index;
			});
			
			let ul = container.querySelector('ul');
			if (!ul || typeof ul == 'undefined' || ul.length == 0) {
				ul = document.createElement('ul');

				container.prepend( ul );
			}
			
			for (let i in emails) {
				let email = emails[i];
				
				if (done.indexOf( email ) === -1) {
					let li = document.createElement('li');
					
					li.style.borderBottom = 'dashed 1px #ddd';
					li.style.padding = '10px';
					li.style.fontSize = '12px';
					li.style.listStyle = 'none';
					
					li.innerText = email;
					
					ul.appendChild( li );
					saveContact( email );
					done.push( email );
				}
			}
		}
		if (autoScroll()) 
			window.scrollTo(0,document.body.scrollHeight);
	}, 8000);
}

function saveContact(email) {
	//do anything you want here
}

function autoScroll() {
	let checkbox = document.querySelector('#nyEmailScraperAutoScroll');
	let __autoScroll = false;
	
	if (typeof checkbox != 'undefined' || checkbox || checkbox.length > 0)
		__autoScroll = checkbox.checked;
		
	return __autoScroll;
}

function overlayHelper() {
	let container = document.querySelector('#necoyoadWrapper');
	let div;
	
	if (!container || typeof container == 'undefined' || container.length == 0) {
		container = document.createElement('div');
		container.setAttribute('id', 'necoyoadWrapper');
		
		container.style.position = 'fixed';
		container.style.top = '100px';
		container.style.left = '100px';
		container.style.minWidth = '280px';
		container.style.height = 'auto';
		container.style.minHeight = '100px';
		container.style.maxHeight = (window.innerHeight - 200) +'px';
		container.style.overflow = 'auto';
		container.style.zIndex = '9999999';
		container.style.background = '#fff';
		container.style.boxShadow = '#ccc 0 0 8px';
		container.style.cursor = 'move';
		
		var styles = document.createElement('style');
		styles.innerHTML =
		'#necoyoadWrapper *:not("a") { cusror:default !important; }'
		
		+'#necoyoadShareLinks { padding:5%;margin:auto;width:90%; font-size:10px; }'
		+'#necoyoadShareLinks a { padding:5px;margin:auto;float:left; font-size:10px; }'
		+'#necoyoadShareLinks:after, #necoyoadShareLinks:before { content:" ";display:block;width:1px;height:1px;clear:both;float:none; }'
		
		+'::-webkit-scrollbar {'
		    +'width: 6px;'
		+'}'
		 
		/* Track */
		+'::-webkit-scrollbar-track {'
			+'background: rgba(0,0,0,0.2);'
		+'}'
		 
		/* Handle */
		+'::-webkit-scrollbar-thumb {'
			+'background: rgba(0,0,0,0.8);'
		+'}'
		
		+'::-webkit-scrollbar-thumb:window-inactive {'
			+'background: rgba(0,0,0,0.2);'
		+'}';

		document.querySelector('head').appendChild( styles );
		document.querySelector('body').appendChild( container );
		/*
        container.onmousedown = myDrag;
        document.onmousemove = myMove;
        document.onmouseup = myDrop;
        */
		
		
		let headerLink = document.createElement('a');
		let headerImg = document.createElement('img');
		
		let footerLink = document.createElement('a');
		let footerImg = document.createElement('img');
		
		div = document.createElement('div');
		div.setAttribute('id', 'necoyoadWrapperContent');
		div.style.width = '90%';
		div.style.padding = '5%';
		div.style.cursor = 'default';
		div.style.margin = 'auto';
		div.style.position = 'relative';
		
		p = document.createElement('p');
		p.setAttribute('id','necoyoadShareLinks');
		
		shareOnFacebook = document.createElement('a');
		shareOnFacebook.setAttribute('href','https://www.necoyoad.com/api/facebook&redirect=promote');
		shareOnFacebook.setAttribute('target','__blank');
		shareOnFacebook.innerHTML = 'Facebook';
		p.append( shareOnFacebook );
		
		shareOnGoogle = document.createElement('a');
		shareOnGoogle.setAttribute('href','https://www.necoyoad.com/api/google&redirect=invite_friends');
		shareOnGoogle.setAttribute('target','__blank');
		shareOnGoogle.innerHTML = 'Google';
		p.append( shareOnGoogle );
		
		shareOnOutlook = document.createElement('a');
		shareOnOutlook.setAttribute('href','https://www.necoyoad.com/api/live&redirect=invite_friends');
		shareOnOutlook.setAttribute('target','__blank');
		shareOnOutlook.innerHTML = 'Outlook';
		p.append( shareOnOutlook );
		
		shareOnLinkedIn = document.createElement('a');
		shareOnLinkedIn.setAttribute('href','https://www.necoyoad.com/api/google&redirect=promote');
		shareOnLinkedIn.setAttribute('target','__blank');
		shareOnLinkedIn.innerHTML = 'LinkedIn';
		p.append( shareOnLinkedIn );
		
		headerLink.setAttribute('href','https://www.necoyoad.com/web/?ref=chromeExtension');
		headerLink.setAttribute('target','__blank');
		footerLink.setAttribute('href','https://www.necoyoad.com/web/?ref=chromeExtension');
		footerLink.setAttribute('target','__blank');
		
		headerImg.setAttribute('src','https://www.necoyoad.com/web/index.php?r=common/home/getimage&image=data/footprints/developed-by-necoyoad-header.png&t=1');
		headerImg.setAttribute('title','Developed By Necoyoad');
		footerImg.setAttribute('src','https://www.necoyoad.com/web/index.php?r=common/home/getimage&image=data/footprints/developed-by-necoyoad.png&t=1');
		footerImg.setAttribute('title','Developed By Necoyoad');
		
		footerLink.style.marginTop = '10px';
		
		headerLink.append( headerImg );
		footerLink.append( footerImg );
		
		container.append( headerLink );
		container.append( p );
		container.append( div );
		container.append( footerLink );
	} else {
		div = document.querySelector('#necoyoadWrapperContent');
	}
	
	return div;
}

/*
// adapted from https://codepen.io/depthdev/pen/epKDk
*/
function getClosest(elem, selector) {

    // Element.matches() polyfill
    if (!Element.prototype.matches) {
        Element.prototype.matches =
            Element.prototype.matchesSelector ||
            Element.prototype.mozMatchesSelector ||
            Element.prototype.msMatchesSelector ||
            Element.prototype.oMatchesSelector ||
            Element.prototype.webkitMatchesSelector ||
            function(s) {
                var matches = (this.document || this.ownerDocument).querySelectorAll(s),
                    i = matches.length;
                while (--i >= 0 && matches.item(i) !== this) {}
                return i > -1;
            };
    }

    // Get closest match
    for (; elem && elem !== document; elem = elem.parentNode) {
        if (elem.matches(selector)) return elem;
    }

    return null;

}
var obj, prev_x, prev_y, x, y;
function myDrag(e) {
    obj = e.target;

    prev_x = x - obj.offsetLeft;
    prev_y = y - obj.offsetTop;
}

function myMove(e) {
    if (e.pageX) {
        x = e.pageX; // X coordinate based on page, not viewport.
        y = e.pageY; // Y coordinate based on page, not viewport.
    }
    //  else if (e.clientX) {
    //    x=clientX; // X coordinate based on viewport.
    //    y=clientY; // Y coordinate based on viewport.
    //  }

    if (obj) {
        obj.style.left = (x - prev_x) + 'px';
        obj.style.top = (y - prev_y) + 'px';
    }
}

function myDrop(e) {
    obj = false;
}

var opent = true;

function slideToggle() {
    let ul = document.getElementById('necoyoadWrapper');

    if (opent) {
        opent = false;
        ul.querySelectorAll('li:nth-child(n+2)').forEach((v, k) => {
            v.style.display = 'none';
        });
    } else {
        opent = true;
        ul.querySelectorAll('li').forEach((v, k) => {
            v.style.display = 'block';
        });
    }
}


// store url on load
var currentPage = location.href;
setInterval(function() {
    if (currentPage != location.href) {
        currentPage = location.href;
		searchEmails();
    }
}, 500);

// Setup isScrolling variable
var isScrolling;
window.addEventListener('scroll', function ( event ) {
	window.clearTimeout( isScrolling );
	isScrolling = setTimeout(function() {
		searchEmails();
	}, 66);
}, false);

searchEmails();


/**
 * turn on/off seeker 
 * turn on/off auto scroll 
 * add contact filter 
 * show contact counter
 * add actions buttons to send an email or a whatsapp message 
 * get offsetX and offsetY of contact matched and add GoTo button to scroll the window until the contact, stop the crawler when click in this button 
 * 
 * */
