class Script{
    constructor(){
        this.nav();
        /* 임시 로그인 
        let login = false;
        
        if(login){
            login = false;
            this.logout();
        }
        else{
            login = true;
            this.login();
        }
        */
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

    login(){
        const logoutEle = document.querySelectorAll('.logoutEle');
        const loginEle = document.querySelectorAll('.loginEle');
        
        loginEle.forEach(e => {
            e.classList.remove('unactive');
        });

        logoutEle.forEach(e => {
            e.classList.add('unactive');
        });
    }
    
    logout(){
        const logoutEle = document.querySelectorAll('.logoutEle');
        const loginEle = document.querySelectorAll('.loginEle');
        
        loginEle.forEach(e => {
            e.classList.add('unactive');
        });

        logoutEle.forEach(e => {
            e.classList.remove('unactive');
        });
    }
}

module.exports = {Script}