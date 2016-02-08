
//This chunk builds the header
var array = document.createElement("table");
array.border="2 px";
document.body.appendChild(array);

//This part creates the header
var header = document.createElement("header");
array.appendChild(header);

var head1 = document.createElement("tr");
header.appendChild(head1);

headrowfill(head1,"Header ", 0);

//This chunk builds the body and populates it
var tbody = document.createElement("tbody");
header.appendChild(tbody);

//Row 1 creation and population
var row1 = document.createElement("tr");
tbody.appendChild(row1);

rowfill(row1,"1, ", 1);

//Row 2 creation and population
var row2 = document.createElement("tr");
tbody.appendChild(row2);

rowfill(row2,"2, ", 2);

//Row 3 creation and population
var row3 = document.createElement("tr");
tbody.appendChild(row3);

rowfill(row3,"3, ", 3);

//This part creates the buttons

var brk = document.createElement("br");
document.body.appendChild(brk);
document.body.appendChild(brk);
document.body.appendChild(brk);
document.body.appendChild(brk);

var row4 = document.createElement("tr");
document.body.appendChild(row4);

var upButton = document.createElement("button");
upButton.textContent="UP";
upButton.addEventListener("click", MoveUp);
row4.appendChild(upButton);

var downButton = document.createElement("button");
downButton.textContent="DOWN";
downButton.addEventListener("click", MoveDown);
row4.appendChild(downButton);

var leftButton = document.createElement("button");
leftButton.textContent="LEFT";
leftButton.addEventListener("click", MoveLeft);
row4.appendChild(leftButton);

var rightButton = document.createElement("button");
rightButton.textContent="RIGHT";
rightButton.addEventListener("click", MoveRight);
row4.appendChild(rightButton);

var markButton = document.createElement("button");
markButton.textContent="MARK CELL";
markButton.addEventListener("click", MarkCell);
row4.appendChild(markButton);

main();

function main()
{
	var CurrentCell = document.getElementById("1, 1");
	CurrentCell.style.borderWidth="thick";
	CurrentCell.style.borderColor="black";
}

function headrowfill(row, name, j)
{
	for (var i=1; i<5; i++)
	{
	var rowitem = document.createElement("th");
	rowitem.textContent=name+i;
	rowitem.id="<j>, <i>";
	row.appendChild(rowitem);
	}
	row.style.borderWidth="thick";
}

function rowfill(row, name,j)
{
	for (var i=1; i<5; i++)
	{
	var rowitem = document.createElement("td");
	rowitem.textContent=name+i;
	rowitem.id=j+", "+i;
	row.appendChild(rowitem);
	}
}

function MarkCell(i,j)
{
	var cell = document.getElementById(i+", "+j);
	cell.style.backgroundColor= "yellow";
}

function MoveUp(i,j)
{
	if (i==1)
		return i;
	else
	{
		return i-1;
	}
}

function MoveDown(i,j)
{
	if (i==3)
		return i;
	else
	{
		return i-1;
	}
}

function MoveLeft(i,j)
{
	
}

function MoveRight(i,j)
{
	
}