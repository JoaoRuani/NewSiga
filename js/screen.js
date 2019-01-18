navbar = document.querySelector('header');
width = window.innerWidth;
tables = document.querySelectorAll('.table');


if(width < 768){
    navbar.classList.add('fixed-top');
    hideTable(tables);
}
else{
    showTable(tables);
}

window.addEventListener('resize', function(){
    width = this.innerWidth;
    if(width < 768){
        navbar.classList.add('fixed-top');
        hideTable(tables)
    }
    else{
        navbar.classList.remove('fixed-top');
        showTable(tables)
    }
});

function showTable(tables){
    tables.forEach(function(table){
        table.classList.add('show');
    })
}
function hideTable(tables){
    tables.forEach(function(table){
        table.classList.remove('show');
    })
}
 /*-----------------------------------------------*/
 

