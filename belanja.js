let belanja = parseInt(prompt("Masukan Total Belanja: ")); 
if (belanja >= 0 && belanja < 100000) { 
  document.writeln(Anda belanja: ${belanja}<br>); 
  document.writeln("Anda tidak dapat diskon"); 
} else if (belanja >= 100000 && belanja <= 200000) { 
  document.writeln(Anda belanja : ${belanja}<br>); 
  document.writeln("Anda dapat diskon 10%<br>"); 
   let diskon = (belanja * 10) / 100; 
  document.writeln(total bayar ${belanja - diskon}); 
} else if (belanja > 200000) { 
  document.writeln(Anda belanja : ${belanja}<br>); 
  document.writeln("Anda dapat diskon 25%<br>"); 
   let diskon = (belanja * 25) / 100; 
  document.writeln(total bayar ${belanja - diskon}); 
} else { 
  document.writeln("Uang Anda Kurang!!"); 
}