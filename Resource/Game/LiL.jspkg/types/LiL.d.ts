declare enum attr_t {
  neutral = 1,
  good = 0,
  evil = 2
}
declare namespace attr_t {
  function description(param: attr_t): string ;
  const keys: string[] ;
}
declare enum job_t {
  samurai = 4,
  mage = 1,
  bishop = 5,
  fighter = 0,
  priest = 2,
  thief = 3,
  lord = 7,
  ninjya = 6
}
declare namespace job_t {
  function description(param: job_t): string ;
  const keys: string[] ;
}
declare enum race_t {
  elf = 1,
  hobbit = 4,
  human = 0,
  gnome = 3,
  dwarf = 2
}
declare namespace race_t {
  function description(param: race_t): string ;
  const keys: string[] ;
}
declare enum status_t {
  agility = 4,
  magicPoint = 1,
  luck = 7,
  hitPoint = 0,
  intelligence = 5,
  strength = 2,
  vitality = 3,
  piety = 6
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
