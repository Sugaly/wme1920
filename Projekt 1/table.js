/**
 * 
 */
	function createTable(){
		var country = ['Brazil', 'Canada', 'Chile', 'China', 'Colombia', 'Ecuador', 'Egypt', 'Finland', 'France', 'Germany', 'Iceland', 'Iraq', 'Japan', 'Kazakhstan', 'Mexico', 'New Zealand', 'Nigeria', 'Peru', 'Russia', 'Saudi Arabia', 'South Africa', 'Sweden', 'United Arab Emirates', 'United Kingdom', 'United States'];
		var tbd = document.getElementById("tbd");
	
		for(var i = 0; i<25; i++){
			var cells = [('00'+(i+1)).slice(-3), country[i], (Math.random()*40000 )+700, (Math.random() *25)-7, (Math.random()*40)+8, (Math.random()*50000)+100, Math.random()*10];
			var tr = document.createElement('tr');
		
			for(var j=0; j<7; j++){
			
				var td = document.createElement('td');
				var content = document.createTextNode(cells[j]);
				td.appendChild(content);
				tr.appendChild(td);
			}
			tbd.appendChild(tr);
		}
	}
	
	function show_hide_column(column){
		var tab = document.getElementById("myTable")
		var col = tab.getElementsByTagName("col")[column];
		var th = tab.getElementsByTagName("th")[column];
		if (col.style.visibility === 'collapse'){
			col.style.visibility = 'visible';
			th.style.borderBottomStyle = 'solid';
		
		} else {
			col.style.visibility = 'collapse';
			th.style.borderBottomStyle = 'none';
		}
	}
	
	function sortTableAsc() {
		  var table, rows, switching, i, x, y, shouldSwitch;
		  table = document.getElementById("myTable");
		  switching = true;
		  while (switching) {
			switching = false;
			rows = table.rows;
			/*einmal durch alle Zeilen gehen, bis auf die erste:*/
			for (i = 1; i < (rows.length - 1); i++) {
			    shouldSwitch = false;
			//auswählen der benachbarten beiden 
			// [1] steht hier für die zweite Spalte - da ja bei uns Id = [0]
			  x = rows[i].getElementsByTagName("td")[1];
			  y = rows[i + 1].getElementsByTagName("td")[1];
			  //vergleichen
			  if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
				shouldSwitch = true;
				break;
			  }
			}
			if (shouldSwitch) {
			  rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
			  switching = true;
			}
		  }
		}

		function sortTableDesc() {
		  var table, rows, switching, i, x, y, shouldSwitch;
		  table = document.getElementById("myTable");
		  switching = true;
		  while (switching) {
			switching = false;
			rows = table.rows;
			for (i = 1; i < (rows.length - 1); i++) {
			    shouldSwitch = false;
			  x = rows[i].getElementsByTagName("td")[1];
			  y = rows[i + 1].getElementsByTagName("td")[1];
			  if (y.innerHTML.toLowerCase() > x.innerHTML.toLowerCase()) {
				shouldSwitch = true;
				break;
			  }
			}
			if (shouldSwitch) {
			  rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
			  switching = true;
			}
		  }
		}