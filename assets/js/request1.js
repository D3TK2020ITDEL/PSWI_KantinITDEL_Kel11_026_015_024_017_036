<!-- fungsi Alphabet -->
    function Alphabet6(nilai, pesan) 
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

    function Alphabet7(nilai, pesan) 
    {
        var alphaExp = /^[a-zA-Z]+$/;
        if(nilai.value.match(alphaExp)) 
        {
            alert("Penyebab telah diisi");
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
            
           
function validasi1() 
{
    Alphabet6(document.getElementById('nama1'), 'Pastikan field NAMA LENGKAP anda sudah terisi');
    Number(document.getElementById('nim1'), 'Pastikan field NIM anda sudah terisi');
    Alphabet7(document.getElementById('penyebab'), 'Pastikan field PENYEBAB ALERGI anda sudah terisi');
}