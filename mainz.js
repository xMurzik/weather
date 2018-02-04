var town, city, country, wth, temp_c, temp_f, flag_check;

function round(v) {
    return (v >= 0 || -1) * Math.round(Math.abs(v));
}


function zxc()
{
  $("#loc").html("<p class='color-jopa'>" + town + ", " + country + "</p>");
  $("#temperature").html("<span class='color-jopa ' id='temp'>"+ temp_c +"</span>" +" <span class='color-jopa'> &#176</span> <a href='#' id='tmF'>C</a>");

  $("#description").html("<p class='color-jopa'>" + wth + "</p>");
  flag_check = true;
};

  function weather()
  {
    switch(wth){
		case "clear":
		    $("div." + wth).removeClass("hide");
        break;
        case "rain":
        $("div." + wth).removeClass("hide");
        break;
         case "snow":
        $("div." + wth).removeClass("hide");
        break;
         case "drizzle":
        $("div." + wth).removeClass("hide");
        break;
         case "clouds":
        $("div." + wth).removeClass("hide");
        break;
         case "thunderstom":
        $("div." + wth).removeClass("hide");
        break;
        default:
        $("div.clouds").removeClass("hide");
    }

  }


  function change(){
    if(flag_check){
      $("#temp").text(temp_f);
      $("#tmF").text("F");
      flag_check = false;
    }
    else {
        $("#temp").text(temp_c);
        $("#tmF").text("C");
        flag_check = true;
      }
    }



  $(document).ready(function(){
    $.getJSON("http://ipinfo.io/json" , function(data){
      city = data.region;
      country = data.country;
      town = data.city;

      $.getJSON("http://api.openweathermap.org/data/2.5/weather?q="+ data.region +"&units=metric&appid=4784d2f1ee8bd84021ddced7856ba125",
      function(json){
        temp_c = round(json.main.temp);
        temp_f = round((temp_c * 9)/5 + 32);
        wth = json.weather[0].main;
        weather();
        zxc();
        $("#tmF").on("click", change);
      });
    });
  });
