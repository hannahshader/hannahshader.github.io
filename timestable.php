<?php 
    $n = isset($_GET['n']) ? $_GET['n'] : 1;

    $i = 1;
    while ($i <= 15) { 
        $y = $n * $i;
        echo $i . " x " . $n . " = " . $y . " <br>"; 
        $i++;
    }
?>