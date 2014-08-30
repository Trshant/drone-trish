javascript:
Channels=['Setanta Ireland','Setanta Sports 1','BTSport1','BTSport2','ESPN'];
ChannelID=[50386,6350,40303,0,50942];
ChannelDIV=['setanta-ireland-tv','setanta-sports-1-tv','setanta-bts-1-tv','setanta-bts-2-tv','setanta-espn-tv'];
CNo=parseInt(prompt('Please type in the option number :\n1 Setanta Ireland\n2 Setanta Sports\n3 ET Sports 1HD\n4 ET Sports 2HD\n5 ESPN HD'))-1;
string='channel-name\tchannel-id\tprogramme-name\tprogram-id\ttime-start\ttime-end\tminutes-duration\tcategory\tdescription\tdirectors\tcast\tepisode-title\tseries-number\tepisode-number\tkeywords\tyear\tstar-rating\tcertificate\tqualifiers\tscheduleid\n';
data=[];date=prompt('Please type in the date :');
t=$('div#tv-listing-draggable div#'+ChannelDIV[CNo]+' div[class*=\'number-of-minutes-\']');
for(x=0;x<t.length;x++){
i=t[x];
if(i.innerHTML!=''){j=i.childNodes[1];
yo=j.childNodes[5].innerHTML;
yo=yo.split(',');
data.push([j.childNodes[1].childNodes[0].innerHTML,j.childNodes[3].innerHTML,yo[0],yo[1]])}}
for(x=0;x<data.length;x++){
i=data[x];
y=x+1;
if(y==data.length){
ll='last';}else{ll=data[y][2];}
string+=ChannelID[CNo]+'\t'+Channels[CNo]+'\t'+i[0]+'\t\t'+date+' '+i[2]+'\t'+date+' '+ll+'\t'+i[3].replace('min.','')+'\tSports\t'+i[1]+'\n';
}
alert(string);