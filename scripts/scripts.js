function mobileMenu() {
	const navBar = document.getElementById('nav-items');
	const navHome = document.getElementById('nav-home');
	const navAbout = document.getElementById('nav-about');
	const navBlog = document.getElementById('nav-blog');
	const navContact = document.getElementById('nav-contact');

	if (navBar.className === 'nav-items') {
		navBar.className = 'mobile-nav-items';
		navHome.className = 'mobile-nav-item';
		navAbout.className = 'mobile-nav-item';
		navBlog.className = 'mobile-nav-item';
		navContact.className = 'mobile-nav-item';
	} else {
		navBar.className = 'nav-items';
		navHome.classList.remove('mobile-nav-item');
		navAbout.classList.remove('mobile-nav-item');
		navBlog.classList.remove('mobile-nav-item');
		navContact.classList.remove('mobile-nav-item');
	}
}
