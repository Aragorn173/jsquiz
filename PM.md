# GYARB Metod

Alvin Liljeström 2022-12-16

## Inledning

Jag skapade min metod som jag kommer använda i mitt gymnasiearbete för att kunna utföra min undersökning. Jag arbetade med html, javascript och glitch för att kunna skapa en websida som kan ställa frågor, hantera input från personen och sedan skicka resultaten till en webserver som kan spara datan.

## Bakgrund

Innan jag började med detta projekt var jag inte så kunnig inom javascript så det första jag gjorde var att följa en tutorial som skapade en simpel quiz med hjälp av java. Tutorialen jag följde var: https://www.sitepoint.com/simple-javascript-quiz/ och visade steg för steg hur man lägger till frågor och skapar svarsknappar. Slutprodukten av projektet skulle vara en rad av frågor där du har en chans att att vinna eller förlora och sedan ett val att anta vadet eller gå viadare till en ny risksituation. Sedan kunde jag börja att ändra på den koden för att skapa den sida jag behövde. Jag ändrade så jag hade knapparna jag behövde och skapade den grundläggande layouten jag ville ha. Efter jag hade layouten lade jag in frågorna och gjorde så att man kan gå igenom alla frågor. Sen skapade jag formler för att räkna ut hur mycket poäng man fick vid vinst och förlust utrifrån chansen man hade att vinna. Sedan skapade jag funktioner som läste av informationen i frågan och skapade så att knapparna gjorde så man kunde välja att ta chansen eller gå vidare till nästa fråga. Nästa steg var att lägga till en faktiskt chans att vinna när man antog vadet, vilket jag gjorde med Math.random(). Jag behövde kunna spara den data som jag fick att svaren så jag skapade en webserver på glitch där jag kunde skicka data och spara den.


![bild på min sida :)](https://cdn.discordapp.com/attachments/806529929092005899/1053248172580941824/image.png)

## Positiva erfarenheter

Innan jag började hade jag arbetat väldigt lite med javascript och min kunskap om språket var väldigt begränsad. Under arbete har jag lärt mig grunderna i javascript, hur man använder variabler och funktioner för att kunna hantera input från användare. Det hjälpte väldigt mycket att börja med en tutorial och lära mig grunderna innan jag började med mitt faktiska projekt. 


## Negativa erfarenheter

Jag hade lite problem med att direkt läsa av informationen som fanns i frågorna som var en array. Men efter jag försökte några lösningar så kom jag fram till att skapa en variabel som får värdet och sedan använde variabeln i funktionerna.


## Sammanfattning

I helhet gick projektet bra och jag lyckades att skapa en sida som jag kan använda som metod i mitt gymnasiearbete. Jag hade inga stora problem som tog lång tid att fixa utan det mesta löste sig efter en del testande eller att jag söker upp problemet. Det går definitivt att göra programmet finare och fixa vissa enkla lösnignar som jag gjort för att få det att fungera. Jag insåg hur viktigt det är att veta grunderna i ämnet innan man började och hur mycket det kan hjälpa att börja med att gå igenom en tutorial.