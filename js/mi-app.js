function crearTabla(){
    var rangoColumn = document.getElementById("columnas").value;
    var rangofils = document.getElementById("filas").value;   
 
    var total = rangoColumn*rangofils;
    document.writeln("<center>");

    document.writeln("<table border='3' bordercolor='#3677FC' ");
    for (var i = 0; i<rangofils; i++){
        document.writeln("<tr width=200px>");
        for(var j = 0; j<rangoColumn; j++){
            document.writeln("<td bgcolor='#FD78F9' width100px height=20px>");  
            total--;
            document.writeln("</td>")
        }
        document.writeln("</tr>");
    }
    document.writeln("</table>");
 
}

    