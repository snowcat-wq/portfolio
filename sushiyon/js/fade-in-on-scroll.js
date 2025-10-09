document.addEventListener("DOMContentLoaded", () => {
  const targets = document.querySelectorAll('.fade-in-on-scroll');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // 一度見えたら監視解除してもいい場合
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1  // 10%見えたら発火
  });

  targets.forEach(target => observer.observe(target));
});



  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // 一度だけ発動させたいなら以下で監視解除
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1 // 少しでも見えたら反応（10%）
  });

  document.querySelectorAll('.fade-in-up').forEach(el => {
    observer.observe(el);
  });