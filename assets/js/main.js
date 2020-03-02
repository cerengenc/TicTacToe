$(function(){
    var area = $('#area');
    var cond=['y','y','y','y','y','y','y','y','y'];
    var chek=0;
    area.find('div').click(function(){
        var t = $(this),
            i = t.index(),
            u = t.parent().attr('data-user'); 
    
            if(cond[i] == 'y'){
            t.addClass(u);
            if(u=='me'){
                u = 'you';
                cond[i]='x';
            }else{
                u = 'me';
                cond[i]='o';
            }
           } else {
               alert("Bu alana işaret koyamazsınız.");
           }

            //kazanma durumları
            
            for(var j=0;j<3;j++){ //sütun
                if(cond[j]==cond[j+3] && cond[j+3]==cond[j+6] && cond[j] != 'y' && cond[j+3] != 'y' && cond[j+6] != 'y'){
                    alert('win');
                }
            }

            for(var j=0;j<7;j++){ //satır
                if(cond[j]==cond[j+1] && cond[j+1]==cond[j+2] && cond[j] != 'y' && cond[j+1] != 'y' && cond[j+2] != 'y'){
                    alert('win');
                }
                j=j+2;
            }

            if(cond[0]==cond[4] && cond[4]==cond[8] && cond[0] != 'y'  && cond[4] != 'y' && cond[8] != 'y'){ //köşegen1
                alert('win');;
            }

            if(cond[2]==cond[4] && cond[4]==cond[6] && cond[2] != 'y'  && cond[4] != 'y' && cond[6] != 'y'){ //köşegen2
                alert('win');;
            }

            chek=0;
            for(var j=0;j<9;j++){
                if(cond[j]=='y'){chek++;}
            }

            if(chek==0){alert('Game Over');}

            

            area.attr('data-user',u);
        } 
    )

    $('#reset').click(function(){
        var div=$('#area div.me');
        div.attr('content','');
    })
})