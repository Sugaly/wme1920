<?php

// laden der Klasse
require "world_data_parser.php";

// neue Klasseninstanz erstellen
$world_data = new WorldDataParser();

// Ergebnis abrufen
echo "<pre>";
print_r( $world_data -> parseCSV("world_data.csv"));
echo "</pre>";

