const columns = document.querySelectorAll('.column_cards');
const cards = document.querySelectorAll('.card');

let draggedCard;

const dragstart = (event)=>{
    draggedCard = event.target;
    event.dataTransfer.effectAllowed = 'move';
}
const dragover = (event)=>{
   event.preventDefault();
}
cards.forEach((card)=>{
    //* dragstart aciona sempre que o event drag estiver iniciado
        card.addEventListener('dragstart', dragstart);
    });
columns.forEach((column)=>{
    //* dragover aciona sempre que um elemento estiver sobre ele
    column.addEventListener('dragover', dragover);
})