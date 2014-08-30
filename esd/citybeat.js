(function(){
var newscript=document.createElement('script');
newscript.type='text/javascript';
newscript.async=true;newscript.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js';
(document.getElementsByTagName('head')[0]||document.getElementsByTagName('body')[0]).appendChild(newscript);})();
function weeksToDate(y,w,d) {
    var days = 2 + d + (w - 1) * 7 - (new Date(y,0,1)).getDay();
    return new Date(y, 0, days);
};
dt = weeksToDate( 2014 , prompt("Please enter the week number", ""), 0 );

tb = "";
for( j=0; j <=6 ; j++ )
{
	tt = $("#day_"+j+"_details ul li h3");
	for(i=0;i<tt.length;i++)
	{
	tr = tt[i].innerHTML.split("<span>");
	p=tr[0].trim();
	st = tr[1].trim().slice(0, tr[1].length-8).split("-")[0];
	et = tr[1].trim().slice(0, tr[1].length-8).split("-")[1];
	tb +="<tr><td>"+p + "</td><td>"+ dt.getUTCDate()+"-"+(dt.getUTCMonth()+1)+"-"+dt.getFullYear()+" "+st.replace('am',' AM').replace('pm',' PM') + "</td><td>"+ dt.getUTCDate()+"-"+(dt.getUTCMonth()+1)+"-"+dt.getFullYear()+" "+et.replace('am',' AM').replace('pm',' PM') + "</td></tr>" ;
	}
	dt.setSeconds( dt.getSeconds() + (24*60*60) )
}
window.location.href = 'data:application/vnd.ms-excel;base64,'+window.btoa(unescape(encodeURIComponent( '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>Sheet1</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>'+tb+'</table></body></html>' )))