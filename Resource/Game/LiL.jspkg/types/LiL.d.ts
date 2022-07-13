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
  ninjya = 6,
  samurai = 4,
  bishop = 5,
  fighter = 0,
  thief = 3,
  lord = 7,
  mage = 1,
  priest = 2
}
declare namespace job_t {
  function description(param: job_t): string ;
  const keys: string[] ;
}
declare enum race_t {
  gnome = 3,
  dwarf = 2,
  hobbit = 4,
  human = 0,
  elf = 1
}
declare namespace race_t {
  function description(param: race_t): string ;
  const keys: string[] ;
}
declare enum status_t {
  luck = 7,
  intelligence = 5,
  piety = 6,
  hitPoint = 0,
  magicPoint = 1,
  strength = 2,
  vitality = 3,
  agility = 4
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
