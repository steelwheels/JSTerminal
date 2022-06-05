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
  bishop = 5,
  ninjya = 6,
  lord = 7,
  samurai = 4,
  priest = 2,
  fighter = 0,
  thief = 3,
  mage = 1
}
declare namespace job_t {
  function description(param: job_t): string ;
  const keys: string[] ;
}
declare enum race_t {
  gnome = 3,
  hobbit = 4,
  human = 0,
  dwarf = 2,
  elf = 1
}
declare namespace race_t {
  function description(param: race_t): string ;
  const keys: string[] ;
}
declare enum status_t {
  hitPoint = 0,
  piety = 6,
  luck = 7,
  agility = 4,
  strength = 2,
  vitality = 3,
  intelligence = 5,
  magicPoint = 1
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
