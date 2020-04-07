// 代码块复制按钮
// 引入即可

import { pageName } from '@/assets/utils/tools'
import './index.css'

function markdownCode() {
    const sel = window.getSelection()
    sel.removeAllRanges()
    const range = document.createRange()
    range.selectNode($(this).siblings('code.hljs')[0])
    sel.addRange(range)
    const txt = sel.anchorNode.innerText
    const area = $(
        '<textarea name="" id="board" cols="30" rows="10"></textarea>',
    )
    area.val(txt)
    area[0].select()
    document.execCommand('copy')
    $(this).text('copied')
}

function copy() {
    if (pageName() !== 'post') return
    const pres = $('.cnblogs-markdown').find('pre')
    if (!pres.length) return

    $.each(pres, (index, pre) => {
        $(pre).prepend(`<div class="copy-btns">copy</div>`)
    })

    $('pre').on('click', '.copy-btns', function() {
        markdownCode()
    })
}

export default copy
