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
  samurai = 4,
  ninjya = 6,
  lord = 7,
  priest = 2,
  mage = 1,
  bishop = 5,
  thief = 3,
  fighter = 0
}
declare namespace job_t {
  function description(param: job_t): string ;
  const keys: string[] ;
}
declare enum race_t {
  elf = 1,
  human = 0,
  hobbit = 4,
  gnome = 3,
  dwarf = 2
}
declare namespace race_t {
  function description(param: race_t): string ;
  const keys: string[] ;
}
declare enum status_t {
  magicPoint = 1,
  vitality = 3,
  strength = 2,
  hitPoint = 0,
  agility = 4,
  piety = 6,
  intelligence = 5,
  luck = 7
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
