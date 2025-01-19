function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    const menuIcon = document.getElementById("menu-icon");
    const body = document.body;

    if (sidebar.style.width === "250px") {
        sidebar.style.width = "0";
        body.classList.remove('sidebar-open');
        menuIcon.style.display = "block";
    } else {
        sidebar.style.width = "250px";
        body.classList.add('sidebar-open');
        menuIcon.style.display = "none";
    }
}

function goHome() {
    window.location.href = "/home";
}

function toggleSubmenu(submenuId, arrowId) {
    const submenu = document.getElementById(submenuId);
    const arrow = document.getElementById(arrowId);
    const isVisible = submenu.getAttribute("data-visible") === "true";

    if (isVisible) {
        submenu.setAttribute("data-visible", "false");
        arrow.classList.remove('fa-chevron-right');
        arrow.classList.add('fa-chevron-down');
    } else {
        submenu.setAttribute("data-visible", "true");
        arrow.classList.remove('fa-chevron-down');
        arrow.classList.add('fa-chevron-right');
    }
}
