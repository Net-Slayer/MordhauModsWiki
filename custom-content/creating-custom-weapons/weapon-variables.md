---
description: Commonly used weapon variables with descriptiions
---

# Weapon Variables

Equipment Name = Name of your weapon

There are 4 attacks you need to worry about. If you search the name of the attack it will show all available variables for the attack motion.

<table><thead><tr><th width="285">Attack</th><th>Description</th></tr></thead><tbody><tr><td>Stab Attack</td><td>Normal-mode Stab</td></tr><tr><td>Second Stab Attack</td><td>Alt-mode Stab</td></tr><tr><td>Strike Attack</td><td>Normal-mode Strike</td></tr><tr><td>Second Strike Attack</td><td>Alt-mode Strike</td></tr><tr><td>Kick Attack</td><td>Normal-mode Kick Attack</td></tr><tr><td>Second Kick Attack</td><td>Alt-Mode Kick Attack</td></tr><tr><td>Brawl</td><td>Currently Unknown </td></tr></tbody></table>

Windup = The amount of time it takes to wind up your weapon before you can start doing damage. (Higher numbers will make this weapon very slow, If you want the weapon to be fast I would recommend around .3-.5 windup, for slower weapons anything higher than .5 but don’t go higher than 1 unless you want&#x20;

Release = The amount of time the weapon can do damage. If you have a higher number it will do damage for a longer time. Faster weapons usually have .3-.45 release, with .5-.8 being slow release weapons. Typically .525 release works best for most weapons.&#x20;

_<mark style="color:red;">**Note: If you make weapons with release/windup values over 0.7 you can expect them to be very difficult to play with, but also can be fun and different.**</mark>_

### **Damage = The amount of Damage it will do**

**See the below chart for info on any of the damage arrays that exist in the weapons.**

<table><thead><tr><th width="108">Array ID</th><th>Armor Type</th></tr></thead><tbody><tr><td>0</td><td>No Armor</td></tr><tr><td>1</td><td>Light Armor</td></tr><tr><td>2</td><td>Medium Armor</td></tr><tr><td>3</td><td>Heavy Armor</td></tr></tbody></table>

Head Bonus =  The amount of bonus damage that is done if the hit is a headshot, Same armor settings apply as above.&#x20;

Leg Bonus = Same thing as above only legs. Is usually a negative value to make you deal less damage to legs.

Wood Damage = The amount of damage it does to structures that can be destroyed. (Spikes, objectives)

Stone Damage = The amount of damage it does to stone destroyables (none currently exist in vanilla mordhau)

Chip Damage = This will define how much damage your weapon will still do if they block. If you set value at 1 it will do the Damage you have set regardless if they block or not. Higher Than 1 can make it do increased damage if they block.

Stop on Hit = Will make the weapon stop on hit like a maul or eveningstar would. Ogre Club does not have this enabled like other blunt weapons do.&#x20;

Stamina Drain = How much Stamina Cost is used when doing the specific attack.&#x20;

No Flinch = Makes the enemy not flinch when hit (carving Knife)

Can Combo = Makes your weapon able to Combo

Costs = The amount of stamina cost for each of the settings..Feint, Morph, Chamber, etc.

Ragdoll On Block/Hit = Makes the enemy Ragdoll on Block/Hit

Miss Recovery = Amount of time you recover from missing

Hit Knockback Factor = How far the target gets knocked back when hit

Hit Stamina Reward = How much Stamina you gain for hitting.&#x20;

Speed Bonus Percentage Equipped/Holstered = Can increase the amount of movement speed you get when Equipped/Holstered.

BackPedal Speed Factor Equipped = How fast you can walk backwards

AnimationProfile = The weapons animation profile, you may need to edit the Offset Hand Locations, Ky Offset, to adjust to the new profile you use.&#x20;

Supersprint Modifier = Increases Lunge distance on weapon swings and also dodge distance

Attack Mask/Parry Mask = These determine what happens when you get hit/what you can block with. For example attack mask 0 makes a weapon unblockable and stuns on impact.

Ranged Draw Time = How long it takes to draw your ranged weapon before its ready to fire.

Ranged Cancel time = How long it takes to cancel a ranged attack (feint)

Ranged Release Time = How long it takes for your weapon to actually fire after the Draw time is finished and Fire conditions are used

Ranged Reload Time = How long it takes to reload with available ammo

Auto Reload time = How long before your weapon will auto reload, -1 disables

Max Hold Draw Time = only used if below boolean is true, max time you can hold draw on weapon.&#x20;

DoNotFireAfterMaxHoldDrawTime = This will make it so that after you have reached your max draw time, if true it will let you hold indefinitely.&#x20;

## Projectile Only

InitialSpeed = How fast the projectile will go

MaxSpeed = The maximum speed your projectile can go, usually doesn't get used&#x20;

ShouldBounce = If you want your projectile to bounce, check this. You can also adjust the Bounciness and Friction to go with it, as well as the various Bounce Force settings.

ShouldFlinch = If you want the projectile to flinch the enemy

HitKnockback = if you want enemy to get knockbacked when hit by projectile&#x20;

GiveEquipmentOnPickup = If you want to be able to pickup the ammo as restock, assign the weapon here.&#x20;

WillPassThroughOn = Can set projectiles to pass through certain materials like flesh.

DestroyWhenTerminated = if you want the projectile to vanish after hit (for like bullets)
