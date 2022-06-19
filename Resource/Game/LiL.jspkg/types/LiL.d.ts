declare enum attr_t {
  good = 0,
  evil = 2,
  neutral = 1
}
declare namespace attr_t {
  function description(param: attr_t): string ;
  const keys: string[] ;
}
declare enum job_t {
  mage = 1,
  thief = 3,
  lord = 7,
  fighter = 0,
  bishop = 5,
  priest = 2,
  ninjya = 6,
  samurai = 4
}
declare namespace job_t {
  function description(param: job_t): string ;
  const keys: string[] ;
}
declare enum race_t {
  gnome = 3,
  elf = 1,
  dwarf = 2,
  human = 0,
  hobbit = 4
}
declare namespace race_t {
  function description(param: race_t): string ;
  const keys: string[] ;
}
declare enum status_t {
  piety = 6,
  magicPoint = 1,
  luck = 7,
  strength = 2,
  intelligence = 5,
  vitality = 3,
  hitPoint = 0,
  agility = 4
}
declare namespace status_t {
  function description(param: status_t): string ;
  const keys: string[] ;
}
declare enum weapon_t {
  long_sword = 1,
  short_sword = 0
}
declare namespace weapon_t {
  function description(param: weapon_t): string ;
  const keys: string[] ;
}
