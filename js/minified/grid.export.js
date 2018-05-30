/**
*
* @license Guriddo jqGrid JS - v5.3.1 
* Copyright(c) 2008, Tony Tomov, tony@trirand.com
* 
* License: http://guriddo.net/?page_id=103334
*/
!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery","./grid.base","./jquery.fmatter","./grid.utils"],a):a(jQuery)}(function(a){"use strict";a.jgrid=a.jgrid||{},a.extend(a.jgrid,{formatCell:function(b,c,d,e,f,g){var h;if(void 0!==e.formatter){var i={rowId:"",colModel:e,gid:f.p.id,pos:c,styleUI:"",isExported:!0,exporttype:g};h=a.isFunction(e.formatter)?e.formatter.call(f,b,i,d):a.fmatter?a.fn.fmatter.call(f,e.formatter,b,i,d):b}else h=b;return h},formatCellCsv:function(a,b){a=null==a?"":String(a);try{a=a.replace(b._regexsep,b.separatorReplace).replace(/\r\n/g,b.replaceNewLine).replace(/\n/g,b.replaceNewLine)}catch(b){a=""}return b.escquote&&(a=a.replace(b._regexquot,b.escquote+b.quote)),-1!==a.indexOf(b.separator)&&-1!==a.indexOf(b.qoute)||(a=b.quote+a+b.quote),a},excelCellPos:function(a){for(var b="A".charCodeAt(0),c="Z".charCodeAt(0),d=c-b+1,e="";a>=0;)e=String.fromCharCode(a%d+b)+e,a=Math.floor(a/d)-1;return e},makeNode:function(b,c,d){var e=b.createElement(c);return d&&(d.attr&&a(e).attr(d.attr),d.children&&a.each(d.children,function(a,b){e.appendChild(b)}),d.text&&e.appendChild(b.createTextNode(d.text))),e},xmlToZip:function(b,c){var d,e,f,g,h,i,j=this,k=new XMLSerializer,l=-1===k.serializeToString(a.parseXML(a.jgrid.excelStrings["xl/worksheets/sheet1.xml"])).indexOf("xmlns:r"),m=[];a.each(c,function(c,n){if(a.isPlainObject(n))d=b.folder(c),j.xmlToZip(d,n);else{if(l){for(e=n.childNodes[0],f=e.attributes.length-1;f>=0;f--){var o=e.attributes[f].nodeName,p=e.attributes[f].nodeValue;-1!==o.indexOf(":")&&(m.push({name:o,value:p}),e.removeAttribute(o))}for(f=0,g=m.length;f<g;f++)h=n.createAttribute(m[f].name.replace(":","_dt_b_namespace_token_")),h.value=m[f].value,e.setAttributeNode(h)}i=k.serializeToString(n),l&&(-1===i.indexOf("<?xml")&&(i='<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'+i),i=i.replace(/_dt_b_namespace_token_/g,":")),i=i.replace(/<row xmlns="" /g,"<row ").replace(/<cols xmlns="">/g,"<cols>").replace(/<mergeCells xmlns="" /g,"<mergeCells "),b.file(c,i)}})},excelStrings:{"_rels/.rels":'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>',"xl/_rels/workbook.xml.rels":'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/></Relationships>',"[Content_Types].xml":'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="xml" ContentType="application/xml" /><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml" /><Default Extension="jpeg" ContentType="image/jpeg" /><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml" /><Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml" /><Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml" /></Types>',"xl/workbook.xml":'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><fileVersion appName="xl" lastEdited="5" lowestEdited="5" rupBuild="24816"/><workbookPr showInkAnnotation="0" autoCompressPictures="0"/><bookViews><workbookView xWindow="0" yWindow="0" windowWidth="25600" windowHeight="19020" tabRatio="500"/></bookViews><sheets><sheet name="Sheet1" sheetId="1" r:id="rId1"/></sheets></workbook>',"xl/worksheets/sheet1.xml":'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" mc:Ignorable="x14ac" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"><sheetData/></worksheet>',"xl/styles.xml":'<?xml version="1.0" encoding="UTF-8"?><styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" mc:Ignorable="x14ac" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"><numFmts count="7"><numFmt numFmtId="164" formatCode="#,##0.00_- [$$-45C]"/><numFmt numFmtId="165" formatCode="&quot;£&quot;#,##0.00"/><numFmt numFmtId="166" formatCode="[$€-2] #,##0.00"/><numFmt numFmtId="167" formatCode="0.0%"/><numFmt numFmtId="168" formatCode="#,##0;(#,##0)"/><numFmt numFmtId="169" formatCode="#,##0.00;(#,##0.00)"/><numFmt numFmtId="170" formatCode="yyyy/mm/dd;@"/></numFmts><fonts count="5" x14ac:knownFonts="1"><font><sz val="11" /><name val="Calibri" /></font><font><sz val="11" /><name val="Calibri" /><color rgb="FFFFFFFF" /></font><font><sz val="11" /><name val="Calibri" /><b /></font><font><sz val="11" /><name val="Calibri" /><i /></font><font><sz val="11" /><name val="Calibri" /><u /></font></fonts><fills count="6"><fill><patternFill patternType="none" /></fill><fill/><fill><patternFill patternType="solid"><fgColor rgb="FFD9D9D9" /><bgColor indexed="64" /></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="FFD99795" /><bgColor indexed="64" /></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="ffc6efce" /><bgColor indexed="64" /></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="ffc6cfef" /><bgColor indexed="64" /></patternFill></fill></fills><borders count="2"><border><left /><right /><top /><bottom /><diagonal /></border><border diagonalUp="false" diagonalDown="false"><left style="thin"><color auto="1" /></left><right style="thin"><color auto="1" /></right><top style="thin"><color auto="1" /></top><bottom style="thin"><color auto="1" /></bottom><diagonal /></border></borders><cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" /></cellStyleXfs><cellXfs count="67"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="left"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="center"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="right"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="fill"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment textRotation="90"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment wrapText="1"/></xf><xf numFmtId="9"   fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="164" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="165" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="166" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="167" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="168" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="169" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="3" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="4" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="1" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="2" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="170" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/></cellXfs><cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0" /></cellStyles><dxfs count="0" /><tableStyles count="0" defaultTableStyle="TableStyleMedium9" defaultPivotStyle="PivotStyleMedium4" /></styleSheet>'},excelParsers:[{match:/^\-?\d+\.\d%$/,style:60,fmt:function(a){return a/100}},{match:/^\-?\d+\.?\d*%$/,style:56,fmt:function(a){return a/100}},{match:/^\-?\$[\d,]+.?\d*$/,style:57},{match:/^\-?£[\d,]+.?\d*$/,style:58},{match:/^\-?€[\d,]+.?\d*$/,style:59},{match:/^\-?\d+$/,style:65},{match:/^\-?\d+\.\d{2}$/,style:66},{match:/^\([\d,]+\)$/,style:61,fmt:function(a){return-1*a.replace(/[\(\)]/g,"")}},{match:/^\([\d,]+\.\d{2}\)$/,style:62,fmt:function(a){return-1*a.replace(/[\(\)]/g,"")}},{match:/^\-?[\d,]+$/,style:63},{match:/^\-?[\d,]+\.\d{2}$/,style:64},{match:/^\d{4}\-\d{2}\-\d{2}$/,style:67}]}),a.jgrid.extend({exportToCsv:function(b){b=a.extend(!0,{separator:",",separatorReplace:" ",quote:'"',escquote:'"',newLine:"\r\n",replaceNewLine:" ",includeCaption:!0,includeLabels:!0,includeGroupHeader:!0,includeFooter:!0,fileName:"jqGridExport.csv",mimetype:"text/csv;charset=utf-8",returnAsString:!1},b||{});var c="";if(this.each(function(){function d(b,c){function d(a,b,c){var d,e=!1;if(0===b)e=c[a];else{var f=c[a].idx;if(0===f)e=c[a];else for(d=a;d>=0;d--)if(c[d].idx===f-b){e=c[d];break}}return e}function e(b,e,f,g){var h,i,k=d(b,e,f),l=k.cnt,o=new Array(c.collen),p=0;for(i=g;i<n;i++)if(m[i]._excol){var q="{0}";a.each(k.summary,function(){if(this.nm===m[i].name){m[i].summaryTpl&&(q=m[i].summaryTpl),"string"==typeof this.st&&"avg"===this.st.toLowerCase()&&(this.sd&&this.vd?this.v=this.v/this.vd:this.v&&l>0&&(this.v=this.v/l));try{this.groupCount=k.cnt,this.groupIndex=k.dataIndex,this.groupValue=k.value,h=j.formatter("",this.v,i,this)}catch(a){h=this.v}return o[p]=a.jgrid.formatCellCsv(a.jgrid.stripHtml(a.jgrid.template(q,h)),c),!1}}),p++}return o}var f="",g=j.p.groupingView,h=[],i=g.groupField.length,m=j.p.colModel,n=m.length,o=0;a.each(m,function(a,b){var c;for(c=0;c<i;c++)if(g.groupField[c]===b.name){h[c]=a;break}});var p,q,r=a.makeArray(g.groupSummary);if(r.reverse(),"local"===j.p.datatype&&!j.p.loadonce){a(j).jqGrid("groupingSetup");for(var s=a.jgrid.getMethod("groupingPrepare"),t=0;t<l;t++)s.call(a(j),k[t],t)}return a.each(g.groups,function(d,k){o++;try{p=a.isArray(g.formatDisplayField)&&a.isFunction(g.formatDisplayField[k.idx])?g.formatDisplayField[k.idx].call(j,k.displayValue,k.value,j.p.colModel[h[k.idx]],k.idx,g):j.formatter("",k.displayValue,h[k.idx],k.value)}catch(a){p=k.displayValue}var l="";"string"!=typeof(l=a.isFunction(g.groupText[k.idx])?g.groupText[k.idx].call(j,p,k.cnt,k.summary):a.jgrid.template(g.groupText[k.idx],p,k.cnt,k.summary))&&"number"!=typeof l&&(l=p);var n;if(n="header"===g.groupSummaryPos[k.idx]?e(d,0,g.groups,0):new Array(c.collen),n[0]=a.jgrid.formatCellCsv(a.jgrid.stripHtml(l),c),f+=n.join(c.separator)+c.newLine,i-1===k.idx){var s,t,u,v=g.groups[d+1],w=0,x=k.startRow,y=void 0!==v?v.startRow:g.groups[d].startRow+g.groups[d].cnt;for(s=x;s<y&&b[s-w];s++){for(u=b[s-w],q=0,t=0;t<m.length;t++)m[t]._expcol&&(n[q]=a.jgrid.formatCellCsv(a.jgrid.formatCell(u[m[t].name],t,u,m[t],j,"csv"),c),q++);f+=n.join(c.separator)+c.newLine}if("header"!==g.groupSummaryPos[k.idx]){var z;if(void 0!==v){for(z=0;z<g.groupField.length&&v.dataIndex!==g.groupField[z];z++);o=g.groupField.length-z}for(t=0;t<o;t++)r[t]&&(n=e(d,t,g.groups,0),f+=n.join(c.separator)+c.newLine);o=z}}}),f}b._regexsep=new RegExp(b.separator,"g"),b._regexquot=new RegExp(b.quote,"g");var e,f,g,h,i,j=this,k=this.addLocalData(!0),l=k.length,m=j.p.colModel,n=m.length,o=j.p.colNames,p=0,q="",r="",s="",t="",u="",v=[],w=[];if(a.each(m,function(c,d){d._expcol=!0,void 0===d.exportcol?d.hidden&&(d._expcol=!1):d._expcol=d.exportcol,"cb"!==d.name&&"rn"!==d.name&&"subgrid"!==d.name||(d._expcol=!1),d._expcol&&(v.push(a.jgrid.formatCellCsv(o[c],b)),w.push(d.name))}),b.includeLabels&&(u=v.join(b.separator)+b.newLine),b.collen=v.length,j.p.grouping){var x=!!j.p.groupingView._locgr;j.p.groupingView._locgr=!1,q+=d(k,b),j.p.groupingView._locgr=x}else for(;p<l;){for(f=k[p],g=[],h=0,e=0;e<n;e++)m[e]._expcol&&(g[h]=a.jgrid.formatCellCsv(a.jgrid.formatCell(f[m[e].name],e,f,m[e],j,"csv"),b),h++);q+=g.join(b.separator)+b.newLine,p++}if(k=null,g=new Array(b.collen),b.includeCaption&&j.p.caption){for(p=b.collen;--p;)g[p]="";g[0]=a.jgrid.formatCellCsv(j.p.caption,b),r+=g.join(b.separator)+b.newLine}if(b.includeGroupHeader&&j.p.groupHeader&&j.p.groupHeader.length){var y=j.p.groupHeader;for(e=0;e<y.length;e++){var z=y[e].groupHeaders;for(p=0,g=[],i=0;i<w.length;i++){for(g[p]="",h=0;h<z.length;h++)z[h].startColumnName===w[i]&&(g[p]=a.jgrid.formatCellCsv(z[h].titleText,b));p++}s+=g.join(b.separator)+b.newLine}}if(b.includeFooter&&j.p.footerrow){if(a(".ui-jqgrid-ftable",this.sDiv).length){var A=a(j).jqGrid("footerData","get");for(e=0,g=[];e<b.collen;){var B=w[e];A.hasOwnProperty(B)&&g.push(a.jgrid.formatCellCsv(a.jgrid.stripHtml(A[B]),b)),e++}t+=g.join(b.separator)+b.newLine}}c=r+s+u+q+t}),b.returnAsString)return c;a.jgrid.saveAs(c,b.fileName,{type:b.mimetype})},exportToExcel:function(b){b=a.extend(!0,{includeLabels:!0,includeGroupHeader:!0,includeFooter:!0,fileName:"jqGridExport.xlsx",mimetype:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",maxlength:40,onBeforeExport:null,replaceStr:null},b||{}),this.each(function(){function c(a){return a.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/[\x00-\x09\x0B\x0C\x0E-\x1F\x7F-\x9F]/g,"")}function d(b){function c(a,b,c){var d,e=!1;if(0===b)e=c[a];else{var f=c[a].idx;if(0===f)e=c[a];else for(d=a;d>=0;d--)if(c[d].idx===f-b){e=c[d];break}}return e}function d(b,d,f,h){var i,k,l=c(b,d,f),n=l.cnt,p=e(o.header);for(k=h;k<j;k++)if(m[k]._expcol){var q="{0}";a.each(l.summary,function(){if(this.nm===m[k].name){m[k].summaryTpl&&(q=m[k].summaryTpl),"string"==typeof this.st&&"avg"===this.st.toLowerCase()&&(this.sd&&this.vd?this.v=this.v/this.vd:this.v&&n>0&&(this.v=this.v/n));try{this.groupCount=l.cnt,this.groupIndex=l.dataIndex,this.groupValue=l.value,i=g.formatter("",this.v,k,this)}catch(a){i=this.v}return p[this.nm]=a.jgrid.stripHtml(a.jgrid.template(q,i)),!1}})}return p}function e(a){for(var b={},c=0;c<a.length;c++)b[a[c]]="";return b}var f=g.p.groupingView,h=[],i=f.groupField.length,j=m.length,k=0;a.each(m,function(a,b){var c;for(c=0;c<i;c++)if(f.groupField[c]===b.name){h[c]=a;break}});var l,n=a.makeArray(f.groupSummary);if(n.reverse(),"local"===g.p.datatype&&!g.p.loadonce){a(g).jqGrid("groupingSetup");for(var p=a.jgrid.getMethod("groupingPrepare"),q=0;q<o.body.length;q++)p.call(a(g),o.body[q],q)}a.each(f.groups,function(c,j){k++;try{l=a.isArray(f.formatDisplayField)&&a.isFunction(f.formatDisplayField[j.idx])?f.formatDisplayField[j.idx].call(g,j.displayValue,j.value,g.p.colModel[h[j.idx]],j.idx,f):g.formatter("",j.displayValue,h[j.idx],j.value)}catch(a){l=j.displayValue}var m="";"string"!=typeof(m=a.isFunction(f.groupText[j.idx])?f.groupText[j.idx].call(g,l,j.cnt,j.summary):a.jgrid.template(f.groupText[j.idx],l,j.cnt,j.summary))&&"number"!=typeof m&&(m=l);var p;if(p="header"===f.groupSummaryPos[j.idx]?d(c,0,f.groups,0):e(o.header),p[Object.keys(p)[0]]=a.jgrid.stripHtml(new Array(5*j.idx).join(" ")+m),s(p,!0),i-1===j.idx){var q,r,t=f.groups[c+1],u=0,v=j.startRow,w=void 0!==t?t.startRow:f.groups[c].startRow+f.groups[c].cnt;for(q=v;q<w&&b[q-u];q++){var x=b[q-u];s(x,!1)}if("header"!==f.groupSummaryPos[j.idx]){var y;if(void 0!==t){for(y=0;y<f.groupField.length&&t.dataIndex!==f.groupField[y];y++);k=f.groupField.length-y}for(r=0;r<k;r++)n[r]&&(p=d(c,r,f.groups,0),s(p,!0));k=y}}})}var e,f,g=this,h=a.jgrid.excelStrings,i=0,j=a.parseXML(h["xl/worksheets/sheet1.xml"]),k=j.getElementsByTagName("sheetData")[0],l={_rels:{".rels":a.parseXML(h["_rels/.rels"])},xl:{_rels:{"workbook.xml.rels":a.parseXML(h["xl/_rels/workbook.xml.rels"])},"workbook.xml":a.parseXML(h["xl/workbook.xml"]),"styles.xml":a.parseXML(h["xl/styles.xml"]),worksheets:{"sheet1.xml":j}},"[Content_Types].xml":a.parseXML(h["[Content_Types].xml"])},m=g.p.colModel,n=0,o={body:g.addLocalData(!0),header:[],footer:[],width:[],map:[]};for(e=0,f=m.length;e<f;e++)m[e]._expcol=!0,void 0===m[e].exportcol?m[e].hidden&&(m[e]._expcol=!1):m[e]._expcol=m[e].exportcol,"cb"!==m[e].name&&"rn"!==m[e].name&&"subgrid"!==m[e].name&&m[e]._expcol&&(o.header[n]=m[e].name,o.width[n]=5,o.map[n]=e,n++);var p,q,r=a.isFunction(b.replaceStr)?b.replaceStr:c,s=function(c,d){p=i+1,q=a.jgrid.makeNode(j,"row",{attr:{r:p}});for(var e=15,f=0;f<o.header.length;f++){var h,l,n=a.jgrid.excelCellPos(f)+""+p,s=a.isArray(c)&&d?g.p.colNames[o.map[f]]:c[o.header[f]];null==s&&(s=""),d||(s=a.jgrid.formatCell(s,o.map[f],c,m[o.map[f]],g,"excel")),o.width[f]=Math.max(o.width[f],Math.min(parseInt(s.toString().length,10),b.maxlength)),s.match&&(l=s.match(/^-?([1-9]\d+)(\.(\d+))?$/)),h=null;for(var t=0,u=a.jgrid.excelParsers.length;t<u;t++){var v=a.jgrid.excelParsers[t];if(s.match&&!s.match(/^0\d+/)&&s.match(v.match)){s=s.replace(/[^\d\.\-]/g,""),v.fmt&&(s=v.fmt(s)),h=67===v.style?a.jgrid.makeNode(j,"c",{attr:{t:"d",r:n,s:v.style},children:[a.jgrid.makeNode(j,"v",{text:s})]}):a.jgrid.makeNode(j,"c",{attr:{r:n,s:v.style},children:[a.jgrid.makeNode(j,"v",{text:s})]}),q.appendChild(h);break}}if(!h){if("number"==typeof s&&s.toString().length<=e||l&&l[1].length+(l[2]?l[3].length:0)<=e)h=a.jgrid.makeNode(j,"c",{attr:{t:"n",r:n},children:[a.jgrid.makeNode(j,"v",{text:s})]});else{var w=s.replace?r(s):s;h=a.jgrid.makeNode(j,"c",{attr:{t:"inlineStr",r:n},children:{row:a.jgrid.makeNode(j,"is",{children:{row:a.jgrid.makeNode(j,"t",{text:w})}})}})}q.appendChild(h)}}k.appendChild(q),i++};if(a("sheets sheet",l.xl["workbook.xml"]).attr("name",b.sheetName),b.includeGroupHeader&&g.p.groupHeader&&g.p.groupHeader.length){var t,u,v=g.p.groupHeader,w=[],x=0;for(u=0;u<v.length;u++){var y=v[u].groupHeaders,z={};for(x++,e=0,e=0;e<o.header.length;e++){t=o.header[e],z[t]="";for(var A=0;A<y.length;A++)if(y[A].startColumnName===t){z[t]=y[A].titleText;var B=a.jgrid.excelCellPos(e)+x,C=a.jgrid.excelCellPos(e+y[A].numberOfColumns-1)+x;w.push({ref:B+":"+C})}}s(z,!0)}a("row c",j).attr("s","2");var D=a.jgrid.makeNode(j,"mergeCells",{attr:{count:w.length}});for(a("worksheet",j).append(D),n=0;n<w.length;n++)D.appendChild(a.jgrid.makeNode(j,"mergeCell",{attr:w[n]}))}if(b.includeLabels&&(s(o.header,!0),a("row:last c",j).attr("s","2")),g.p.grouping){var E=!!g.p.groupingView._locgr;g.p.groupingView._locgr=!1,d(o.body),g.p.groupingView._locgr=E}else for(var F=0,G=o.body.length;F<G;F++)s(o.body[F],!1);if(b.includeFooter||g.p.footerrow){o.footer=a(g).jqGrid("footerData","get");for(n in o.footer)o.footer.hasOwnProperty(n)&&(o.footer[n]=a.jgrid.stripHtml(o.footer[n]));s(o.footer,!0),a("row:last c",j).attr("s","2")}var H=a.jgrid.makeNode(j,"cols");for(a("worksheet",j).prepend(H),n=0,f=o.width.length;n<f;n++)H.appendChild(a.jgrid.makeNode(j,"col",{attr:{min:n+1,max:n+1,width:o.width[n],customWidth:1}}));a.isFunction(b.onBeforeExport)&&b.onBeforeExport(l),o=null;try{var I=new JSZip,J={type:"blob",mimeType:b.mimetype};a.jgrid.xmlToZip(I,l),I.generateAsync?I.generateAsync(J).then(function(c){a.jgrid.saveAs(c,b.fileName,{type:b.mimetype})}):a.jgrid.saveAs(I.generate(J),b.fileName,{type:b.mimetype})}catch(a){throw a}})},exportToPdf:function(b){return b=a.extend(!0,{title:null,orientation:"portrait",pageSize:"A4",description:null,onBeforeExport:null,download:"download",includeLabels:!0,includeGroupHeader:!0,includeFooter:!0,fileName:"jqGridExport.pdf",mimetype:"application/pdf"},b||{}),this.each(function(){function c(b){function c(b,c){for(var d=0,e=[],f=0;f<m.length;f++)k={text:null==b[m[f]]?"":c?a.jgrid.formatCell(b[m[f]]+"",o[d],l[n],q[o[d]],h,"pdf"):b[m[f]],alignment:r[f],style:"tableBody"},e.push(k),d++;return e}function d(a,b,c){var d,e=!1;if(0===b)e=c[a];else{var f=c[a].idx;if(0===f)e=c[a];else for(d=a;d>=0;d--)if(c[d].idx===f-b){e=c[d];break}}return e}function e(b,c,e,g){var i,j,k=d(b,c,e),l=k.cnt,n=f(m);for(j=g;j<s;j++)if(q[j]._expcol){var o="{0}";a.each(k.summary,function(){if(this.nm===q[j].name){q[j].summaryTpl&&(o=q[j].summaryTpl),"string"==typeof this.st&&"avg"===this.st.toLowerCase()&&(this.sd&&this.vd?this.v=this.v/this.vd:this.v&&l>0&&(this.v=this.v/l));try{this.groupCount=k.cnt,this.groupIndex=k.dataIndex,this.groupValue=k.value,i=h.formatter("",this.v,j,this)}catch(a){i=this.v}return n[this.nm]=a.jgrid.stripHtml(a.jgrid.template(o,i)),!1}})}return n}function f(a){for(var b={},c=0;c<a.length;c++)b[a[c]]="";return b}var g=h.p.groupingView,j=[],p=g.groupField.length,q=h.p.colModel,s=q.length,t=0;a.each(q,function(a,b){var c;for(c=0;c<p;c++)if(g.groupField[c]===b.name){j[c]=a;break}});var u,v=a.makeArray(g.groupSummary);if(v.reverse(),"local"===h.p.datatype&&!h.p.loadonce){a(h).jqGrid("groupingSetup");for(var w=a.jgrid.getMethod("groupingPrepare"),x=0;x<l.length;x++)w.call(a(h),l[x],x)}a.each(g.groups,function(d,k){t++;try{u=a.isArray(g.formatDisplayField)&&a.isFunction(g.formatDisplayField[k.idx])?g.formatDisplayField[k.idx].call(h,k.displayValue,k.value,h.p.colModel[j[k.idx]],k.idx,g):h.formatter("",k.displayValue,j[k.idx],k.value)}catch(a){u=k.displayValue}var l="";"string"!=typeof(l=a.isFunction(g.groupText[k.idx])?g.groupText[k.idx].call(h,u,k.cnt,k.summary):a.jgrid.template(g.groupText[k.idx],u,k.cnt,k.summary))&&"number"!=typeof l&&(l=u);var n;if(n="header"===g.groupSummaryPos[k.idx]?e(d,0,g.groups,0):f(m),n[Object.keys(n)[0]]=a.jgrid.stripHtml(new Array(5*k.idx).join(" ")+l),i.push(c(n,!1)),p-1===k.idx){var o,q,r=g.groups[d+1],s=0,w=k.startRow,x=void 0!==r?r.startRow:g.groups[d].startRow+g.groups[d].cnt;for(o=w;o<x&&b[o-s];o++){var y=b[o-s];i.push(c(y,!0))}if("header"!==g.groupSummaryPos[k.idx]){var z;if(void 0!==r){for(z=0;z<g.groupField.length&&r.dataIndex!==g.groupField[z];z++);t=g.groupField.length-z}for(q=0;q<t;q++)v[q]&&(n=e(d,q,g.groups,0),i.push(c(n,!1)));t=z}}})}var d,e,f,g,h=this,i=[],j=h.p.colModel,k={},l=h.addLocalData(!0),m=[],n=0,o=[],p=[],q=[],r={};for(d=0,e=j.length;d<e;d++)j[d]._expcol=!0,void 0===j[d].exportcol?j[d].hidden&&(j[d]._expcol=!1):j[d]._expcol=j[d].exportcol,"cb"!==j[d].name&&"rn"!==j[d].name&&"subgrid"!==j[d].name&&j[d]._expcol&&(k={text:h.p.colNames[d],style:"tableHeader"},p.push(k),m[n]=j[d].name,o[n]=d,q.push(j[d].width),r[j[d].name]=j[d].align||"left",n++);var s;if(b.includeGroupHeader&&h.p.groupHeader&&h.p.groupHeader.length)for(s=h.p.groupHeader,n=0;n<s.length;n++){var t=[],u=s[n].groupHeaders;for(f=0;f<m.length;f++){for(k={text:"",style:"tableHeader"},g=0;g<u.length;g++)u[g].startColumnName===m[f]&&(k={text:u[g].titleText,colSpan:u[g].numberOfColumns,style:"tableHeader"});t.push(k),d++}i.push(t)}if(b.includeLabels&&i.push(p),h.p.grouping){var v=!!h.p.groupingView._locgr;h.p.groupingView._locgr=!1,c(l),h.p.groupingView._locgr=v}else{var w;for(n=0,e=l.length;n<e;n++){for(g=0,p=[],w=l[n],f=0;f<m.length;f++)k={text:null==w[m[f]]?"":a.jgrid.formatCell(w[m[f]]+"",o[g],l[n],j[o[g]],h,"pdf"),alignment:r[m[f]],style:"tableBody"},p.push(k),g++;i.push(p)}}if(b.includeFooter&&h.p.footerrow){var x=a(h).jqGrid("footerData","get");for(p=[],f=0;f<m.length;f++)k={text:a.jgrid.stripHtml(x[m[f]]),style:"tableFooter",alignment:r[m[f]]},p.push(k);i.push(p)}var y={pageSize:b.pageSize,pageOrientation:b.orientation,content:[{style:"tableExample",widths:q,table:{headerRows:null!=s?0:1,body:i}}],styles:{tableHeader:{bold:!0,fontSize:11,color:"#2e6e9e",fillColor:"#dfeffc",alignment:"center"},tableBody:{fontSize:10},tableFooter:{bold:!0,fontSize:11,color:"#2e6e9e",fillColor:"#dfeffc"},title:{alignment:"center",fontSize:15},description:{}},defaultStyle:{fontSize:10}};b.description&&y.content.unshift({text:b.description,style:"description",margin:[0,0,0,12]}),b.title&&y.content.unshift({text:b.title,style:"title",margin:[0,0,0,12]}),a.isFunction(b.onBeforeExport)&&b.onBeforeExport.call(h,y);try{var z=pdfMake.createPdf(y);"open"===b.download?z.open():z.getBuffer(function(c){a.jgrid.saveAs(c,b.fileName,{type:b.mimetype})})}catch(a){throw a}})},exportToHtml:function(b){b=a.extend(!0,{title:"",onBeforeExport:null,includeLabels:!0,includeGroupHeader:!0,includeFooter:!0,tableClass:"jqgridprint",autoPrint:!1,topText:"",bottomText:"",returnAsString:!1},b||{});var c;return this.each(function(){function d(b){function c(a,b,c){var d,e=!1;if(0===b)e=c[a];else{var f=c[a].idx;if(0===f)e=c[a];else for(d=a;d>=0;d--)if(c[d].idx===f-b){e=c[d];break}}return e}function d(b,d,f,i){var k,m,n=c(b,d,f),o=n.cnt,p=e(j.header);for(m=i;m<l;m++)if(h[m]._expcol){var q="{0}";a.each(n.summary,function(){if(this.nm===h[m].name){h[m].summaryTpl&&(q=h[m].summaryTpl),"string"==typeof this.st&&"avg"===this.st.toLowerCase()&&(this.sd&&this.vd?this.v=this.v/this.vd:this.v&&o>0&&(this.v=this.v/o));try{this.groupCount=n.cnt,this.groupIndex=n.dataIndex,this.groupValue=n.value,k=g.formatter("",this.v,m,this)}catch(a){k=this.v}return p[this.nm]=a.jgrid.stripHtml(a.jgrid.template(q,k)),!1}})}return p}function e(a){for(var b={},c=0;c<a.length;c++)b[a[c]]="";return b}var f=g.p.groupingView,i=[],k=f.groupField.length,l=h.length,m=0,n="";a.each(h,function(a,b){var c;for(c=0;c<k;c++)if(f.groupField[c]===b.name){i[c]=a;break}});var p,q=a.makeArray(f.groupSummary);if(q.reverse(),"local"===g.p.datatype&&!g.p.loadonce){a(g).jqGrid("groupingSetup");for(var r=a.jgrid.getMethod("groupingPrepare"),s=0;s<j.body.length;s++)r.call(a(g),j.body[s],s)}return a.each(f.groups,function(c,h){m++;try{p=a.isArray(f.formatDisplayField)&&a.isFunction(f.formatDisplayField[h.idx])?f.formatDisplayField[h.idx].call(g,h.displayValue,h.value,g.p.colModel[i[h.idx]],h.idx,f):g.formatter("",h.displayValue,i[h.idx],h.value)}catch(a){p=h.displayValue}var l="";"string"!=typeof(l=a.isFunction(f.groupText[h.idx])?f.groupText[h.idx].call(g,p,h.cnt,h.summary):a.jgrid.template(f.groupText[h.idx],p,h.cnt,h.summary))&&"number"!=typeof l&&(l=p);var r,s=!1;if("header"===f.groupSummaryPos[h.idx]?r=d(c,0,f.groups,0):(r=e(j.header),s=!0),r[Object.keys(r)[0]]=new Array(5*h.idx).join(" ")+l,n+=o(r,"td",!1,1===m,s),
k-1===h.idx){var t,u,v=f.groups[c+1],w=0,x=h.startRow,y=void 0!==v?v.startRow:f.groups[c].startRow+f.groups[c].cnt;for(t=x;t<y&&b[t-w];t++){var z=b[t-w];n+=o(z,"td",!1)}if("header"!==f.groupSummaryPos[h.idx]){var A;if(void 0!==v){for(A=0;A<f.groupField.length&&v.dataIndex!==f.groupField[A];A++);m=f.groupField.length-A}for(u=0;u<m;u++)q[u]&&(r=d(c,u,f.groups,0),n+=o(r,"td",!1));m=A}}}),n}var e,f,g=this,h=g.p.colModel,i=0,j={body:g.addLocalData(!0),header:[],footer:[],width:[],map:[],align:[]};for(e=0,f=h.length;e<f;e++)h[e]._expcol=!0,void 0===h[e].exportcol?h[e].hidden&&(h[e]._expcol=!1):h[e]._expcol=h[e].exportcol,"cb"!==h[e].name&&"rn"!==h[e].name&&"subgrid"!==h[e].name&&h[e]._expcol&&(j.header[i]=h[e].name,j.width[i]=h[e].width,j.map[i]=e,j.align[i]=h[e].align||"left",i++);var k=document.createElement("a"),l=function(b){var c=a(b).clone()[0];return"link"===c.nodeName.toLowerCase()&&(c.href=m(c.href)),c.outerHTML},m=function(a){k.href=a;var b=k.host;return-1===b.indexOf("/")&&0!==k.pathname.indexOf("/")&&(b+="/"),k.protocol+"//"+b+k.pathname+k.search},n=function(a,b,c){for(var d,e="<tr>",f=0,h=a.length;f<h;f++)d=!0===c?" style=width:"+j.width[f]+"px;":"",e+="<"+b+d+">"+g.p.colNames[j.map[f]]+"</"+b+">";return e+"</tr>"},o=function(b,c,d,e,f){for(var i,k,l="<tr>",m=0,n=j.header.length;m<n&&(k=f?' colspan= "'+j.header.length+'" style=text-align:left':!0===e?" style=width:"+j.width[m]+"px;text-align:"+j.align[m]+";":" style=text-align:"+j.align[m]+";",i=j.header[m],b.hasOwnProperty(i)&&(l+="<"+c+k+">"+(d?a.jgrid.formatCell(b[i],j.map[m],b,h[j.map[m]],g,"html"):b[i])+"</"+c+">"),!f);m++);return l+"</tr>"},p='<table class="'+b.tableClass+'">';if(b.includeLabels&&(p+="<thead>"+n(j.header,"th",!0)+"</thead>"),p+="<tbody>",g.p.grouping){var q=!!g.p.groupingView._locgr;g.p.groupingView._locgr=!1,p+=d(j.body),g.p.groupingView._locgr=q}else for(var i=0,f=j.body.length;i<f;i++)p+=o(j.body[i],"td",!0,0===i);if(b.includeFooter&&g.p.footerrow&&(j.footer=a(g).jqGrid("footerData","get",null,!1),p+=o(j.footer,"td",!1)),p+="</tbody>",p+="</table>",b.returnAsString)c=p;else{var r=window.open("","");r.document.close();var s=b.title?"<title>"+b.title+"</title>":"";a("style, link").each(function(){s+=l(this)});try{r.document.head.innerHTML=s}catch(b){a(r.document.head).html(s)}r.document.body.innerHTML=(b.title?"<h1>"+b.title+"</h1>":"")+"<div>"+(b.topText||"")+"</div>"+p+"<div>"+(b.bottomText||"")+"</div>",a(r.document.body).addClass("html-view"),a("img",r.document.body).each(function(a,b){b.setAttribute("src",m(b.getAttribute("src")))}),b.onBeforeExport&&b.onBeforeExport(r),Boolean(r.chrome)?b.autoPrint&&(r.print(),r.close()):setTimeout(function(){b.autoPrint&&(r.print(),r.close())},1e3)}}),c}})});