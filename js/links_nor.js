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

function read_nor()
	{
		xmlDoc=loadXMLDoc("../xml/links.xml");

		x=xmlDoc.getElementsByTagName("norwegian")[0]
		y=x.childNodes[0];
		document.write(y.nodeValue);
	}