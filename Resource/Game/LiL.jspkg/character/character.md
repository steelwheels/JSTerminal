# Character

## Attributes
These attributes define the player and monster.

````
character: {
  name:                 String          "<Player name>",
  uncertainName:        String          "User",
  type:                 Type	        Type.human,
  level:                Int             0,
  hp:                   Int             100,
  ac:                   Int             10,
  damage:               Int             (10, 20) // See Damage subsection
  feature:              Feature         Player.none,
  resistance:           Registance      { },
  weak:                 WeakPoint       WeakPoint.none,
  frendship:            Frendship       Frendship.frend,
  exp:                  Int             0,
  status:               Int             "OK",

  strength:             Int             0,
  iq:                   Int             0,
  piety:                Int             0,
  vitality:             Int             0,
  agility:              Int             0,
  luck:                 Int             0
}
````

### Members


#### `feature`
The data type is defined by `Feature`.
````
enum Featue {
  none
}
````

#### `damage`
The expression for damage is presented as `(a * D) +d` where the `D` presents the random value from 1 to 6.

#### `registance`
The data type is defined by `Resistance`.
````
struct Registance {

}
````

#### WeakPoint
````
enum WeakPoint {

}
````

# Referfences
* [Apple II Wizardry #1](http://www.pekori.jp/~emonoya/monster/1/ap1m_01.html): The properties of all monsters in Apple II wizardry #1

