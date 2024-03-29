<?php
$hours = [
	"Monday" => "8am-8pm",
	"Tuesday" => "8am-8pm",
	"Wednesday" => "8am-8pm",
	"Thursday" => "8am-8pm",
	"Friday" => "8am-4pm",
	"Saturday" => "11am-4pm",
	"Sunday" => "11am-6pm"
];

foreach ($hours as $day => $time) {
	echo htmlspecialchars($day) . ': ' . htmlspecialchars($time) . '<br>';
}
?>