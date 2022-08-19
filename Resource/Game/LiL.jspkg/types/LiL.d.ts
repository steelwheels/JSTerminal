declare enum attr_t {
  evil = 2,
  good = 0,
  neutral = 1
}
declare namespace attr_t {
  function description(param: attr_t): string ;
  const keys: string[] ;
}
declare enum item_kind_t {
  item_armor = 1,
  item_weapon = 0
}
declare namespace item_kind_t {
  function description(param: item_kind_t): string ;
  const keys: string[] ;
}
declare enum job_t {
  bishop = 5,
  fighter = 0,
  lord = 7,
  mage = 1,
  ninjya = 6,
  priest = 2,
  samurai = 4,
  thief = 3
}
declare namespace job_t {
  function description(param: job_t): string ;
  const keys: string[] ;
}
declare enum race_t {
  dwarf = 2,
  elf = 1,
  gnome = 3,
  hobbit = 4,
  human = 0
}
declare namespace race_t {
  function description(param: race_t): string ;
  const keys: string[] ;
}
declare enum status_t {
  agility = 4,
  hitPoint = 0,
  intelligence = 5,
  luck = 7,
  magicPoint = 1,
  piety = 6,
  strength = 2,
  vitality = 3
}
declare namespace status_t {
  function description(param: status_t): string ;
  const keys: string[] ;
}
declare enum weapon_t {
  anointed_flail = 3,
  anointed_mace = 2,
  dagger = 5,
  long_sword = 1,
  short_sword = 0,
  staff = 4
}
declare namespace weapon_t {
  function description(param: weapon_t): string ;
  const keys: string[] ;
}
