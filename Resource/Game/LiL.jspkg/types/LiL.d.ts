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
  priest = 2,
  mage = 1,
  fighter = 0,
  ninjya = 6,
  thief = 3,
  bishop = 5,
  lord = 7,
  samurai = 4
}
declare namespace job_t {
  function description(param: job_t): string ;
  const keys: string[] ;
}
declare enum race_t {
  dwarf = 2,
  hobbit = 4,
  human = 0,
  elf = 1,
  gnome = 3
}
declare namespace race_t {
  function description(param: race_t): string ;
  const keys: string[] ;
}
declare enum status_t {
  magicPoint = 1,
  hitPoint = 0,
  strength = 2,
  vitality = 3,
  agility = 4,
  intelligence = 5,
  piety = 6,
  luck = 7
}
declare namespace status_t {
  function description(param: status_t): string ;
  const keys: string[] ;
}
declare enum weapon_t {
  dagger = 5,
  staff = 4,
  anointed_mace = 2,
  long_sword = 1,
  short_sword = 0,
  anointed_flail = 3
}
declare namespace weapon_t {
  function description(param: weapon_t): string ;
  const keys: string[] ;
}
