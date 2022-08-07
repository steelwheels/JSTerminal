declare enum attr_t {
  good = 0,
  evil = 2,
  neutral = 1
}
declare namespace attr_t {
  function description(param: attr_t): string ;
  const keys: string[] ;
}
declare enum item_kind_t {
  item_weapon = 0,
  item_armor = 1
}
declare namespace item_kind_t {
  function description(param: item_kind_t): string ;
  const keys: string[] ;
}
declare enum job_t {
  samurai = 4,
  fighter = 0,
  bishop = 5,
  mage = 1,
  thief = 3,
  ninjya = 6,
  lord = 7,
  priest = 2
}
declare namespace job_t {
  function description(param: job_t): string ;
  const keys: string[] ;
}
declare enum race_t {
  human = 0,
  hobbit = 4,
  gnome = 3,
  elf = 1,
  dwarf = 2
}
declare namespace race_t {
  function description(param: race_t): string ;
  const keys: string[] ;
}
declare enum status_t {
  hitPoint = 0,
  agility = 4,
  intelligence = 5,
  magicPoint = 1,
  piety = 6,
  luck = 7,
  strength = 2,
  vitality = 3
}
declare namespace status_t {
  function description(param: status_t): string ;
  const keys: string[] ;
}
declare enum weapon_t {
  short_sword = 0,
  dagger = 5,
  anointed_mace = 2,
  anointed_flail = 3,
  long_sword = 1,
  staff = 4
}
declare namespace weapon_t {
  function description(param: weapon_t): string ;
  const keys: string[] ;
}
