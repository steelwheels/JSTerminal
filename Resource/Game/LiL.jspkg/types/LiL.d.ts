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
  ninjya = 6,
  bishop = 5,
  priest = 2,
  fighter = 0,
  thief = 3,
  mage = 1,
  lord = 7,
  samurai = 4
}
declare namespace job_t {
  function description(param: job_t): string ;
  const keys: string[] ;
}
declare enum race_t {
  gnome = 3,
  human = 0,
  hobbit = 4,
  elf = 1,
  dwarf = 2
}
declare namespace race_t {
  function description(param: race_t): string ;
  const keys: string[] ;
}
declare enum status_t {
  luck = 7,
  agility = 4,
  intelligence = 5,
  vitality = 3,
  magicPoint = 1,
  strength = 2,
  hitPoint = 0,
  piety = 6
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
