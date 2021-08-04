const mj = function (tex) {
    return MathJax.tex2svg(tex, {em: 16, ex: 6, display: false});
}
let parenthesis = 'keep'
let implicit = 'hide'

function text2Latex(exp_str){
    let x_exp_str = $(exp_str).children('.hid-var').text();
    let node = math.parse(x_exp_str)
    const latex = node ? node.toTex({parenthesis: parenthesis, implicit: implicit}) : ''
    MathJax.typesetClear();
    let res = mj(latex)
    /* ----------------- html 'x-exp' tag에 첫번째 자식 노드로 추가 -------------------- */    
    $(exp_str).eq(0).append(res)
    //return res;
}
