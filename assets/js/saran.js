<!-- fungsi Alphabet -->
    function Alphabet1(nilai, pesan) 
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

    function Alphabet2(nilai, pesan) 
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

    function Alphabet3(nilai, pesan) 
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

       
function validasi3() 
{
    Alphabet1(document.getElementById('nama3'), 'Pastikan nama anda sudah isi');
    Alphabet2(document.getElementById('subject'), 'Pastikan subject anda sudah isi');
    Alphabet3(document.getElementById('saran'), 'Pastikan saran anda sudah isi');
}
