var nestedTabSelect = (tabsElement, currentElement) => {
   const tabs = tabsElement ?? 'ul.tabs';

   const currentClass = currentElement ?? 'active';
   console.log(currentClass);

   var test =  document.querySelectorAll(tabs)
   console.log(test);
   document.querySelectorAll(tabs).forEach(function (tabContainer) {
     let activeLink, activeContent;
     const links = Array.from(tabContainer.querySelectorAll("a"));
     console.log(links);

     


     activeLink = links.find(function (link) {
         return link.getAttribute("href") === location.hash;
       }) || links[0];
       console.log(links[0]);
     console.log(activeLink);
     activeLink.classList.add(currentClass);
   
 
     activeContent = document.querySelector(activeLink.getAttribute("href"));
      console.log(activeContent);
     activeContent.classList.add(currentClass);
 
     links.forEach(function (link) {
       if (link !== activeLink) {
         const content = document.querySelector(link.getAttribute("href"));
         // console.log(content);
         content.classList.remove(currentClass);
       }
     });
 
     tabContainer.addEventListener("click", function (e) {
       if (e.target.tagName === "A") {

         activeLink.classList.remove(currentClass);
         activeContent.classList.remove(currentClass);
 

         activeLink = e.target;
         console.log(activeLink);
         
         activeContent = document.querySelector(activeLink.getAttribute("href"));
         console.log(activeContent);
         activeLink.classList.add(currentClass);
         activeContent.classList.add(currentClass);
 
         e.preventDefault();
       }
     });
   });
 };
 
 nestedTabSelect('ul.tabs', 'active');

 
