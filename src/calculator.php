<!DOCTYPE html>
<HTML>
<HEAD>
<meta charset="utf-8"/>

<TITLE>Calculator</TITLE>

<style type="text/css">
  body {
    background-color: #FFE4C4;
  }
</style>

<script type="text/javascript" src="calculator.js"></script>
</HEAD>

<BODY>

  Enter the first number: <br/>
  <input id="inputNum1" type="text" /input> <br/><br/>
  Enter the second number: <br/>
  <input id="inputNum2" type="text" /input> <br/><br/>  

  <button onclick="addService()">Add</button><br/><br/> 
  <button onclick="subService()">Subtract</button><br/></br>
  <button onclick="divService()">Divide</button></br></br>

  Results: <div id="result"></div>

<div id="footer">
<?php require 'calculator-footer.php';?>   
</div>  
  
</BODY>
</HTML>
