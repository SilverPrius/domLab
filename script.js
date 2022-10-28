// Menu data structure
// var menuLinks = [
//     {text: 'about', href: '/about'},
//     {text: 'catalog', href: '/catalog'},
//     {text: 'orders', href: '/orders'},
//     {text: 'account', href: '/account'},
//   ];

var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];

let mainEl = document.querySelector("main")
mainEl.style.backgroundColor = "var(--main-bg)"
mainEl.innerHTML = "<h1>SEI Rocks!</h1>"
mainEl.classList.add("flex-ctr");

let topMenuEl = document.querySelector("#top-menu")
// let topMenuEl = document.getElementById("top-menu")

topMenuEl.style.height = "100%"
topMenuEl.style.backgroundColor = "var(--top-menu-bg)"
topMenuEl.classList.add("flex-around");
// topMenuEl.style.setProperty("background-color", "var(--top-menu-bg")

// for (const link of menuLinks) {
//     const newAnchor = document.createElement("a")
//     newAnchor.href = link.href
//     newAnchor.textContent = link.text
//     topMenuEl.appendChild(newAnchor)
//  }

for ( let i = 0; i < menuLinks.length; i++){
    let a = document.createElement("a")
    a.attributes.href = menuLinks[i].href
    a.innerText = menuLinks[i].text
    topMenuEl.appendChild(a)
}


 let subMenuEl = document.querySelector("#sub-menu")
 subMenuEl.style.height = "100%"
 subMenuEl.style.backgroundColor = "var(--sub-menu-bg)"
 subMenuEl.classList.add("flex-around")
 subMenuEl.style.position = "absolute"
 subMenuEl.style.top = "0"

//  let topMenuLinks = document.querySelectorAll("#top-menu a")
//  let showingSubMenu = false

 let topMenuLinks = document.getElementById('top-menu').querySelectorAll('a')

 





 









