<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
                    <!-- Sucht sich aus der Xml-Datei die gesuchten Values raus und speichert sie -->

                            <tbody id="table_body">
                                <xsl:for-each select="countries/country">
                                    <tr>
                                        <td><xsl:value-of select="id"/></td>
                                        <td><xsl:value-of select="name"/></td>
                                        <td><xsl:value-of select="gdp_per_capita"/></td>
                                        <td><xsl:value-of select="inflation"/></td>
                                        <td><xsl:value-of select="birth"/></td>
                                        <td><xsl:value-of select="electricity"/></td>
                                        <td><xsl:value-of select="military"/></td>
                                    </tr>
                                </xsl:for-each>
                            </tbody>
            </xsl:template>
</xsl:stylesheet>
