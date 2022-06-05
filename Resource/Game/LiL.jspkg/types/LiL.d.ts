declare enum attr_t {
  evil = 2,
  neutral = 1,
  good = 0
}
declare namespace attr_t {
  function description(param: attr_t): string ;
  const keys: string[] ;
}
declare enum job_t {
  mage = 1,
  fighter = 0,
  lord = 7,
  bishop = 5,
  samurai = 4,
  thief = 3,
  priest = 2,
  ninjya = 6
}
declare namespace job_t {
  function description(param: job_t): string ;
  const keys: string[] ;
}
declare enum race_t {
  human = 0,
  dwarf = 2,
  elf = 1,
  hobbit = 4,
  gnome = 3
}
declare namespace race_t {
  function description(param: race_t): string ;
  const keys: string[] ;
}
declare enum status_t {
  hitPoint = 0,
  strength = 2,
  piety = 6,
  intelligence = 5,
  magicPoint = 1,
  vitality = 3,
  luck = 7,
  agility = 4
}
declare namespace status_t {
  function description(param: status_t): string ;
  const keys: string[] ;
}
declare enum weapon_t {
  sword = 0
}
declare namespace weapon_t {
  function description(param: weapon_t): string ;
  const keys: string[] ;
}
