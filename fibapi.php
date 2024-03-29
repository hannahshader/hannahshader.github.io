<?php
$m = (int)$_GET['m'];

$data = [];

$x = 0;
$y = 1;

for ($i = 0; $i < $m; $i++) {
    if ($i >= 1) {
        $temp = $y;
        $y = $x + $y;
        $x = $temp;
    }
    $data[] = $x;
}

echo json_encode($data);
?>