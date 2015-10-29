brewApp.directive('breweryHeader', function () {
    return {
        restrict: 'E',
        transclude: true,
        scope: {
            
        },
        replace: true,
        link: function (scope, element, attrs) {
            console.log('header');
            
            scope.nav = {
                links: [
                    {
                        title: 'עמוד הבית',
                        url: '',
                    },
                    {
                        title: 'חומרים',
                        url: '',

                    },
                    {
                        title: 'ציוד',
                        url: '',
                    },
                    {
                        title: 'מתכוני הבית',
                        url: '',
                    },
                    {
                        title: 'זיקוק',
                        url: '',
                    },
                    {
                        title: 'מאגרי מידע',
                        url: '',
                    },
                    {
                        title: 'מאמרים',
                        url: '',
                    },
                ],
                social: {
                    facebook: {
                        url: ''
                    },
                    youtube: {
                        url: ''
                    }
                }
            }

            scope.toggleMenu = function (){
                $('.mobile_menu').click(function () {
                    var elem = $('.header_left_mobile');
                    var left = elem.css('left');
                    left == '-160px' ? elem.css('left', '0px') : elem.css('left', '-160px');
                });
            }

        },
        templateUrl: 'templates/directives/header.html',
    };
}).directive('breweryHeaderCarousel', function () {
    return {
        restrict: 'E',
        transclude: true,
        scope: {
            
        },
        replace: true,
        link: function (scope, element, attrs) {
            console.log('carousel');
            
            scope.slidesObj = {
                slides: [
                    {
                        imgUrl: 'http://www.socwall.com/images/wallpapers/39883-4288x2848.jpg',
                        text: '1st image',
                    },
                    {
                        imgUrl: 'http://files.vividscreen.info/soft/00cf4a2651fa6ddf74a87410267957a3/Beer-Brew-1920x1200.jpg',
                        text: '1st image',
                    },
                    {
                        imgUrl: 'http://images2.alphacoders.com/219/219972.jpg',
                        text: '1st image',
                    },
                    {
                        imgUrl: 'http://www.hdwallpaperscool.com/wp-content/uploads/2014/05/obsidian-stout-beer-wallpaper.jpg',
                        text: '1st image',
                    },
                    {
                        imgUrl: 'http://hdw.datawallpaper.com/entertainment/beer-labels-wide-wallpaper-502465.jpg',
                        text: '2st image',
                    },
                    {
                        imgUrl: 'http://4.bp.blogspot.com/-G5yYfsAUkT4/UiVoN3qE0DI/AAAAAAAAWSg/wDYKP0mkJy8/s1600/Three-different-mugs-same-delicious-beer-HD-wallpaper_1920x1080.jpg',
                        text: '3st image',
                    }
                ],
                noWrapSlides: false,
                interval: 4000,
            };


        },
        templateUrl: 'templates/directives/header_carousel.html',
    };
}).directive('mainPageFooter', function () {
    return {
        restrict: 'E',
        transclude: true,
        scope: {
            
        },
        replace: true,
        link: function (scope, element, attrs) {
            
            console.log('mainPageFooter');
            
            scope.defaultHour = '8:00-16:30';
            
            scope.first = {
                location : {
                    breweryName: 'המרכז לבירה ביתית',
                    address: 'המצודה 18, אזור',
                },
                contact : {
                    phone: '03-5044345',
                    email: 'my@email.com',
                    facebook: '',
                    youtube: '',
                }
            };
            
            scope.openningHours = [
                {
                    day: 'ראשון',
                    time: scope.defaultHour,
                },
                {
                    day: 'שני',
                    time: scope.defaultHour,
                },
                {
                    day: 'שלישי',
                    time: scope.defaultHour,
                },
                {
                    day: 'שלישי',
                    time: scope.defaultHour,
                },
                {
                    day: 'רביעי',
                    time: scope.defaultHour,
                },
                {
                    day: 'חמישי',
                    time: scope.defaultHour,
                },
                {
                    day: 'שישי',
                    time: 'בתיאום מראש',
                },
                {
                    day: 'שבת',
                    time: 'סגור',
                },
            ];
            
            scope.images = [
                {
                    thumb: 'http://public.media.smithsonianmag.com/legacy_blog/All-natural-ingredients-PicoBrew-beer1.jpg', 
                    img: 'http://public.media.smithsonianmag.com/legacy_blog/All-natural-ingredients-PicoBrew-beer1.jpg'
                },
                {
                    thumb: 'http://m5.paperblog.com/i/52/525945/chillsner-cool-beer-to-the-last-sip-L-oZq0zE.jpeg', 
                    img: 'http://m5.paperblog.com/i/52/525945/chillsner-cool-beer-to-the-last-sip-L-oZq0zE.jpeg'
                },
                {
                    thumb: 'http://wtf.thebizzare.com/images/cold-beer-1.jpg', 
                    img: 'http://wtf.thebizzare.com/images/cold-beer-1.jpg'
                },
                {
                    thumb: 'http://www.eightdegrees.ie/wp-content/uploads/2011/05/the_brewery_process.jpg', 
                    img: 'http://www.eightdegrees.ie/wp-content/uploads/2011/05/the_brewery_process.jpg'
                },
                {
                    thumb: 'http://cdn.blessthisstuff.com/imagens/stuff/brooklyn-brew-beer-making-kit-2.jpg', 
                    img: 'http://cdn.blessthisstuff.com/imagens/stuff/brooklyn-brew-beer-making-kit-2.jpg'
                },
                {
                    thumb: 'http://www.365twincitiesmn.com/wp-content/uploads/2011/05/home-brew.jpg', 
                    img: 'http://www.365twincitiesmn.com/wp-content/uploads/2011/05/home-brew.jpg'
                },
                {
                    thumb: 'http://www.ecocitizenaustralia.com.au/wp-content/uploads/2013/01/Home-brew-main.jpg', 
                    img: 'http://www.ecocitizenaustralia.com.au/wp-content/uploads/2013/01/Home-brew-main.jpg'
                },
                {
                    thumb: 'http://www.goodrichard.com/wp-content/2008_home_brew_april.jpg', 
                    img: 'http://www.goodrichard.com/wp-content/2008_home_brew_april.jpg'
                },
            ];          
            
            
        },
        templateUrl: 'templates/directives/main_page_footer.html',
    };
});