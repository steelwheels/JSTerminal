declare enum attr_t {
  good = 0,
  neutral = 1,
  evil = 2
}
declare namespace attr_t {
  function description(param: attr_t): string ;
  const keys: string[] ;
}
declare enum job_t {
  samurai = 4,
  bishop = 5,
  ninjya = 6,
  thief = 3,
  fighter = 0,
  priest = 2,
  mage = 1,
  lord = 7
}
declare namespace job_t {
  function description(param: job_t): string ;
  const keys: string[] ;
}
declare enum race_t {
  human = 0,
  gnome = 3,
  elf = 1,
  dwarf = 2,
  hobbit = 4
}
declare namespace race_t {
  function description(param: race_t): string ;
  const keys: string[] ;
}
declare enum status_t {
  strength = 2,
  vitality = 3,
  hitPoint = 0,
  piety = 6,
  agility = 4,
  magicPoint = 1,
  intelligence = 5,
  luck = 7
}
declare namespace status_t {
  function description(param: status_t): string ;
  const keys: string[] ;
}
declare enum weapon_t {
  swodd = 0
}
declare namespace weapon_t {
  function description(param: weapon_t): string ;
  const keys: string[] ;
}
