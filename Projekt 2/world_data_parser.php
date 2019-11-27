<?php
// Klasse "WorldDataParser" mit den drei Funktionen
class WorldDataParser
{

    function parseCSV($filename)
    {
        // das große Datenarray für alle anderen Arrays
        $data = [];

        // Falls File vorhanden, öffnen
        if (($h = fopen("{$filename}", "r")) !== FALSE) {
            // Lesen der Kopfzeile
            $headers = fgetcsv($h, 1000, ',');

            // Für jede Zeile ein neues Array in Data speichern mit Kopfzeile --> Wert
            while (($row = fgetcsv($h, 1000, ",")) !== FALSE)
                $data[] = array_combine($headers, $row);

            // File wieder schließen
            fclose($h);
        }
        return $data;
    }

    function saveXML(SimpleXMLElement $obj, array $array)
    {   // Boolean für Rüchgabe
        $bool = true;
        // For-each schleife über das ganze Array
        foreach ($array as $key => $value) {
            //wenn der Key eine Zahl ist --> nenne ihn Country
            if (is_numeric($key))
                $key = "country";
                        // wenn das Value selbst zum Key wird, rufe die Funktion rekursiv auf
            if (is_array($value)) {
                $node = $obj->addChild($key);
                $this->saveXML($node, $value);
            }
                      // ansonsten speichere sie im XML-Element
            else {
                    // falls der Key leerzeichen erhält,  nimm nur das erste Wort --> Wohlgeformt
                $teile = explode(" ", $key);
                $obj->addChild($teile[0], htmlspecialchars($value));
            }

        }

        //abspeichern
        $xml_file = ($obj->asXML('world_data.xml'));
        // boolean setzen
        if ($xml_file) {
            $bool = true;
        } else {
            $bool = false;
        }
        return $bool;
    }

    // der Funktion print wird der Pfad zu einer XML-Datei sowieder Pfad zu einem XSLT Stylesheet übergeben (Parameter)

    function printXML($filename, $stylesheet){
            // neues DOMDocument zum halten der XML
        $xml = new DOMDocument();
        $xml->load($filename);
        // neues DOMDocument zum halten der XSLT
        $xsl = new DOMDocument;
        $xsl->load($stylesheet);
        // XSLT Processor zum vereinen der beiden und zu XML zurück
        $proc = new XSLTProcessor();
        $proc->importStyleSheet($xsl);
        return $proc->transformToXML($xml);
    }

    }