class Script{
    constructor(){
        this.nav();
    }

    nav(){
        const underbar = document.querySelector('.underbar');
        const nav_bar = document.querySelector('.nav_bar');

        const navItems = document.querySelectorAll('.nav_item');
        navItems.forEach(e => {
            e.addEventListener('mouseenter',(item)=>{
                underbar.style.left = `${item.target.offsetLeft}px`;
                underbar.style.width = `${item.target.clientWidth}px`;
            });
            e.addEventListener('mouseleave', ()=>{
                underbar.style.left = '0';
                underbar.style.width = '0px';
            });
        });
    }
}

window.onload = ()=>{
    const script = new Script();
}