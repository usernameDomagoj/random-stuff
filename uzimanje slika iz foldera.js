//uzimanje svih .jpg slika iz foldera /jquery
$.ajax({
    url: "./assets/", //PATH
    success: function(data){
       $(data).find("a:contains(.jpg)").each(function(){
          let filename = this.href.replace(window.location.host, "").replace("http://", "");
          $("REPLACE").append("<img src='./" + filename + "'>");
       });
    }
});