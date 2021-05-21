$(document).ready(function(e){
    let url = "http://localhost:9090/biggiws";
    let key = '12345'
    $('#btn_ini_lg').on('click', function(e){
        var txtNombre = $('#txtUserName').val();
        var txtPass = $('#txtUserPass').val();
        
        // validacion

        var obj = {
            user_name: txtNombre,
            user_pass: txtPass
        };

        fetch(url + 'lg_enter', {
            method: 'POST',
            body: JSON.stringify(obj), 
            headers: { "Content-Type": "application/json" }
        });
    });
});