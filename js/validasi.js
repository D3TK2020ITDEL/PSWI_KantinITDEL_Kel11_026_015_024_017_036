function Login()
{
  var username=document.login.username.value;
  username=username.toLowerCase();
  var password=document.login.password.value;
  password=password.toLowerCase();
     
        if (username == "mahasiswa" && password == "mahasiswa")
        {
          alert("Anda sukses Login sebagai Mahasiswa");
          window.location.href = "index.html";
        }

        else if (username == "kantin" && password == "kantin")
        {
          alert("Anda sukses Login sebagai Pihak Kantin");
          window.location.href = "index.html";
        }

        else if (username == "dosen" && password == "dosen")
        {
          alert("Anda sukses Login sebagai Dosen");
          window.location.href = "index.html";
        }

        else if (username == "asrama" && password == "asrama")
        {
          alert("Anda sukses Login sebagai Pihak Keasramaan");
          window.location.href = "index.html";
        
        }
        else
        {
          alert("Username atau password anda masih salah");
        } 
} 