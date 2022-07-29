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
  thief = 3,
  samurai = 4,
  lord = 7,
  fighter = 0,
  mage = 1,
  bishop = 5,
  priest = 2,
  ninjya = 6
}
declare namespace job_t {
  function description(param: job_t): string ;
  const keys: string[] ;
}
declare enum race_t {
  dwarf = 2,
  human = 0,
  gnome = 3,
  hobbit = 4,
  elf = 1
}
declare namespace race_t {
  function description(param: race_t): string ;
  const keys: string[] ;
}
declare enum status_t {
  piety = 6,
  strength = 2,
  intelligence = 5,
  luck = 7,
  hitPoint = 0,
  agility = 4,
  magicPoint = 1,
  vitality = 3
}
declare namespace status_t {
  function description(param: status_t): string ;
  const keys: string[] ;
}
declare enum weapon_t {
  anointed_mace = 2,
  short_sword = 0,
  staff = 4,
  anointed_flail = 3,
  long_sword = 1,
  dagger = 5
}
declare namespace weapon_t {
  function description(param: weapon_t): string ;
  const keys: string[] ;
}
