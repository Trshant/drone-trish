dat=function(e){mon={Jan:'January',Feb:'February',Mar:'March',Apr:'April',May:'May',Jun:'June',Jul:'July',Aug:'August',Sep:'September',Oct:'October',Nov:'November',Dec:'December'};e=e.split('GMT')[0].split(' ');return e[2]+'-'+mon[e[1]]+'-'+e[3]+' '+e[4].substr(0,5)};
tds=$('td.schedule-show');
var schedule='';
for(i=0;i<tds.length;i++){
r=tds[i];
schedule+=dat(r.getAttribute('data-start'))+'\t'+dat(r.getAttribute('data-end'))+'\t'+r.childNodes[1].childNodes[1].innerHTML.replace('&amp;','&amp;')+'\t'+r.childNodes[0].childNodes[0].getAttribute('title').replace('\n',' ').replace('\n',' ').replace('\n',' ').replace('\n',' ')+'\n'};
alert(schedule)