document.querySelectorAll('.dropdown > a').forEach(menu => {
    menu.addEventListener('click', function (e) {
        e.preventDefault();
        
        // Verifica se o submenu já está ativo
        let submenu = this.nextElementSibling;
        let isActive = submenu.classList.contains('active');
        
        // Fecha todos os submenus
        document.querySelectorAll('.dropdown > .active').forEach(submenu => {
            submenu.classList.remove('active');
        });
        
        // Alterna a visibilidade do submenu clicado
        if (!isActive) {
            submenu.classList.toggle('active');
        }
    });
});
