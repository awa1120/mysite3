console.log('全体開始スクリプト');

//jQuery
$(function() {
//    $('#kushikado_button').click(function(){
//        $('.kushikado_menu').show();
//        $('.ninoni_menu').hide();
//        $('.eirian_menu').hide();
//        console.log('串角クリック')
//    });

//    $('#ninoni_button').click(function(){
//        $('.kushikado_menu').hide();
//        $('.ninoni_menu').show();
//        $('.eirian_menu').hide();
//        console.log('弐ノ弐クリック')
//    });

//    $('#eirian_button').click(function(){
//        $('.kushikado_menu').hide();
//        $('.ninoni_menu').hide();
//        $('.eirian_menu').show();
//        console.log('弐ノ弐クリック')
//    });

//    $('#eirian_menu').click(function(){
//        $('.kushikado_menu').show();
//        console.log('エイリアンクリック')
//    });

var $slider = '.my-tab-menu';

$($slider).hide();

    $('#kushikado_button').hover(
        function(){
            $($slider).fadeIn();
            //$('.tab-menu').css('display', 'block');
            $('#menu01_img').attr('src','images/01_kushikado/kusimori.jpeg');
            $('#menu01_menu_name').text('串盛り（20本）');
            $('#menu01_menu_price').text('2,000円');
            console.log('串角ホバー１');
            $('#menu02_img').attr('src','images/01_kushikado/chahan.jpeg');
            $('#menu02_menu_name').text('チャーハン');
            $('#menu02_menu_price').text('500円');
            console.log('串角ホバー２');
            $('#menu03_img').attr('src','images/01_kushikado/suchika.jpg');
            $('#menu03_menu_name').text('スーチカー炙り');
            $('#menu03_menu_price').text('550円');
            console.log('串角ホバー３');
            //$($slider).show();
        }
        //function(){
        //}
    );

    $('#ninoni_button').hover(
        function(){
            $($slider).fadeIn();
            $('#menu01_img').attr('src','images/02_ninoni/mabo.jpg');
            $('#menu01_menu_name').text('麻婆豆腐');
            $('#menu01_menu_price').text('500円');
            console.log('串角ホバー１');
            $('#menu02_img').attr('src','images/02_ninoni/gyoza.jpeg');
            $('#menu02_menu_name').text('焼き餃子');
            $('#menu02_menu_price').text('250円');
            console.log('串角ホバー２');
            $('#menu03_img').attr('src','images/02_ninoni/banban.jpeg');
            $('#menu03_menu_name').text('棒棒鶏');
            $('#menu03_menu_price').text('500円');
            console.log('串角ホバー３');
        },
        function(){
        }
    );
    
    
    $('#eirian_button').hover(
        function(){
            $($slider).fadeIn();
            $('#menu01_img').attr('src','images/03_eirian/hatsu.jpg');
            $('#menu01_menu_name').text('ハツ（5本）');
            $('#menu01_menu_price').text('500円');
            console.log('串角ホバー１');
            $('#menu02_img').attr('src','images/03_eirian/negima.jpg');
            $('#menu02_menu_name').text('ネギま（5本）');
            $('#menu02_menu_price').text('500円');
            console.log('串角ホバー２');
            $('#menu03_img').attr('src','images/03_eirian/bonjiri.jpg');
            $('#menu03_menu_name').text('ぼんじり（5本）');
            $('#menu03_menu_price').text('500円');
            console.log('串角ホバー３');
        },
        function(){
        }
    );

});

console.log('全体終了スクリプト');


