format_time=function(e)
{
if(e=="schedule"){e=$('ul li a.active')[0].href.split("/").pop()}
mon={'01':'January','02':'February','03':'March','04':'April','05':'May','06':'June','07':'July','08':'August','09':'September','10':'October','11':'November','12':'December'};
e=e.split('-');
return [2]+'-'+mon[e[1]]+'-'+e[0];
};
date=format_time(window.location.href.split('/').pop())+' ';
trs=$('div#radio-schedule table tbody tr');
var schedule='';
for(i=0;i<trs.length;i++){stime=date+trs[i].childNodes[0].childNodes[0].innerHTML;
if(i==trs.length-1){etime=date+'24:00'}
else{etime=date+trs[i+1].childNodes[0].childNodes[0].innerHTML}
showname=trs[i].childNodes[1].childNodes[1].innerHTML.split('%20-%20')[1];desc=trs[i].childNodes[1].childNodes[2].innerHTML.split('.');
desc=desc.slice(0,desc.length-1).join('. ');desc+='.';schedule+=stime+'\t'+etime+'\t'+showname+'\t'+desc+'\n';
};
alert(schedule)