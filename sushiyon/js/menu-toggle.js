
  const menuToggle = document.getElementById("menu-toggle");
  const sidebar = document.getElementById("sidebar");

  menuToggle.addEventListener("click", () => {
    sidebar.classList.toggle("active");
    menuToggle.classList.toggle("active");
  });

  // メニュー内のリンククリック時にメニューを閉じる
  const sidebarLinks = document.querySelectorAll(".sidebar nav a, .side-reservation, .logo a");
  sidebarLinks.forEach(link => {
    link.addEventListener("click", () => {
      sidebar.classList.remove("active");
      menuToggle.classList.remove("active");
    });
  });



