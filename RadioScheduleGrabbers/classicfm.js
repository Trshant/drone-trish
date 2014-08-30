javascript:
(function(){
var newscript=document.createElement('script');
newscript.type='text/javascript';
newscript.async=true;
newscript.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js';
(document.getElementsByTagName('head')[0]||document.getElementsByTagName('body')[0]).appendChild(newscript);
})();
date = $('h2.schedule_date')[0].innerHTML.split(',')[1].trim();
len=$('.vcalendar p abbr').length;
a=[];b=[];c=[];
for(i=0;i<len;i++){
a.push($('.vcalendar p abbr')[i].innerHTML);
b.push($('.vcalendar h3 span')[i].innerHTML);
c.push($('.vcalendar p.description')[i].innerHTML);
}
string='';
for(i=0;i<len;i++){string+=date+' '+a[i]+'\t'+date+' '+a[i+1]+'\t'+b[i]+'\t'+c[i]+'\n';}
alert(string);