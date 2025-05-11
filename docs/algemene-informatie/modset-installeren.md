---
layout: doc
title: Modset Installeren
---

# Modset Installeren
## Voordat je begint!
Voordat je begint moet je natuurlijk onze standaard modset downloaden. Deze is ongeveer 58GB en neemt wat tijd in beslag om te downloaden. Raadzaam is om downloaden als je gaat vissen, werken of andere activiteiten gepland hebt. Om mods te downloaden en mee te kunnen spelen heb je het volgende nodig:

* Download de laatste (64bit) versie van TeamSpeak: https://www.teamspeak.com/en/downloads/#ts3client
* Update of download de laatste versie van Java: https://java.com/getjava
* Download het bestand rechtstreeks vanaf onze server [Arma 3 Sync 1.7.102](https://arma3sync.lowtac.nl/Wiki/arma3sync-installer-1-7-102.exe)

**Let op! Lowlands Tactical maakt gebruik van een eigen modset die we zelf updaten. Dit betekend dat we GEEN gebruik maken van Steam workshop mods. Het is daarom niet mogelijk om met vergelijkbare versies afkomstig van de Steam Workshop de server te joinen!**

We hebben hiervoor gekozen om te waarborgen dat mods niet zomaar breken, of een dergelijk (grote) update ineens een scenario of zelfs de hele server in de war gooit.

***

## Alles is geïnstalleerd.. en nu?
Na installatie zal Arma3Synch (hierna afgekort naar A3S) op je bureaublad staan. Na het opstarten word je begroet met een scherm dat vraagt om je Arma 3 installatie folder, en daarin de .exe aan te wijzen.
<br><br>
<p align="center">
  <img src="https://arma3sync.lowtac.nl/Wiki/Modsets/01-Greetings.jpg">
<br><br>
  <sup>Het scherm waar je waarschijnlijk mee begroet gaat worden.</sup>
</p>

_Als het goed is, dan detecteert hij automatisch de juiste .exe. Dit kan `arma3` of `arma3_x64` zijn (voorkeur gaat uit naar de x64 versie) Mocht bij bijvoorbeeld `arma3battleye`, `arma3launcher`, `arma3server` of `arma3server_x64` per ongeluk pakken, is het zaak om deze te veranderen naar `arma3` of `arma3_x64`._

Als het goed is start A3S nu normaal op en kan je aan de slag. Klik op de tab **Addons Options** en controleer of het pad van je ArmA 3 installatie goed staat. Dit dient goed te staan zodat A3S de mods die je met deze tool gaat downloaden ook terug kan vinden in je ArmA 3 folder. Als hij bijvoorbeeld een andere map leest in plaats van je Arma 3 Root folder ziet hij de mods niet en moet je handmatig de juiste folder aangeven.
<br><br>
<p align="center">
  <img src="https://arma3sync.lowtac.nl/Wiki/Modsets/02-AddonOptions.jpg">
<br><br>
  <sup>Addon Options Tabblad.</sup>
</p>

Als de **Addons Options** goed staan, klik je de tab **Launcher Options** en zorg ervoor dat de volgende opties zijn aangevinkt:
|       Parameter     |                                  Effect                                    |
|       ------------- |                               -------------                                | 
| No Pause            | Zorgt ervoor dat Arma blijft draaien op de achtergrond (Bijv. Alt-tabbed)  |
| No Splash Screen    | Zet het splash-scherm uit en laat de game gelijk laden                     |
| Default World Empty | Zorgt ervoor dat er geen map wordt ingeladen in het hoofdmenu.             |

<br><br>
<p align="center">
  <img src="https://arma3sync.lowtac.nl/Wiki/Modsets/03-LauncherOptions.jpg">
<br><br>
  <sup>Launcher Options.</sup>
</p>

### De opties staan goed. Tijd om de modset te downloaden!
Klik op de tab **Repositories**, deze is als het goed is leeg.
<br><br>
<p align="center">
  <img src="https://arma3sync.lowtac.nl/Wiki/Modsets/04-Repositories.jpg">
<br><br>
  <sup>Repositories.</sup>
</p>

Klik op de blauwe plus rechts boven. In het scherm wat dan verschijnt vul dan deze gegevens in: <br>
Optie 1: Voer de Public URL in en klik op import. <br>
Optie 2: Voer de andere gegevens handmatig in.

## Kopieer onderstaande link en plak deze in de *Public auto-config url*
```
https://arma3sync.lowtac.nl/a3s-Repos/Moderne/autoconfig
```

<br><br>
<p align="center">
  <img src="https://arma3sync.lowtac.nl/Wiki/Modsets/05-AddRepos.jpg">
<br><br>
  <sup>In dit scherm vul je de repository gegevens in.</sup>
</p>

<br><br>
<p align="center">
  <img src="https://arma3sync.lowtac.nl/Wiki/Modsets/06-AddReposSync.jpg">
<br><br>
  <sup>Voor als je het niet kan vinden.</sup>
</p>

Druk dan op de knop OK om de repository toe te voegen. Terug in de Repositories tab klik je op de knop **Connect to Repository**:
<br><br>
<p align="center">
  <img src="https://arma3sync.lowtac.nl/Wiki/Modsets/07-Repositories2.jpg">
<br><br>
  <sup>De knop connect to repository is in dit voorbeeld met rood omringt, mocht je het niet kunnen vinden.</sup>
</p>

Om te garanderen dat de download zo snel mogelijk binnen is, kan je settings aanpassen om de maximale download snelheid aan te geven. Klik hiervoor op de grote settings knop links in het scherm en zet de **Maximum number of connections** op **10**:
<br><br>
<p align="center">
  <img src="https://arma3sync.lowtac.nl/Wiki/Modsets/08-Settings.jpg">
<br><br>
  <sup>Maximum number of connections in het settings venster</sup>
</p>

Klik op de groene **V** links boven om de mods die je hebt te verifiëren. Als alles geverifieerd is kan je op **Select All** drukken en de download starten! 
<br><br>
<p align="center">
  <img src="https://arma3sync.lowtac.nl/Wiki/Modsets/09-ConnectRepo.jpg">
<br><br>
  <sup>De omcirkelde knoppen: Verify (Groene V), Select all en Start Download</sup>
</p>
Dit is het moment om koffie of thee te zetten, want het kan even duren voordat A3S alle mods gedownload heeft.

## Na een periode van geduld is de modset klaar met downloaden. 
1. Nu kan je de repo toevoegen in de **Addons**. Klik op de blauwe plus **Modsets** onder **Get addon group from Events**, selecteer **Lowlands Tactical - Moderne** en vervolgens op **OK**
Nu nog de DLC's klaar zetten..
<br><br>
<p align="center">
  <img src="https://arma3sync.lowtac.nl/Wiki/Modsets/10-AddGroup.jpg">
<br><br>
  <sup>Voor als je het niet kan vinden.</sup>
</p>

2. Bij het opstarten met de DLC's is het mogelijk dat het hoofd menu in de **DLC style** wordt weergegeven. Deze kun je terug zetten naar standaard door te klikken op **Options** en vervolgens **Standaard Main Menu** en **Standaard Multiplayer Menu**. Na opnieuw opstarten van Arma is de standaard style weer terug.

## Alles staat gereed! Optioneel kun je nog het volgende doen..

Zodra hij klaar is met downloaden, kan je ervoor kiezen om in de tab online de servergegevens toe te voegen zodat je in twee klikken de server kan joinen zonder dat je de mods telkens aan of uit hoeft te zetten. Hiervoor doe je het volgende:

1. De Modset is nu gesynced en deze kunnen we toewijzen aan een server. Hiervoor gaan we naar het **Online** tab. Als het goed is, is deze leeg. We gaan een nieuwe server toevoegen door wederom op de blauwe **+** te drukken.
<br><br>
<p align="center">
  <img src="https://arma3sync.lowtac.nl/Wiki/Modsets/11-Server.jpg">
<br><br>
  <sup>Voor als je het niet kan vinden.</sup>
</p>

2. In het scherm staat nu een nieuwe server. Als je dubbelklikt op de Description ect. kan je zelf informatie invullen. Vul de Servergegevens in:

|       Naam      |          Waarde        |
|   ------------- |      -------------     |
| Description     | Lowlands Tactical      |
| IP Adress       | games.lowtac.nl        |
| Port            | 2302                   |
| Password        | TacLow                 |
| Join with Modset| Laat deze leeg, volg onderstaande afbeelding voor de juiste vinkjes            |

3. Zodra je dit gedaan hebt, kan je weer terug naar de Addons tab en selecteer je onderaan de Lowlands Tactical - Lowlands Tactical Modset. Zo kan je met een druk op de knop de juiste mods inladen en gelijk op de server komen zonder steeds het IP en wachtwoord in te vullen.

### Ten slotte! Arma 3 start je op met de onderstaande vinkjes aan:
<br><br>
<p align="center">
  <img src="https://arma3sync.lowtac.nl/Wiki/Modsets/12-ReadyToLaunch.jpg">
<br><br>
  <sup>Join Server onderin de addons tab</sup>
</p>

### Toevoegen van extra (thema)repositories:
Met enige regelmaat wordt er gebruik gemaakt van extra thema repositories. Deze zijn op dezelfde manier te downloaden zoals hierboven beschreven, maar maken gebruik van andere inlog- en opstartgegevens.

**Repositorie settings Vietnam modset:**

### Kopieer onderstaande link en plak deze in de *Public auto-config url*
```
https://arma3sync.lowtac.nl/a3s-Repos/Vietnam/autoconfig
```

Opstarten met de volgende vinkjes:
<br><br>
<p align="center">
  <img src="https://arma3sync.lowtac.nl/Wiki/Modsets/20-RepoVietnam.jpg">
<br><br>
  <sup>Join Server onderin de addons tab</sup>
</p>
