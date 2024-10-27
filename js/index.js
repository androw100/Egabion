// تغيير خلفية شريط التنقل عند التمرير لأسفل
window.onscroll = function () {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };
  
// دالة لبدء العد
function startCounter() {
    const counters = document.querySelectorAll('.counter'); // اختيار كل العناصر التي تحتوي على فئة 'counter'
    
    counters.forEach(counter => {
        counter.innerText = '0'; // البداية من صفر
        
        const updateCounter = () => {
            const target = +counter.getAttribute('data-target'); // الرقم الهدف من الـ data-target
            const current = +counter.innerText; // الرقم الحالي
            
            const increment = target / 200; // السرعة التي سيزداد بها العدد

            if (current < target) {
                counter.innerText = `${Math.ceil(current + increment)}`; // زيادة الرقم الحالي بشكل تدريجي
                setTimeout(updateCounter, 10); // إعادة استدعاء الدالة كل 10 مللي ثانية
            } else {
                counter.innerText = target; // التأكد من أن الرقم النهائي هو الهدف
            }
        };
        
        updateCounter(); // استدعاء الدالة لبدء العد
    });
}

// بدء العد عند تحميل الصفحة
window.onload = startCounter;


document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.navbar-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const offset = document.querySelector('.main-nav').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});


