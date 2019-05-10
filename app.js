document.addEventListener('DOMContentLoaded', function () {
    //projects

    let card = document.querySelectorAll('.projects_pic');

    for (let el of card) {
        el.addEventListener('mouseover', () => {
            el.style.boxShadow = "-1px 9px 40px -1px black";
            el.style.marginTop = "2px";
            el.style.transition = "margin-top 0.3s ease";
        })

        el.addEventListener('mouseout', () => {
            el.style.boxShadow = "none";
            el.style.marginTop = "10px";
            el.style.transition = "margin-top 0.3s ease";
        })
    }

    //scroll

    function scrollIt(element) {
        window.scrollTo({
            'behavior': 'smooth',
            'left': 0,
            'top': element.offsetTop
        });
    }

    const scroll = document.querySelectorAll('.scroll');
    const scroll_section = document.querySelectorAll(".scroll_section");

        scroll[0].addEventListener('click', function () {
            scrollIt(scroll_section[0])
        })
        scroll[1].addEventListener('click', function () {
            scrollIt(scroll_section[1])
        })

        scroll[2].addEventListener('click', function () {
            scrollIt(scroll_section[2])
        })

        scroll[3].addEventListener('click', function () {
            scrollIt(scroll_section[3])
        })

        //scroll_dropdown

        function scrollIt(element) {
            window.scrollTo({
                'behavior': 'smooth',
                'left': 0,
                'top': element.offsetTop
            });
        }
        const scroll_dropdown = document.querySelectorAll('.scroll_dropdown');
        const scroll_section_main = document.querySelectorAll(".scroll_section");
        
        scroll_dropdown[0].addEventListener('click', function(){
            scrollIt(scroll_section_main[0]);
        });
        scroll_dropdown[1].addEventListener('click', function(){
            scrollIt(scroll_section_main[1]);
        });
        scroll_dropdown[2].addEventListener('click', function(){
            scrollIt(scroll_section_main[2]);
        });
        scroll_dropdown[3].addEventListener('click', function(){
            scrollIt(scroll_section_main[3]);
        });


       //scroll-up button
            (function() {
            function trackScroll() {
                var scrolled = window.pageYOffset;//przesunięcia
                var coords = document.documentElement.clientHeight;//wysokość strony (758)
                
            
                if (scrolled > coords) {
                    btn.classList.add('back_to_top-show');
                }
                if (scrolled < coords) {
                    btn.classList.remove('back_to_top-show');
                }
              }
            
              function backToTop() {
                if (window.pageYOffset > 0) {
                  window.scrollBy(0, -80);
                  setTimeout(backToTop, 0);
                }
              }
            
              var btn = document.querySelector('.back_to_top');
            
              window.addEventListener('scroll', trackScroll);
              btn.addEventListener('click', backToTop);
            })();
            

    //scroll title

    const title = document.querySelectorAll('.title');
    // console.log(title);
            
    window.document.addEventListener('scroll', function(){
        title.forEach((e) => {
            e.style.opacity = "1";
            e.style.transition = "opacity 2s ease" 
        });
        
    })
});
