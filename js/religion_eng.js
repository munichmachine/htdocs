function loadXMLDoc(dname)
{
if (window.XMLHttpRequest)
  {
  xhttp=new XMLHttpRequest();
  }
else
  {
  xhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xhttp.open("GET",dname,false);
xhttp.send();
return xhttp.responseXML;
} 

function read_eng()
	{
		xmlDoc=loadXMLDoc("../xml/religion.xml");

		x=xmlDoc.getElementsByTagName("english")[0]
		y=x.childNodes[0];
    document.write(y.nodeValue);
  }