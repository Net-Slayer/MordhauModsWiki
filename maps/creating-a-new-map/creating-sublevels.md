---
description: Sublevels for making Separate Gamemodes
---

# Creating Sublevels

NOTE: \
Gamemode Prefix = This is the tag attached to your Sublevels, it Identifies your gamemode for each one, to make a quality map it helps if you have multiple gamemodes.\


<table><thead><tr><th width="97.33707865168537">Prefix</th><th width="639">Gamemode</th></tr></thead><tbody><tr><td>BR_</td><td>Battle Royale</td></tr><tr><td>FFA_</td><td>Deathmatch</td></tr><tr><td>FL_</td><td>Frontline</td></tr><tr><td>HRD_</td><td>Horde</td></tr><tr><td>INV_</td><td>Invasion</td></tr><tr><td>TDM_</td><td>Team Deathmatch</td></tr><tr><td>SG_</td><td>Sword Game</td></tr><tr><td>SKM_</td><td>Skirmish</td></tr></tbody></table>

Additionally, you can have many more different gamemode support using MetaMod [https://mod.io/g/mordhau/m/metamod](https://mod.io/g/mordhau/m/metamod)\
\
To create a sublevel, first you will need to create an empty level, right click on your content browser inside your mod folder, and create new level. Name it with the gamemode Prefix and then the level name, Ex: SKM\_CabbageLand.\
\
![](https://lh6.googleusercontent.com/Slgutg0uYnlzza7cyJKu-LurnZWDFXjgCuO35FwoQz319Tfd0PIjZcmlwn0FRCiiNO9VNB5k68\_4RO4\_fKFPAw8Qjn\_\_Q4gYZxH1-jewx3cP8Ve4XFhsaYMu7gFAhxIed4ETtqEEZHP\_y3InhzrOK04)![](https://lh6.googleusercontent.com/znS29lWCqKIXjTVJBrbGd9NLL6WtGHFIKx81dMFHxz5uUM2A5DGf0Blv8VZGyJf7EbaPXVpIG\_FsZrahuUFqFxbFlDxcMxStfk7cwTMlHMK867gAbovl\_C0yojl3HweB0qGYXiRjIDgxaOXsIQ5rLpA)

Next, open the level. Open your levels window menu&#x20;

![](https://lh5.googleusercontent.com/p3JB37pCQigVYsm92pDq7PWKEjAcaKowLvxAxgCPy4jcoRzr3OXPkwAy8TI4JjHXvLglbVdZmNYbO5BKEQ8nYOC2DVIIGfZddgRj2fqagHLc6JEvTDHYb8xa-0slnp2v5S9Zh17\_mdwDKZUmDizfjyY)

Inside you will see <mark style="color:blue;">**Persistent Level**</mark>, that is your Sublevel SKM\_CabbageLand, you need to first set your default streaming method to always loaded. _<mark style="color:red;">**Note: You will have to do this on every new sublevel you make it will revert back to blueprint only**</mark>_

![](https://lh4.googleusercontent.com/-Y9xjrr75xEIDI7HgiNYMf93V2OmDSROPmKrpKVyreXwBkn\_1Tfc3\_F2qBcmIjKeJlZCX6kjdiHHQuhsfXXpKvrws9pjqq-7DJYqXrm85oE\_WRrfMGIXxpeT7XeAR7woN7mAeLp5\_Tzb3zYAOhtTzLM)

Next you’ll want to add your base level, hit Add Existing and select your base map that you created.\
![](https://lh5.googleusercontent.com/Hn9RWXZAD--4IqFuJeRrzZ3lbyC0ej4ayadtsW\_cWIH7Pl5e65T1oEQ0anqU6oAWy8JJywVXqbMN\_QBhzLE-XvBzR1uUNeQDHUOhm-DTeaI4UgzzMufwL5-HTr\_YuA-YqwltQiQL4o5UkHaKQ3B5uaQ)

Then you’ll have to double click on Persistent Level again, so it shows <mark style="color:blue;">blue</mark>. Whichever map is <mark style="color:blue;">blue</mark> is the one you are editing. Additionally you can hit the Lock button next to the base level, to prevent accidental editing of it. (Useful for vanilla level sublevels, where changing the base map will not have any effect in game)\
![](https://lh5.googleusercontent.com/kvIlbUNlfMZOjf1cCW7tc9NfhaDafbfLcN725ca2MhVUvrbNuI6rjZL45g2Wvjhy6\_FjoB9xbXksVoq80zlvcflna4PLzO2aokdWJnietWkWPmN5wolIcDcfNPQCjtuJMpp5prngY0\_Z2KUTLznNUeM)

Sublevel is now complete, you can add your gamemode and anything needed with it. Now if we wanted to play on this map we would run **`changemap SKM_CabbageLand`**

