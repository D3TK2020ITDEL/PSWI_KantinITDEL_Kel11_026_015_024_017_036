<!-- fungsi Alphabet -->
    function Alphabet10(nilai, pesan) 
    {
        var alphaExp = /^[a-zA-Z]+$/;
        if(nilai.value.match(alphaExp)) 
        {
            alert("Nama telah diisi");
            return true;
        }

        else 
        {
            alert(pesan);
            nilai.focus();
            return false;
        }
    }

    function Alphabet11(nilai, pesan) 
    {
        var alphaExp = /^[a-zA-Z]+$/;
        if(nilai.value.match(alphaExp)) 
        {
            alert("Subject telah diisi");
            return true;
        }

        else 
        {
            alert(pesan);
            nilai.focus();
            return false;
        }
    }

    function Alphabet12(nilai, pesan) 
    {
        var alphaExp = /^[a-zA-Z]+$/;
        if(nilai.value.match(alphaExp)) 
        {
            alert("Saran telah diisi");
            return true;
        }

        else 
        {
            alert(pesan);
            nilai.focus();
            return false;
        }
    }

<!-- fungsi Email  -->
    function email(nilai, pesan)
    {
        var email = /^([a-zA-Z0-9_.+-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
        if(nilai.value.match(email)) 
        {
            alert("Email telah diisi");
            return true;
        }
        else 
        {
            alert(pesan);
            nilai.focus();
            return false;
        }
    }

       
function validasi4() 
{
    Alphabet10(document.getElementById('nama4'), 'Pastikan nama anda sudah isi');
    email(document.getElementById('email'), 'Pastikan email anda sudah benar');
    Alphabet11(document.getElementById('subject'), 'Pastikan subject anda sudah isi');
    Alphabet12(document.getElementById('saran'), 'Pastikan saran anda sudah isi');
}
