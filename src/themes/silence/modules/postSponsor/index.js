import './index.less'
import { donationConfig } from '@config/plugins'

const config = donationConfig()

const sponsor = {
    enable: config.enable,
    text: '',
    wechat: config.qrcodes.length >= 1 && config.qrcodes[0],
    alipay: config.qrcodes.length >= 2 && config.qrcodes[1],
    paypal: config.qrcodes.length >= 3 && config.qrcodes[2],
}

function buildPostSponsor() {
    const config = sponsor

    if (!config.enable) {
        return false
    }

    $('#blog_post_info').prepend(`
                <div class="esa-sponsor">
                    <div class="title">${config.text}</div>
                    <ul class="box">
                        <li class="paypal"><svg t="1599893643429" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1307" width="25" height="25"><path d="M941.021887 369.059735c7.422144 34.295426 5.703717 73.709573-2.303424 116.524012-37.147285 188.515157-162.263434 253.632592-322.771878 253.632592h-25.154854c-19.414575 0-35.428857 14.295855-38.82915 33.710429l-2.303424 10.859-31.407006 197.655729-1.133431 8.555575c-3.985289 19.414575-19.999572 33.71043-39.414146 33.71043H334.30728c-16.014282 0-26.288285-13.125861-23.984861-29.140144 10.274003-63.984004 19.999572-127.968008 30.273575-191.952012s20.548006-127.383011 30.858571-191.367015c1.718428-13.710858 10.859-21.133002 24.569857-21.133003 22.85143 0 45.70286-0.584997 74.843004 0 41.132574 0.584997 88.553862-1.718428 134.805156-11.99243 61.68058-13.710858 117.694005-38.82915 163.945299-82.265148 41.717571-38.82915 69.687721-86.835434 88.553862-140.545435a515.893884 515.893884 0 0 0 19.999571-75.976435c1.133431-6.837148 2.851858-5.703717 6.837148-2.851858 31.407005 23.436427 49.139715 54.843432 55.976863 92.539151z m-98.242867-161.093441c0 46.836291-10.859 91.40572-26.288286 134.805156-29.688578 86.250437-85.702003 147.96758-172.537437 179.959582-46.287857 16.562716-94.842575 23.436427-143.98229 23.98486-34.295426 0.584997-68.55429 0-102.813154 0-37.147285 0-60.547149 18.281144-67.420859 54.843432-8.007141 43.435998-39.414146 245.662013-48.554718 302.772307-0.584997 3.985289-2.303424 5.703717-6.837148 5.703717H105.829543a27.494841 27.494841 0 0 1-27.421716-31.407005L210.946121 38.280716A45.995358 45.995358 0 0 1 256.063984 0h341.638019c24.569858 0 81.131717 10.859 119.412433 25.703288 81.131717 31.407005 125.664584 95.391009 125.664584 182.226444z" fill="var(--text-color)" p-id="1308"></path></svg></li>
                        <li class="alipay"><svg t="1599893614075" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1025" width="25" height="25"><path d="M828.571429 624.342857c-44.228571-14.742857-103.657143-37.371429-169.714286-61.257143 39.771429-68.914286 71.428571-147.428571 92.228571-232.685714H533.142857v-78.4h266.971429v-43.771429H533.142857V77.714286h-109.028571c-19.085714 0-19.085714 18.857143-19.085715 18.857143v111.771428H135.085714v43.771429h270.057143v78.4H182.171429v43.771428h432.457142a762.491429 762.491429 0 0 1-62.285714 151.885715c-140.342857-46.171429-290.057143-83.657143-384.114286-60.571429-60.114286 14.857143-98.857143 41.257143-121.714285 68.914286-104.457143 126.857143-29.6 319.542857 191.085714 319.542857C368 853.942857 493.714286 781.257143 591.085714 661.714286 736.342857 731.428571 1024 851.085714 1024 851.085714V680.457143s-36.114286-2.857143-195.428571-56.114286zM217.028571 780.114286c-172 0-222.857143-135.2-137.828571-209.257143 28.342857-25.028571 80.228571-37.257143 107.885714-40 102.171429-10.057143 196.8 28.8 308.457143 83.2-78.628571 102.285714-178.628571 166.057143-278.514286 166.057143z" fill="var(--text-color)" p-id="1026"></path></svg></li>
                        <li class="wechat"><svg t="1599893658389" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1451" width="25" height="25"><path d="M1004.416 543.914667c-25.984-58.88-75.008-105.642667-131.925333-134.442667-100.437333-50.858667-225.322667-50.56-325.504 1.28-69.589333 35.712-127.701333 99.712-144.170667 177.578667-13.568 57.344-1.408 119.082667 29.013333 169.002666 45.269333 75.178667 127.104 123.178667 212.096 138.581334 61.568 12.501333 125.269333 5.077333 185.088-12.16 35.925333 13.909333 67.925333 36.437333 102.741334 53.162666a2238.762667 2238.762667 0 0 0-28.842667-89.685333c39.082667-27.733333 74.496-62.336 95.744-105.770667 31.744-60.373333 33.664-135.296 5.76-197.546666z m-423.424-403.882667c-106.453333-59.904-239.018667-68.906667-353.536-27.52-75.264 27.093333-143.36 77.44-185.429333 145.92-38.186667 61.866667-52.48 139.008-34.090667 209.792 18.474667 78.506667 73.002667 144.341333 139.178667 188.288-12.8 36.266667-24.96 72.490667-36.48 109.013333 41.6-21.76 83.2-44.501333 124.842666-66.602666 49.92 16 103.04 23.850667 156.16 22.101333a262.784 262.784 0 0 1-10.88-125.909333c9.6-58.496 41.6-112 85.077334-151.637334 73.642667-68.906667 177.962667-97.962667 277.162666-90.922666-18.602667-91.093333-82.602667-168.064-163.157333-212.48h1.152z m73.941333 426.197333c-8.917333 27.818667-49.322667 36.181333-68.906666 15.018667-21.589333-19.584-13.184-60.501333 15.146666-69.248 31.317333-13.226667 67.498667 22.912 53.76 54.229333z m204.586667 3.925334c-10.922667 25.002667-48.682667 30.848-67.242667 11.52-8.917333-8.149333-11.52-20.437333-14.677333-31.146667 4.437333-19.541333 17.92-39.808 39.68-40.746667 30.08-4.181333 57.002667 32.981333 41.6 60.416h0.64zM554.24 294.784c0.341333 41.002667-54.4 66.602667-85.12 38.784-31.872-22.826667-22.826667-78.378667 14.592-89.856 33.493333-13.44 73.088 14.677333 70.442667 50.56l0.085333 0.512z m-258.517333 10.410667c-7.338667 35.626667-55.082667 52.821333-83.029334 28.928-32.384-22.826667-23.296-79.402667 14.72-90.922667 37.248-14.336 79.573333 23.466667 68.309334 61.994667z" fill="var(--text-color)" p-id="1452"></path></svg><i class="fa fa-fwechat"></i></li>
                    </ul>
                    <div class="qrshow">
                        <img src="">
                    </div>
                </div>`)

    var $sponsor = $('.esa-sponsor')

    $sponsor.find('.box li').hover(
        function() {
            const type = $(this).attr('class')
            var qrcode = null
            switch (type) {
                case 'paypal':
                    qrcode = config.paypal
                    break
                case 'alipay':
                    qrcode = config.alipay
                    break
                case 'wechat':
                    qrcode = config.wechat
                    break
            }
            if (qrcode) {
                $sponsor
                    .find('.qrshow')
                    .html(`<img src="${qrcode}">`)
                    .show()
            }
        },
        function() {
            $sponsor.find('.qrshow').hide()
        },
    )
}

export default buildPostSponsor
