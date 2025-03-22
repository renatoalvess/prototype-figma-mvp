document.querySelectorAll('.dropdown > a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Evita o comportamento padrão

        const menu = document.querySelector('.menu-lateral'); // Menu lateral
        const submenu = this.nextElementSibling; // Submenu associado ao menu principal clicado

        if (submenu) {
            const isActive = submenu.classList.contains('active');

            // Fecha todos os submenus
            document.querySelectorAll('.submenu').forEach(sub => {
                sub.classList.remove('active');
            });

            // Ativa o submenu clicado
            if (!isActive) {
                submenu.classList.add('active');
            }

            // Colapsa o menu lateral ao clicar em "Setores, Cargos, etc"
            menu.classList.add('collapsed');
        }
    });
});

// Função para alternar o estado do menu
function toggleMenu() {
    const menu = document.querySelector('.menu-lateral');
    menu.classList.toggle('collapsed');
}
