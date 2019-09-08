const rangeStart = 1;
const rangeEnd = 10;

var arr = [];
while(arr.length < rangeEnd){
    var num = Math.floor(Math.random() * rangeEnd + 1);
    if(arr.indexOf(num) === -1){
        var numberBlocks = Array.from(document.querySelectorAll('.number'));
        
        var nextBlock = numberBlocks.find(blk => blk.innerText == "");
        if (typeof nextBlock === undefined){
            break;
        }

        nextBlock.innerText = num;

        arr.push(num);
    }
}

// init Isotope
var $grid = $('.grid').isotope({
    itemSelector: '.element-item',
    layoutMode: 'fitRows',
    getSortData: {
      number: '.number parseInt'
    }
});

// bind sort button click
$('#sorts').on( 'click', 'button', function() {
    var sortByValue = $(this).attr('data-sort-by');
    $grid.isotope({ sortBy: sortByValue });
});