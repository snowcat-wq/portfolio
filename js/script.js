document.addEventListener('DOMContentLoaded', () => {

  // ---------------------------
  // ハンバーガーとメニュー
  // ---------------------------
  const hamburger = document.getElementById('hamburger');
  const menu = document.getElementById('menu');
  const menuLinks = document.querySelectorAll('.menu a'); // 追加

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');

    if (menu.classList.contains('active')) {
      // メニュー開いたら順番にフェードイン
      menuLinks.forEach((link, index) => {
        setTimeout(() => {
          link.classList.add('show');
        }, index * 100); // 0.1秒ずつ遅延
      });
    } else {
      // メニュー閉じたらリセット
      menuLinks.forEach(link => link.classList.remove('show'));
    }
  });

  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      menu.classList.remove('active');
      menuLinks.forEach(l => l.classList.remove('show'));
    });
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      hamburger.classList.remove('active');
      menu.classList.remove('active');
      menuLinks.forEach(l => l.classList.remove('show'));
    }
  });


  // ---------------------------
  // 文字ランダムアニメーション
  // ---------------------------
  const text = "SNOW CAT\nDESIGN\nPORTFOLIO";
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const title = document.querySelector('.hero-text h1');

  let currentIndex = 0;
  const duration = 600; 
  const delayPerChar = duration / text.length;

  function animateChar(index) {
    let scrambleCount = 0;
    const scrambleMax = 4;

    const scrambleInterval = setInterval(() => {
      let displayText = "";

      for (let i = 0; i < text.length; i++) {
        if (text[i] === "\n") {
          displayText += "\n";
          continue;
        }

        if (i < index) {
          displayText += text[i];
        } else if (i === index) {
          displayText += letters[Math.floor(Math.random() * letters.length)];
        } else {
          displayText += " ";
        }
      }

      title.innerText = displayText;
      scrambleCount++;

      if (scrambleCount >= scrambleMax) {
        clearInterval(scrambleInterval);
        currentIndex++;
        if (currentIndex < text.length) {
          setTimeout(() => animateChar(currentIndex), delayPerChar);
        } else {
          title.innerText = text;
        }
      }
    }, delayPerChar / scrambleMax);
  }

  animateChar(0);


  // ---------------------------
  // スクロールで【順番】フェードイン
  // ---------------------------
  const items = document.querySelectorAll('.contents-item, .fade-item'); // 両方まとめる

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // 左→右順の遅延を計算
        const rect = entry.target.getBoundingClientRect();
        const delay = (rect.left / window.innerWidth) * 0.3; // 0.3秒程度の最大遅延
        entry.target.style.transitionDelay = `${delay}s`;

        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  items.forEach(item => observer.observe(item));


  // ---------------------------
  // スクロールでフェードイン（ボタン）
  // ---------------------------
  const btnTargets = document.querySelectorAll('.contents-btn, .contents-btn-w, .contents-btn-white, .contents-btn-wframe');

  const btnObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        btnObserver.unobserve(entry.target); // 一度だけ
      }
    });
  }, { threshold: 0.1 });

  btnTargets.forEach(el => btnObserver.observe(el));


  // ---------------------------
  // overlayアニメーション（複数対応）
  // ---------------------------
  // .text-other
  const textOthers = document.querySelectorAll('.text-other');
  textOthers.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add('show');
    }, 100);
  });
  // .works_other_img
  const worksImgs = document.querySelectorAll('.works_other_img');
  worksImgs.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add('show');
    }, 100);
  });

	
  // ---------------------------
  // ページトップボタン
  // ---------------------------
  const pageTopBtn = document.getElementById("pagetop");
  const scrollThreshold = 150;

  if (pageTopBtn) {
    // ボタンの表示/非表示切替
    function togglePageTopButton() {
      if (window.scrollY > scrollThreshold) {
        pageTopBtn.classList.add("visible");
      } else {
        pageTopBtn.classList.remove("visible");
      }
    }
    // スクロールイベント（最適化）
    let isScrolling;
    window.addEventListener("scroll", function () {
      window.clearTimeout(isScrolling);
      isScrolling = setTimeout(function () {
        togglePageTopButton();
      }, 66);
    });
    // クリックでトップへスクロール
    pageTopBtn.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    // 初期表示設定
    togglePageTopButton();
  }

  
  // ---------------------------
  // 仕切り線フェードイン（divider）
  // ---------------------------
  const dividers = document.querySelectorAll('.divider');

  const dividerObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        dividerObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  dividers.forEach(el => dividerObserver.observe(el));

  
  

// ---------------------------
// タブ切り替え（キャプチャー画像）
// ---------------------------
const tabs = document.querySelectorAll('.tab');           // タブ（PC / SP）
const contents = document.querySelectorAll('.tab-content');   // ← 修正！（.content）

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    // すべてのタブから active を外す
    tabs.forEach(t => t.classList.remove('active'));
    // クリックしたタブに active をつける
    tab.classList.add('active');

    // すべてのコンテンツを非表示
    contents.forEach(c => c.classList.remove('show'));
    // index に対応するコンテンツだけ表示
    contents[index].classList.add('show');
  });
});

// 初期表示（最初のタブをアクティブにする）
if (tabs.length > 0 && contents.length > 0) {
  tabs[0].classList.add('active');
  contents[0].classList.add('show');
}


  
  
	
});
