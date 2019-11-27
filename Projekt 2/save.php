<?php


// laden der Klasse
require "world_data_parser.php";

// neue Klasseninstanz erstellen
$world_data = new WorldDataParser();

// neues XML Element

$xml = new SimpleXMLElement('<?xml version="1.0" encoding="UTF-8" '
    . 'standalone="yes"?><countries/>');

// Aufrufen der XML Erstellung
$save = $world_data -> saveXML($xml, $world_data -> parseCSV("world_data.csv"));

if ($save == TRUE) {
    echo "Die XML-Datei wurde erfolgreich erstellt";
}else{
    echo "Es ist ein Fehler aufgetreten";
}