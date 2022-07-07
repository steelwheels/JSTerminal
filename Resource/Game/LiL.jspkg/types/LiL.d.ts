declare enum attr_t {
  neutral = 1,
  evil = 2,
  good = 0
}
declare namespace attr_t {
  function description(param: attr_t): string ;
  const keys: string[] ;
}
declare enum job_t {
  bishop = 5,
  priest = 2,
  lord = 7,
  thief = 3,
  fighter = 0,
  ninjya = 6,
  samurai = 4,
  mage = 1
}
declare namespace job_t {
  function description(param: job_t): string ;
  const keys: string[] ;
}
declare enum race_t {
  gnome = 3,
  elf = 1,
  dwarf = 2,
  hobbit = 4,
  human = 0
}
declare namespace race_t {
  function description(param: race_t): string ;
  const keys: string[] ;
}
declare enum status_t {
  agility = 4,
  luck = 7,
  vitality = 3,
  piety = 6,
  strength = 2,
  hitPoint = 0,
  magicPoint = 1,
  intelligence = 5
}
declare namespace status_t {
  function description(param: status_t): string ;
  const keys: string[] ;
}
declare enum weapon_t {
  short_sword = 0,
  long_sword = 1
}
declare namespace weapon_t {
  function description(param: weapon_t): string ;
  const keys: string[] ;
}
