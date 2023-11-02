function display(value)
{
    document.getElementById("resultbar").value += value;
}
function clearscreen()
{
    document.getElementById("resultbar").value="";
}
function calculate()
{
    var a = document.getElementById("resultbar").value;
    var b = eval(a);
    document.getElementById("resultbar").value=b;
}