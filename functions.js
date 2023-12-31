function botaoHamburguer() {
    const toggleButton = document.querySelector('.navbar-toggler');
    const menuTopo = document.getElementById('menu-topo');
    const botaoMenuImagem = document.getElementById('botao-menu-imagem');

    toggleButton.classList.toggle('collapsed');
    menuTopo.classList.toggle('active');

    const isActive = menuTopo.classList.contains('active');
    
    botaoMenuImagem.src = isActive ? 'images/desktop/menu-burger/fechar.svg' : 'images/desktop/menu-burger/menu.svg';
}