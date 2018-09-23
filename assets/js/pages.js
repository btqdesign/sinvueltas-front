function showHide(){
    var buttonShow= $('#btn-nuevoContrato'),
        closeBack=$('#close-contrato');
        $('#crear-contrato').hide("slow");
        $('#inicio-contrato').show("slow"); 

        buttonShow.click( function(){
            $('#inicio-contrato').hide("slow");
            $('#crear-contrato').show("slow"); 
        })
        closeBack.click(function(){
            $('#crear-contrato').hide("slow");
            $('#inicio-contrato').show("slow"); 
        })

}

$(document).ready(function(){
    showHide()   
    
})