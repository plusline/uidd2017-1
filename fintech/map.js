$(document).ready(function(){
  $('#transfer').click(function(){
    console.log($("#searchbox").val());
    switch($("#searchbox").val().toUpperCase()){
      case 'AMERICA':
        $('#america').css("display", "block");
        break;
      case 'TAIWAN':
        $('#taiwan').css("display", "block");
        break;
      case 'JAPAN':
        $('#japan').css("display", "block");
        break;
      case 'CANADA':
        $('#canada').css("display", "block");
        break;
      case 'FRENCH':
        $('#french').css("display", "block");
        break;
      case 'CHINA':
        $('#china').css("display", "block");
        break;
      case 'INDIA':
        $('#india').css("display", "block");
        break;
      default:
        break;
    }
    $('#searchox').val("");
  });
});
