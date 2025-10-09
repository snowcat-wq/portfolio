document.addEventListener("DOMContentLoaded", () => {
  const targets = document.querySelectorAll('.fade-in-on-scroll');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // ���ٸ�������ƻ������Ƥ⤤�����
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1  // 10%��������ȯ��
  });

  targets.forEach(target => observer.observe(target));
});



  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // ���٤���ȯư���������ʤ�ʲ��Ǵƻ���
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1 // �����Ǥ⸫������ȿ����10%��
  });

  document.querySelectorAll('.fade-in-up').forEach(el => {
    observer.observe(el);
  });