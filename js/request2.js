<!-- fungsi Alphabet -->
    function Alphabet4(nilai, pesan) 
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

    function Alphabet5(nilai, pesan) 
    {
        var alphaExp = /^[a-zA-Z]+$/;
        if(nilai.value.match(alphaExp)) 
        {
            alert("Alasan telah diisi");
            return true;
        }

        else 
        {
            alert(pesan);
            nilai.focus();
            return false;
        }
    }

<!-- fungsi NIM -->
    function Number(nilai, pesan) 
    {
        var numberExp = /^[0-9]+$/;
        if(nilai.value.match(numberExp)) 
        {
            alert("NIM telah diisi");
            return true;
        }
        else 
        {
            alert(pesan);
            nilai.focus();
            return false;
        }
    }
            
           
function validasi2() 
{
    Alphabet4(document.getElementById('nama2'), 'Pastikan field NAMA LENGKAP anda sudah terisi');
    Number(document.getElementById('nim2'), 'Pastikan field NIM anda sudah terisi');
    Alphabet5(document.getElementById('alasan'), 'Pastikan field ALASAN anda sudah terisi');
}