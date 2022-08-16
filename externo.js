var audio = new Audio('audio/audio1.mp3');
var audio2= new Audio('audio/audio2.mp3');
var audio3= new Audio('audio/audio3.mp3');
var player="brazil";
var numJog=0;



    function exibebotao(){
        document.getElementById("playa").style.display="block";
        document.getElementById("res").style.display="block";
    }

    function ocultabotao(){
        document.getElementById("playa").style.display="none";
        document.getElementById("res").style.display="none";
    }

    function playagain(){
        document.getElementById('c1').src = "./img/transp.png";
        document.getElementById('c2').src = "./img/transp.png";
        document.getElementById('c3').src = "./img/transp.png";
        document.getElementById('c4').src = "./img/transp.png";
        document.getElementById('c5').src = "./img/transp.png";
        document.getElementById('c6').src = "./img/transp.png";
        document.getElementById('c7').src = "./img/transp.png";
        document.getElementById('c8').src = "./img/transp.png";
        document.getElementById('c9').src = "./img/transp.png";
        numJog=0;
        const song = "audio1.mp3";
        ocultabotao();
    }


    function verifyimg(id){
        var file = document.getElementById(id).src;
        return file.substring(file.length - 10, file.length);
        
    }

    function jogodopc(){
        if(verifyimg('c5')=="transp.png"){
            return 'c5';
        }else{
            return 'c' + Math.floor((Math.random()*9)+1);
        }
    }

    function checkjogo(id){
        var pc = document.getElementById('cpu').checked;
        var opc = verifyimg(id);
    
        if (opc=="transp.png"){
            document.getElementById(id).src = "./img/" + player + ".png";
            if(player == "brazil"){
                player = "german";
                if(win()){
                    alert("Fim de jogo");
                    audio.play();
                    exibebotao()
                    return false;
                }else
                if(numJog>=9){
                    alert("Fim de jogo, Deu Velha");
                    audio3.play();
                    exibebotao();
                    return false;
                }
            }else{
                if(win()){
                    alert("Fim de jogo");
                    exibebotao()
                    audio2.play();
                    return false;
                }else
                if(numJog>=9){
                    alert("Fim de jogo, Deu Velha");
                    exibebotao()
                    return false;
                }
                player = "brazil";
            }
        }
        if(pc && player=="german"){
            checkjogo(jogodopc());}
        }

    function win(){
        numJog++;
        if((verifyimg('c1')==verifyimg('c2'))&&(verifyimg('c1')==verifyimg('c3'))&&(verifyimg('c1')!="transp.png")){
            return true;
        }else 
        if((verifyimg('c4')==verifyimg('c5'))&&(verifyimg('c4')==verifyimg('c6'))&&(verifyimg('c4')!="transp.png")){
            return true;
        }else 
        if((verifyimg('c7')==verifyimg('c8'))&&(verifyimg('c7')==verifyimg('c9'))&&(verifyimg('c7')!="transp.png")){
            return true;
        }else 
        if((verifyimg('c1')==verifyimg('c4'))&&(verifyimg('c1')==verifyimg('c7'))&&(verifyimg('c1')!="transp.png")){
            return true;
        }else 
        if((verifyimg('c2')==verifyimg('c5'))&&(verifyimg('c2')==verifyimg('c8'))&&(verifyimg('c2')!="transp.png")){
            return true;
        }else 
        if((verifyimg('c3')==verifyimg('c6'))&&(verifyimg('c3')==verifyimg('c9'))&&(verifyimg('c3')!="transp.png")){
            return true;
        }else 
        if((verifyimg('c1')==verifyimg('c5'))&&(verifyimg('c1')==verifyimg('c9'))&&(verifyimg('c1')!="transp.png")){
            return true;
        }else 
        if((verifyimg('c3')==verifyimg('c5'))&&(verifyimg('c3')==verifyimg('c7'))&&(verifyimg('c3')!="transp.png")){
            return true;
        }
        return false;
    }

