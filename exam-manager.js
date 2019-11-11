var temp = null;
// str 根据不同的字符串加载不同的表格界面 
function clickBtn(str) {
  if (str != temp) {
    $("."+str).addClass('left__choose--active').siblings().removeClass('left__choose--active');
  } else {
    $("."+str).removeClass('left__choose--active');
  }
  temp = str
}