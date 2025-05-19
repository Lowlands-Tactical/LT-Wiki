---
layout: doc
title: Troubleshooting
---

# 1.4. Troubleshooting

Deze pagina helpt je bij het oplossen van veelvoorkomende problemen bij het opstarten van Arma 3 of het joinen van onze server.

Controleer altijd eerst of je:
- De juiste modset gebruikt via onze ArmA3Sync repository
- TeamSpeak 3 hebt draaien met de ACRE2 plugin
- Geen extra mods hebt geladen
- Arma 3 zonder launch parameters zoals `--noLogs` start

## 1.4.1. Je wordt gekickt bij het joinen van de server

### Symptoom
Je krijgt een foutmelding zoals:

```
You were kicked off the game.
Session lost / Wrong signature for file: @ace\addons\ace_medical.pbo
```

### Oorzaak
- Je hebt een verkeerde versie van een mod (bijvoorbeeld via Steam Workshop)
- Je hebt een extra mod geladen die niet in onze modset zit

### Oplossing
- Verwijder álle andere mods behalve die van onze repo
- Werk je modset bij via ArmA3Sync
- Gebruik géén Steam Workshop voor onze mods

## 1.4.2. Je mist een mod en krijgt een "Missing Module" fout

### Symptoom

Bij het opstarten van een missie krijg je een melding als:

```
Missing addons detected:
nld_main
alive_main
```

### Oorzaak
Je bent vergeten een verplichte mod in te laden.

### Oplossing
- Start Arma 3 opnieuw met de correcte preset via ArmA3Sync
- Controleer of alle mappen correct zijn gedownload in je modmap
- Herstart indien nodig TeamSpeak + Arma 3

## 1.4.3. ACRE2 werkt niet of je hoort/spreekt niks

### Symptomen
- Je hoort niemand op de radio
- Niemand hoort jou via 3D audio
- In Teamspeak staat: `ACRE2: NO ACRE`

### Oorzaken
- De ACRE2 plugin is niet ingeschakeld in TeamSpeak
- TeamSpeak was open tijdens installatie van ACRE2
- Je bent niet in de juiste TeamSpeak-channel met Recruit-rechten
- Arma 3 of TeamSpeak is niet als Administrator gestart

### Oplossing
- Sluit TeamSpeak en herinstalleer ACRE2 via ArmA3Sync
- Start TeamSpeak en Arma 3 als Administrator
- Zorg dat je de rol "Recruit" hebt in de juiste TeamSpeak channel
- Controleer dat de plugin geactiveerd is: *Tools > Options > Addons > ACRE2*

## 1.4.4. Geen duidelijke foutmelding, maar je wordt uit de game gegooid

### Oplossing
1. Ga naar je `.RPT` log-bestand: `C:\Users[jouw naam]\AppData\Local\Arma 3`
2. Open het nieuwste `.RPT` bestand (gesorteerd op datum/tijd).
3. Scroll naar beneden en kijk of je regels ziet als:

```
Signature mismatch for file xyz.pbo
Cannot load mission...
```

> Gebruik deze foutmelding om te achterhalen welke mod corrupt, onjuist of incompleet is.

## 1.4.5. Andere veelvoorkomende problemen

| Probleem                           | Oplossing                                                       |
|-----------------------------------|------------------------------------------------------------------|
| FPS drops / lag                   | Verlaag terrein/objectkwaliteit, schakel shadows/bloom uit       |
| Wapens verdwijnen in arsenal      | Zorg dat alle required mods geladen zijn (bijv. RHS/NLD Pack)    |
| ACRE2 radios zijn leeg            | Reset loadout via arsenal, of herpak radio via interactie        |
| Geen interactiemenu (ACE)         | Zet ACE interactie op `Windows`, Self interact op `Ctrl + Windows`|
| Je spawnt alleen of verkeerd team | Slot correct, en herstart missie indien nodig     