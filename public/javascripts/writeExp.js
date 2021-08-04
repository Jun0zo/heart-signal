$('.slider').on('input', function(event){ 
    //console.log(event.target.value) // event.target -> 자기 자신,  this = event.target
    change_val(event.target)
});

// init_val()

function change_val(target) {  // input is event.target
    var $target = $(target);
    var target_val = target.value;
    var target_var = $target.attr('var');
    switch (target_var){
        case 'A': {
            A = target_val;
            console.log('A' ,A)
            var $x_exp =$(".x-exp");
            var hidden=$x_exp.children('.hid-var');
            hidden.text("x=" + A + "sin^3(t)");
            console.log('l : ' , "x=" + A + "sin^3(t)")
            var $x_math = $x_exp.find('.MathJax'); // 자식요소 (= 삭제할 요소)
            $x_math.remove();
            text2Latex(".x-exp");
            break;
        }
        case 'B':{
            B=target_val;
            console.log('B' ,B)
            var $y_exp=$('.y-exp-1');
            var hidden=$y_exp.children('.hid-var');
            hidden.text("y="+B+"cos(t)");
            var $y_math = $y_exp.find('.MathJax'); // 자식요소 (= 삭제할 요소)
            $y_math.remove();
            text2Latex(".y-exp-1");
            break;
        }
        case 'C': {
            C=target_val;
            console.log('C' ,C)
            var $z_exp=$('.y-exp-2');
            var hidden=$z_exp.children('.hid-var');
            hidden.text(C+"cos(2t)-2cos(3t)-cos(4t)");
            var $z_math = $z_exp.find('.MathJax'); // 자식요소 (= 삭제할 요소)
            $z_math.remove();
            text2Latex(".y-exp-2");
            break;
        }
    }
}

function init_val() {
    change_val(document.getElementById('slider_a'))
    change_val(document.getElementById('slider_b'))
    change_val(document.getElementById('slider_c'))
}